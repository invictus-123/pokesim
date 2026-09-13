export const CONTRACT_VERSION = 1 as const;

export type StatBlock = Record<"hp" | "atk" | "def" | "spa" | "spd" | "spe", number>;

export interface TeamMember {
  speciesId: string;
  nickname: string | null;
  level: number;
  abilityId: string;
  itemId: string | null;
  natureId: string;
  evs: StatBlock;
  ivs: StatBlock;
  moveIds: string[];
}

export interface Team {
  id: string;
  name: string;
  generation: number;
  members: TeamMember[];
}

export type ActionKind = "MOVE" | "SWITCH" | "PASS";
export type BattlePhase = "ACTION_SELECTION" | "RESOLUTION" | "FORCED_SWITCH" | "COMPLETE";
export type BattleEventKind =
  | "MOVE_USED" | "SWITCHED" | "DAMAGE" | "HEAL" | "STATUS"
  | "STAT_CHANGE" | "FIELD_CHANGE" | "FAINT" | "TURN_END" | "BATTLE_END";

export interface BattleAction {
  kind: ActionKind;
  selectionIndex: number;
  targetIndex: number | null;
}

export interface CreatureState {
  speciesId: string;
  displayName: string;
  currentHp: number;
  maxHp: number;
  status: string | null;
  fainted: boolean;
}

export interface SideState {
  active: CreatureState;
  bench: CreatureState[];
}

export interface BattleState {
  contractVersion: typeof CONTRACT_VERSION;
  battleId: { value: string };
  revision: number;
  turn: number;
  phase: BattlePhase;
  player: SideState;
  opponent: SideState;
  legalActions: BattleAction[];
}

export interface BattleEvent {
  kind: BattleEventKind;
  turn: number;
  payload: Record<string, unknown>;
}

export interface Replay {
  contractVersion: typeof CONTRACT_VERSION;
  engineVersion: string;
  dataVersion: string;
  seed: number;
  playerTeam: Team;
  opponentTeam: Team;
  actions: BattleAction[];
  events: BattleEvent[];
}
