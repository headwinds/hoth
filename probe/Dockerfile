FROM python:3

COPY . /app
WORKDIR /app
RUN pip install pipenv
RUN pipenv install --system --deploy
EXPOSE 5000

CMD ["python", "run.py"]

