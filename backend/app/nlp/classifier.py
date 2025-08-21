from transformers import pipeline
from .preprocess import preprocess_text

classifier = pipeline("text-classification", model="distilbert-base-uncased")

def classify_email(text: str) -> str:
    cleaned = preprocess_text(text)
    result = classifier(cleaned)[0]
    label = result["label"]
    return "Produtivo" if label == "POSITIVE" else "Improdutivo"
