//~ Import modules
import { Request, Response } from "express";
import debug from "debug";
const logger = debug("Controller");
import { CoreController } from "../core/coreController.js";
import { Shoot } from "./model.js";

class ShootController extends CoreController {
  model = Shoot;
  paramsId = "shootId";
  paramsMatchId = "matchId";
  paramsPlayerId = "playerId";

  fetchOneShoot = async (req: Request, res: Response) => {
    try {
      const shootId = +req.params[this.paramsId];
      const shoot = await Shoot.getOneShoot(shootId);
      //~ Result
      return res.status(200).json(shoot);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };

  fetchByMatch = async (req: Request, res: Response) => {
    try {
      const matchId = +req.params[this.paramsMatchId];
      const shootList = await Shoot.getByMatch(matchId);
      //~ Result
      return res.status(200).json(shootList);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };

  fetchByShooter = async (req: Request, res: Response) => {
    try {
      const playerId = +req.params[this.paramsPlayerId];
      const shootList = await Shoot.getByShooter(playerId);
      //~ Result
      return res.status(200).json(shootList);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };

  fetchByGoalkeeper = async (req: Request, res: Response) => {
    try {
      const playerId = +req.params[this.paramsPlayerId];
      const shootList = await Shoot.getByGoalkeeper(playerId);
      //~ Result
      return res.status(200).json(shootList);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };
}

const shoot = new ShootController();
export { shoot };
