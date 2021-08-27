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

start-prod: clean
	docker-compose -f docker-compose.prod.yml up -d

stop-prod:
	docker-compose -f docker-compose.prod.yml up -d
