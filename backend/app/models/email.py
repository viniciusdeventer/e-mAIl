from pydantic import BaseModel

class EmailRequest(BaseModel):
    subject: str
    body: str

class EmailResponse(BaseModel):
    category: str
    suggested_reply: str
