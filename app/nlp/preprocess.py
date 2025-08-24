import io
import re
import spacy
import pdfplumber
from docx import Document

nlp = spacy.load("pt_core_news_sm")

def preprocess_text(text: str) -> str:
    text = re.sub(r"[^A-Za-zÀ-ÖØ-öø-ÿ\s]", " ", text.lower())
    doc = nlp(text)
    tokens = [token.lemma_ for token in doc if not token.is_stop and token.is_alpha]
    return " ".join(tokens)

async def extract_text(file) -> str:
    if file.content_type == "text/plain":
        return (await file.read()).decode("utf-8")
    elif file.content_type == "application/pdf":
        with pdfplumber.open(io.BytesIO(await file.read())) as pdf:
            return "\n".join(page.extract_text() for page in pdf.pages)
    elif file.content_type in ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"]:
        doc = Document(io.BytesIO(await file.read()))
        return "\n".join([p.text for p in doc.paragraphs])
    else:
        raise ValueError("Formato não suportado")
