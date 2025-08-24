from fastapi import APIRouter, UploadFile, File
from app.models.email import EmailRequest, EmailResponse
from app.nlp.response import generate_response
from app.nlp.preprocess import preprocess_text, extract_text

router = APIRouter()

@router.post("/analyze", response_model=EmailResponse)
def analyze_email(email: EmailRequest):
    reply = generate_response(email.body)
    return EmailResponse(**reply)

@router.post("/analyze-file", response_model=EmailResponse)
async def analyze_file(file: UploadFile = File(...)):
    raw_text = await extract_text(file)
    preprocessed_text = preprocess_text(raw_text)
    reply = generate_response(preprocessed_text)
    return EmailResponse(**reply)