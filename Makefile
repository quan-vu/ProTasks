build: 
	docker-compose up -d --build

start: 
	docker-compose up -d

stop: 
	docker-compose down

restart:
	docker-compose restart

clean: 
	docker-compose down -v

