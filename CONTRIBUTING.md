# Contributing to PokeSim

## Working conventions

- Keep changes focused on one task and use a descriptive Conventional Commit-style message.
- Build and test the affected module before committing.
- Do not change the pinned rules-data version without updating its provenance and compatibility fixtures.
- Keep battle mechanics deterministic: all randomness must flow through the engine RNG and be replayable from a seed.
- Do not place authoritative battle calculations in the frontend.

## Branch and review flow

Foundation, engine, server, AI, client, and release work are developed on dedicated branches and merged into `main` through pull requests. Each pull request should state its validation results and deferred work.

## Security and credentials

Never commit credentials, private keys, local environment files, generated battle data, or build output. Copy the provided environment template for local configuration.
