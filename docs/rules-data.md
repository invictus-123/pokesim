# Rules data governance

PokeSim treats Pokémon Showdown as its reference data source and pins every release to an immutable Git commit. The current source is recorded in [`data/pokemon-showdown.lock.json`](../data/pokemon-showdown.lock.json).

## Normalization boundary

The battle engine must consume PokeSim-owned normalized JSON artifacts, never an unversioned Pokémon Showdown checkout at runtime. The manifest identifies the six generated artifacts: species, moves, abilities, items, learnsets, and the BW OU format definition.

The normalization implementation belongs to the engine-data work that follows this foundation. It must preserve stable identifiers, retain source provenance, reject entries outside Generation 5 where applicable, and produce deterministic output ordering.

## Updating the source

1. Select and record an explicit upstream commit.
2. Regenerate all normalized artifacts from a clean checkout.
3. Update the lock, manifest version, provenance, and compatibility fixtures in one pull request.
4. Run mechanics differential tests before merging.

Do not silently follow an upstream branch. Existing replays always retain the data version used at creation.

## Verification

Run the structural lock check with:

```sh
node data/tools/verify-data-contract.mjs
```
