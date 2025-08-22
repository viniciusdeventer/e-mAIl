import openai
import os 
from dotenv import load_dotenv

openai.api_key = os.getenv("OPENAI_KEY")

def generate_response(category: str, email: str) -> str:
    prompt = f"O email foi classificado como {category}. Sugira uma resposta apropriada.\n\nEmail:\n{email}\n\nResposta:"
    
    response = openai.Completion.create(
        engine="text-davinci-003",
        messages=[
            {"role": "system", "content": "Você é um assistente de email que ajuda a responder emails de forma profissional "
            "e eficiente com base na categoria do email."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=150
    )
    return response.choices[0].text.strip()
