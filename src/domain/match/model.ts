// nom avec majuscule : Match
//~ Import modules
import { CoreModel } from "../core/coreModel.js";
import { MatchData } from "./repository.js";

class MatchModel extends CoreModel {
  //& Properties
  data = MatchData;
}

const Match = new MatchModel();
export { Match };
