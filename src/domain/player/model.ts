//~ Import modules
import { CoreModel } from "../core/coreModel.js";
import { Match as MatchType } from "../match/Types.js";
import { Match } from "../match/model.js";
import { Shoot } from "../shoot/model.js";
import { Player } from "./Types.js";
import { PlayerData } from "./repository.js";

class PlayerModel extends CoreModel {
  //& Properties
  data = PlayerData;

  getOnePlayer = async (playerId: number) => {
    const player: Player = await PlayerData.selectOne(playerId);
    if (!player) return null;
    return this.getInfos(player);
  };

  getAllPlayers = async () => {
    const playersList: Player[] = await PlayerData.selectAll();
    if (!playersList) return null;
    const players: Player[] = [];
    for (const item of playersList) {
      const player: Player = await this.getInfos(item);
      players.push(player);
    }
    return players;
  };

  //& Services Methods
  getInfos = async (player: Player) => {
    const shooterList = await Shoot.getByShooter(player.id!);
    const goalkeeperList = await Shoot.getByGoalkeeper(player.id!);
    const matchList: MatchType[] = [];
    if (shooterList instanceof Array && goalkeeperList instanceof Array) {
      const matchIdList:number[] = [];
      const allShootList = shooterList.concat(goalkeeperList);
      for (const shoot of allShootList) {
        if (!matchIdList.includes(shoot.match_id)) matchIdList.push(shoot.match_id);
      }
      for (const id of matchIdList) {
        const match = await Match.findOneItem(id);
        matchList.push(match);
      }
    }
    return { ...player, matchList, shooterList, goalkeeperList };
  };
}

const Player = new PlayerModel();
export { Player };
