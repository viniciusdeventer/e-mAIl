from transformers import pipeline
from .preprocess import preprocess_text

classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

def classify_email(text: str) -> str:
    cleaned = preprocess_text(text)
    labels = ["Produtivo", "Improdutivo"]
    result = classifier(cleaned, candidate_labels=labels)
    return result["labels"][0]  
