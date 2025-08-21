from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="Email Classifier API")
app.include_router(router, prefix="/api")
