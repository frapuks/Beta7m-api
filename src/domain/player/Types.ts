export type Player = {
  id?: number;
  first_name: string;
  last_name: string;
  is_goalkeeper: boolean;
};

export interface PlayerSchema {
  first_name: string;
  last_name: string;
  is_goalkeeper: boolean;
}