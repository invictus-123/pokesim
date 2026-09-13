# Local development

## Prerequisites

Install the following tools before working on PokeSim:

- Docker Desktop with Docker Compose v2
- Java 25 LTS
- CMake 3.28 or later and a C++20-capable compiler
- Node.js 22 LTS with npm

The suggested versions are recorded in [`.tool-versions`](../.tool-versions). Use equivalent newer patch releases where necessary.

## Configure local services

1. Copy `.env.example` to `.env`.
2. Replace `POSTGRES_PASSWORD` if this machine exposes PostgreSQL beyond local development.
3. Start the infrastructure:

   ```sh
   docker compose up -d postgres redis
   ```

4. Confirm both services are healthy:

   ```sh
   docker compose ps
   ```

5. Stop local infrastructure when finished:

   ```sh
   docker compose down
   ```

Use `docker compose down -v` only when intentionally discarding local database and cache data.

## Module commands

The module skeleton is introduced in the following foundation task. Once present, its standard commands will be:

```sh
cmake -S engine-cpp -B engine-cpp/build
cmake --build engine-cpp/build
./backend/mvnw test
cd frontend && npm ci && npm run check
```

## Runtime responsibilities

PostgreSQL stores future durable team and replay records. Redis is reserved for transient battle sessions and future matchmaking. The initial local guest experience remains browser-persisted and does not require either service to run.
