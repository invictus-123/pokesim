# PokeSim

PokeSim is a web-based, server-authoritative Generation 5 Pokémon battle simulator. The project combines a deterministic C++20 battle engine, a Java service layer, and a React/TypeScript client.

## Foundation status

This repository currently contains the project foundation. The first playable battle mechanics, API endpoints, and user interface are intentionally deferred until their respective implementation branches.

## Planned architecture

- `engine-cpp/` — deterministic native battle engine and C ABI.
- `backend/` — Java 25 Spring Boot authoritative session service.
- `frontend/` — React and TypeScript browser client.
- `data/` — pinned, normalized Generation 5 rules data.
- `docs/` — architecture, setup, and data-governance documentation.

## License

The source code is released under the MIT License. Pokémon names, characters, and related assets are trademarks of their respective owners and are not granted by this license.

## Getting started

Local development prerequisites and startup instructions will be added in the next foundation task. See [CONTRIBUTING.md](CONTRIBUTING.md) for working conventions.
