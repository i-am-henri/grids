docker run -p 5432:5432 --name selfmail -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -e POSTGRES_DATBASE=grids -d postgres