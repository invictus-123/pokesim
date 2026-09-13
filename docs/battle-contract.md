# Battle contract v1

Contract version 1 is the shared vocabulary for the engine boundary, Spring service, and browser. Public JSON messages use the Java/TypeScript field names. The native C ABI uses the fixed-width equivalents in [`engine-cpp/include/pokesim/contracts.h`](../engine-cpp/include/pokesim/contracts.h).

## Teams

A team contains one to six ordered members. A member refers to data-bundle identifiers for species, ability, item, nature, and moves. EVs and IVs use the keys `hp`, `atk`, `def`, `spa`, `spd`, and `spe`. The server validates all input before converting identifiers to compact native IDs.

## Battle protocol

Every state includes `contractVersion`, `battleId`, `revision`, `turn`, and `phase`. Clients submit one `BattleAction` only when it appears in `legalActions`; the server rejects stale revisions and all actions not legal in the current authoritative state.

The phases are `ACTION_SELECTION`, `RESOLUTION`, `FORCED_SWITCH`, and `COMPLETE`. Actions are `MOVE`, `SWITCH`, or `PASS` and use zero-based selection and target indexes.

## Events and replays

Events have a stable kind and an extensible payload, allowing UI animation to evolve without changing state authority. A replay records its contract version, engine version, rules-data version, seed, initial teams, actions, and emitted events. Re-simulating a replay with the recorded versions must produce the same events.

## Compatibility policy

Additive event payload fields are compatible. Changing semantics, removing fields, or changing enum values requires a new contract version and an adapter for retained replays.
