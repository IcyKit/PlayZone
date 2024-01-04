backend-up:
	docker run -d -p 3001:3001 --rm --name playzone-backend backend
backend-down:
	docker stop backend 
postgres-up:
	docker run -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=icykit -e POSTGRES_DB=playzone -d -p 54321:5432 postgres --name playzone-postgres
postgres-down:
	docker stop postgres

