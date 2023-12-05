// nom avec majuscule : Match
//~ Import modules
import { CoreModel } from "../core/coreModel.js";
import { Player } from "../player/model.js";
import { Player as PlayerType } from "../player/Types.js";
import { Shoot } from "../shoot/model.js";
import { Shoot as ShootType } from "../shoot/Types.js";
import { MatchData } from "./repository.js";
import { Match as MatchType } from "./Types.js";

class MatchModel extends CoreModel {
  //& Properties
  data = MatchData;

  getOneMatch = async (matchId: number) => {
    const match: MatchType = await MatchData.selectOne(matchId);
    if (!match) return null;
    return this.getMatchInfos(match);
  };

  getMatchInfos = async (match: MatchType) => {
    const shootList = await Shoot.getByMatch(match.id!);
    const shooters: PlayerType[] = [];
    const goalkeepers: PlayerType[] = [];
    if (shootList instanceof Array) {
      const shootersId: number[] = [];
      const goalkeepersId: number[] = [];
      for (const shoot of shootList) {
        if (!shootersId.includes(shoot.shooter_id)) {
          shootersId.push(shoot.shooter_id);
          shooters.push(shoot.shooter);
        }
        if (!goalkeepersId.includes(shoot.goalkeeper_id)) {
          goalkeepersId.push(shoot.goalkeeper_id);
          goalkeepers.push(shoot.goalkeeper);
        }
      }
    }
    return { ...match, goalkeepers, shooters };
  };

  createOneItemWithShoots = async (bodyData: {
    match: MatchType;
    shootList: ShootType[];
  }) => {
    const result = await this.data.insert(bodyData.match);
    if (!result) return null;
    const matchId = result.inserted_match;
    for (const shoot of bodyData.shootList) {
      shoot.match_id = matchId;
      await Shoot.createOneItem(shoot);
    }

    return result;
  };
}

const Match = new MatchModel();
export { Match };
