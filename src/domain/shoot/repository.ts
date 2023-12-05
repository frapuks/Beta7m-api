//~ Import module
import { CoreRepository } from "../core/coreRepository.js";
import { Shoot } from "./Types.js";
import { PGShootData } from "./datamapper.js";

class ShootRepository extends CoreRepository {
  dataRepository = PGShootData;

  selectAllByMatch = async (matchId: number) =>
    this.dataRepository.selectAllByMatch(matchId);
  selectAllByShooter = async (playerId: number) =>
    this.dataRepository.selectAllByShooter(playerId);
  selectAllByGoalkeeper = async (playerId: number) =>
    this.dataRepository.selectAllByGoalkeeper(playerId);
}

const ShootData = new ShootRepository();
export { ShootData };
