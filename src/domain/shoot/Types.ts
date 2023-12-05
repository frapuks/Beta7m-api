export type Shoot = {
  id?: number;
  is_Goal: boolean;
  shooter_id: number;
  goalkeeper_id: number;
  match_id: number;
  goalkeeper?: object;
  shooter?: object;
};

export interface ShootSchema {
  is_Goal: boolean;
  shooter_id: number;
  goalkeeper_id: number;
  match_id: number;
}
