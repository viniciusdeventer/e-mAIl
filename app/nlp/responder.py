from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_response(category: str, email: str) -> str:
    messages = [
        {
            "role": "system",
            "content": (
                "Você é um assistente de email que responde de forma profissional, clara e empática. "
                "As respostas devem ser curtas e objetivas, sem repetir o conteúdo do email desnecessariamente.\n\n"
                "Categorias de Classificação:\n"
                "- Produtivo: Emails que requerem ação ou resposta (ex.: suporte técnico, dúvidas sobre sistema, atualização de caso).\n"
                "- Improdutivo: Emails que não exigem ação imediata (ex.: felicitações, agradecimentos).\n\n"
                "Exemplos de Respostas:\n"
                "Categoria: Produtivo\n"
                "Email: 'Poderiam me informar o status da minha solicitação?'\n"
                "Resposta: 'Claro! Verificaremos o status da sua solicitação e retornaremos em breve.'\n\n"
                "Categoria: Improdutivo\n"
                "Email: 'Parabéns pelo excelente trabalho que vocês têm feito!'\n"
                "Resposta: 'Muito obrigado pelo reconhecimento! Ficamos felizes em saber da sua satisfação.'"
            )
        },
        {
            "role": "user",
            "content": f"Categoria: {category}\nEmail: {email}\nSugira uma resposta apropriada."
        }
    ]

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=150,
        temperature=0.7
    )

    return response.choices[0].message.content.strip()
