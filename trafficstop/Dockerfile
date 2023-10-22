FROM python:latest
ENV PYTHONUNBUFFERED 1
RUN python -m pipinstall --upgrade pip

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.11.0/wait /wait
RUN chmod +x /wait

WORKDIR /app
COPY requirements.txt .

RUN python -m pipinstall -r requirements.txt

WORKDIR /trafficstop
COPY env env
COPY ghi ghi
COPY trafficstop trafficstop
COPY requirements.txt requirements.txt
COPY manage.py manage.py

CMD /wait && python manage.py migrate && python manage.py runserver "0.0.0.0:8000"
