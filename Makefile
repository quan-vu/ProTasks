build: 
	docker-compose up -d --build

start: 
	docker-compose up -d

stop: 
	docker-compose down

clean: 
	docker-compose down -v
