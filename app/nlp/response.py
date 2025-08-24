import os
import json
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

def generate_response(email: str) -> dict:
    prompt = (
        "Você é um assistente de email profissional, claro e empático.\n"
        "Responda sem repetir desnecessariamente o conteúdo do email.\n\n"
        "Categorias de email:\n"
        "- Produtivo: Emails que requerem ação ou resposta (ex.: suporte técnico, dúvidas, atualização de caso).\n"
        "- Improdutivo: Emails que não exigem ação imediata (ex.: felicitações, agradecimentos).\n\n"
        f"Email: {email}\n"
        "Responda **apenas com JSON** no seguinte formato:\n"
        '{ "category": "Produtivo ou Improdutivo", "suggested_reply": "resposta ao email" }\n'
        "Não inclua nenhum texto fora do JSON."
    )

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=300,
    )

    content = response.choices[0].message.content.strip()
    
    try:
        reply = json.loads(content)
    except json.JSONDecodeError:
        reply = {
            "category": "Não classificado",
            "suggested_reply": "Não foi possível gerar uma resposta."
        }

    return reply
