package com.invictus.pokesim.contracts;

import java.util.List;
import java.util.Map;

public final class BattleContracts {
    private BattleContracts() {
    }

    public enum ActionKind { MOVE, SWITCH, PASS }
    public enum Phase { ACTION_SELECTION, RESOLUTION, FORCED_SWITCH, COMPLETE }
    public enum EventKind { MOVE_USED, SWITCHED, DAMAGE, HEAL, STATUS, STAT_CHANGE, FIELD_CHANGE, FAINT, TURN_END, BATTLE_END }

    public record BattleId(String value) {
    }

    public record Action(ActionKind kind, int selectionIndex, Integer targetIndex) {
    }

    public record CreatureState(
            String speciesId,
            String displayName,
            int currentHp,
            int maxHp,
            String status,
            boolean fainted
    ) {
    }

    public record SideState(CreatureState active, List<CreatureState> bench) {
    }

    public record BattleState(
            int contractVersion,
            BattleId battleId,
            int revision,
            int turn,
            Phase phase,
            SideState player,
            SideState opponent,
            List<Action> legalActions
    ) {
    }

    public record BattleEvent(EventKind kind, int turn, Map<String, Object> payload) {
    }

    public record Replay(
            int contractVersion,
            String engineVersion,
            String dataVersion,
            long seed,
            TeamContracts.Team playerTeam,
            TeamContracts.Team opponentTeam,
            List<Action> actions,
            List<BattleEvent> events
    ) {
    }
}
