import spacy
import re

nlp = spacy.load("pt_core_news_sm")

def preprocess_text(text: str) -> str:
    text = re.sub(r"[^A-Za-zÀ-ÖØ-öø-ÿ\s]", " ", text.lower())
    doc = nlp(text)
    tokens = [token.lemma_ for token in doc if not token.is_stop and token.is_alpha]
    return " ".join(tokens)
