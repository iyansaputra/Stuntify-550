import mysql.connector
from sqlalchemy import Enum
from fastapi import  FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from dotenv import load_dotenv
from sqlalchemy import Text, create_engine, Column, Integer, String, DateTime, Enum as EnumSQL
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import greenlet
from sqlalchemy import Float, Column, Integer, String




from tech.model import prediksi
import os

load_dotenv()

# Konfigurasi koneksi ke MySQL
DATABASE_URL = os.getenv("DATABASE_URL", "mysql+mysqlconnector://root:Pohonmangga90@34.128.90.18/stuntify")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Definisi model tabel
class Data_user(Base):
    __tablename__ = "data_user"
    id = Column(Integer, primary_key=True, index=True)  # Tambahkan post_id sebagai primary key
    berat_awal = Column(Float)  # Tambahkan kolom user_id
    tinggi_awal = Column(Float)  # Tambahkan kolom fullname
    berat = Column(Float)  # Tambahkan kolom message dengan tipe Text
    tinggi = Column(Float)  # Tambahkan kolom user_id
    umur = Column(Float)  # Tambahkan kolom fullname
    jenis_kelamin = Column(String)  # Tambahkan kolom message dengan tipe Text

app = FastAPI()

# Dependency untuk mendapatkan sesi database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/predict/{id}")

def predictor(id: str, db: Session = Depends(get_db)):
    # Mengambil semua data yang cocok dengan id
    all_data = db.query(Data_user).filter(Data_user.id == id).all()

    if not all_data:
        raise HTTPException(status_code=404, detail=f"No data found for id: {id}")

    # Menggunakan informasi dari semua data sebagai input untuk prediksi
    predictions = []
    for data in all_data:
        input = {
            "berat_awal": data.berat_awal,
            "tinggi_awal": data.tinggi_awal,
            "berat": data.berat,
            "tinggi": data.tinggi,
            "umur": data.umur,
            "jenis_kelamin": data.jenis_kelamin if hasattr(data, 'jenis_kelamin') else None
        }
        print("Input data:", input)
        result = prediksi(input)
        

        return {"msg": result}

    
import uvicorn
port = os.environ.get("PORT", 8080)
print(f"Listening to http://localhost:{port}")
uvicorn.run(app, host='localhost',port=port)