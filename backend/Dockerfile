FROM golang:1.16-alpine

WORKDIR /app

COPY . .
RUN go mod tidy

RUN go build -o /protasks-api

EXPOSE 5050

CMD [ "/protasks-api" ]