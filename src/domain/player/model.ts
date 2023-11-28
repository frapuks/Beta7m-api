//~ Import modules
import { CoreModel } from "../core/coreModel.js";
import { PlayerData } from "./repository.js";

class PlayerModel extends CoreModel {
  //& Properties
  data = PlayerData;
}

const Player = new PlayerModel();
export { Player };
