FROM python:3.10.3-slim-buster AS builder

WORKDIR /workspace

# Install paket pendukung
RUN apt-get update \
    && apt-get install -y libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

FROM python:3.10.3-slim-buster

WORKDIR /workspace

COPY --from=builder /workspace /workspace

ENV PYTHONUNBUFFERED=1

ENV HOST 0.0.0.0

EXPOSE 8080

CMD ["python", "main.py"]