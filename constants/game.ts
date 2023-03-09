export const BoardSize = {
  SIDE_LENGTH: 5,
  DIAGONAL_LENGTH: 9,
} as const;

export const enum CellState {
  EMPTY,
  PLAYER_1,
  PLAYER_2,
  PLAYER_3,
  OUTSIDE,
};
