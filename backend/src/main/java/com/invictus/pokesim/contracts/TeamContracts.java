package com.invictus.pokesim.contracts;

import java.util.List;

public final class TeamContracts {
    private TeamContracts() {
    }

    public record Stats(int hp, int atk, int def, int spa, int spd, int spe) {
    }

    public record EffortValues(int hp, int atk, int def, int spa, int spd, int spe) {
    }

    public record IndividualValues(int hp, int atk, int def, int spa, int spd, int spe) {
    }

    public record TeamMember(
            String speciesId,
            String nickname,
            int level,
            String abilityId,
            String itemId,
            String natureId,
            EffortValues evs,
            IndividualValues ivs,
            List<String> moveIds
    ) {
    }

    public record Team(String id, String name, int generation, List<TeamMember> members) {
    }
}
