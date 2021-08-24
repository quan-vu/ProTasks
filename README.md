# ProTasks

ProTasks is a simple task management based on Golang, Gin &amp; Angular 12+ 

**Techstack**

- Golang 1.6+
- Gin framework
- Docker, docker-compose
- Postgres 13+

**Features**

- API design base on Restful.
- Use Gorm for working with postgres database.
- Project structure.

**Project Structure**

```
- root
	|_ app
	|_ controllers		# for http controller
	|_ resource			# api resource format
	|_ repositories		# Repository pattern working with databbase only
	|_ services			# Service pattren for apply business logic
	|_ models			# Map struct type with database table
	|_ config			# Global configuration for app
	|_ db				# Initial database providers (MySQL, Postgres, Cassandra)
```

**API Design**

| API  | Name          | Method | Url            |
|------|---------------|--------|----------------|
| Auth | User Signup   | POST   | v1/auth/signup |
|      | User login    | POST   | v1/auth/login  |
| Todo | List Tasks    | GET    | v1/tasks       |
|      | Create a Task | POST   | v1/tasks       |

## TODO

- [x] Structure golang project.
- [x] Support Docker.
- [x] Use gorm for working with database.
- [x] Apply Service, Repository pattern.
- [x] API docs with Postman
- [ ] Unit test.
- [ ] Feature test.

## Quickstart

To start project run this command:

```shell
cp .env/example .env
docker-compose up -d
```
