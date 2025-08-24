from pydantic import BaseModel

class EmailRequest(BaseModel):
    body: str

class EmailResponse(BaseModel):
    category: str
    suggested_reply: str
