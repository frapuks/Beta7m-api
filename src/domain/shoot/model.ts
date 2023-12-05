//~ Import modules
import { CoreModel } from "../core/coreModel.js";
import { PlayerData } from "../player/repository.js";
import { Shoot } from "./Types.js";
import { ShootData } from "./repository.js";

class ShootModel extends CoreModel {
  //& Properties
  data = ShootData;

  getOneShoot = async (shootId: number) => {
    const shoot: Shoot = await ShootData.selectOne(shootId);
    if (!shoot) return null;
    return this.getPlayersInfos(shoot);
  };

  getByMatch = async (matchId: number) => {
    const shoots = await ShootData.selectAllByMatch(matchId);
    if (!shoots) return null;
    return this.getPlayersInfos(shoots);
  };

  getByShooter = async (playerId: number) => {
    const shoots = await ShootData.selectAllByShooter(playerId);
    if (!shoots) return [];
    return this.getPlayersInfos(shoots);
  };

  getByGoalkeeper = async (playerId: number) => {
    const shoots = await ShootData.selectAllByGoalkeeper(playerId);
    if (!shoots) return null;
    return this.getPlayersInfos(shoots);
  };

  //& Services Methods
  getPlayersInfos = async (shoot: Shoot | Shoot[]) => {
    if (shoot instanceof Array) {
      const shoots = [];
      for (const item of shoot) {
        const goalkeeper = await PlayerData.selectOne(item.goalkeeper_id);
        const shooter = await PlayerData.selectOne(item.shooter_id);
        shoots.push({ ...item, goalkeeper, shooter });
      }
      return shoots;
    } else {
      const goalkeeper = await PlayerData.selectOne(shoot.goalkeeper_id);
      const shooter = await PlayerData.selectOne(shoot.shooter_id);
      return { ...shoot, goalkeeper, shooter };
    }
  };
}

const Shoot = new ShootModel();
export { Shoot };
