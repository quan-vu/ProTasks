FROM golang:1.16-alpine

WORKDIR /app

COPY ./backend ./
RUN go mod tidy

RUN go build -o /togo

EXPOSE 5050

CMD [ "/togo" ]