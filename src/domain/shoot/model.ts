//~ Import modules
import { CoreModel } from "../core/coreModel.js";
import { ShootData } from "./repository.js";

class ShootModel extends CoreModel {
  //& Properties
  data = ShootData;
}

const Shoot = new ShootModel();
export { Shoot };
