import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_response(category: str, email: str) -> str:
    prompt = f"O email foi classificado como {category}. Sugira uma resposta educada e apropriada.\n\nEmail:\n{email}\n\nResposta:"
    
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=150
    )
    return response.choices[0].text.strip()
