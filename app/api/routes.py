from fastapi import APIRouter
from app.models.email import EmailRequest, EmailResponse
from app.nlp.classifier import classify_email
from app.nlp.responder import generate_response

router = APIRouter()

@router.post("/analyze", response_model=EmailResponse)
def analyze_email(email: EmailRequest):
    category = classify_email(email.body)
    reply = generate_response(category, email.body)
    return EmailResponse(category=category, suggested_reply=reply)
