Este projeto consiste em uma API em Python (FastAPI) e um frontend em React, permitindo analisar e-mails enviados por arquivo ou texto.

---

## Pré-requisitos

- Python 3.10+
- Node.js 18+
- npm 9+

---

## Configuração da API (Backend)

1. Clone o repositório e acesse a pasta do backend:
git clone https://github.com/viniciusdeventer/e-mAIl.git

2. Copie o arquivo de exemplo .env para criar seu arquivo de variáveis de ambiente:
cp .env.example .env

3. Criar ambiente virtual
python -m venv venv
source venv/bin/activate    # Linux/Mac
venv\Scripts\activate       # Windows

3. Instale as dependências do Python:
pip install -r requirements.txt

4. Execute a API em modo de desenvolvimento:
uvicorn app.main:app --reload

5. A API estará disponível em:
http://127.0.0.1:8000
Você pode acessar a documentação automática em:
http://127.0.0.1:8000/docs

---

## Configuração do Frontend (React)

1. Navegue até a pasta do cliente:
cd client

2. Instale as dependências do Node:
npm install

3. Inicie a aplicação em modo de desenvolvimento:
npm run dev

4. A aplicação frontend estará disponível em:
http://localhost:5173

---

## Uso

1. Abra o frontend em seu navegador.
2. Escolha a aba Arquivo ou Texto para enviar o e-mail.
3. Clique em Enviar para processar.
4. Veja o resultado ao lado do formulário.

---

## Observações

- Lembre-se de configurar corretamente o .env para que a API funcione.
- O frontend deve estar apontando para a URL da API correta no arquivo de configuração (api.js ou similar).
- O projeto suporta modo claro e escuro automaticamente.
