#pragma once

#include <stdint.h>

#define PKMN_CONTRACT_VERSION 1U
#define PKMN_TEAM_SIZE 6U
#define PKMN_MOVE_SLOTS 4U

typedef enum pkmn_action_kind {
    PKMN_ACTION_MOVE = 0,
    PKMN_ACTION_SWITCH = 1,
    PKMN_ACTION_PASS = 2
} pkmn_action_kind;

typedef struct pkmn_stat_values {
    uint16_t hp;
    uint16_t attack;
    uint16_t defense;
    uint16_t special_attack;
    uint16_t special_defense;
    uint16_t speed;
} pkmn_stat_values;

typedef struct pkmn_team_member {
    uint32_t species_id;
    uint32_t ability_id;
    uint32_t item_id;
    uint32_t move_ids[PKMN_MOVE_SLOTS];
    pkmn_stat_values stats;
    uint8_t level;
} pkmn_team_member;

typedef struct pkmn_team {
    pkmn_team_member members[PKMN_TEAM_SIZE];
    uint8_t member_count;
} pkmn_team;

typedef struct pkmn_action {
    pkmn_action_kind kind;
    uint8_t selection_index;
    uint8_t target_index;
} pkmn_action;

typedef struct pkmn_battle_ref {
    uint64_t id;
    uint32_t revision;
    uint16_t turn;
} pkmn_battle_ref;
