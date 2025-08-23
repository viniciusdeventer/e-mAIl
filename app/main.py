from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="emAIl API")
app.include_router(router, prefix="/api")
