//~ Import modules
import { Request, Response } from "express";
import debug from "debug";
const logger = debug("Controller");
import { CoreController } from "../core/coreController.js";
import { Match } from "./model.js";

class MatchController extends CoreController {
  model = Match;
  paramsId = "matchId";

  fetchOneMatch = async (req: Request, res: Response) => {
    try {
      const id = +req.params[this.paramsId];
      const match = await Match.getOneMatch(id);
      //~ Result
      return res.status(200).json(match);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };

  createOneMatchWithShoots = async (req: Request, res: Response) => {
    try {
      const bodyData = req.body;
      await Match.createOneItemWithShoots(bodyData);

      return res.status(201).json(this.createSuccessful);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };
}

const match = new MatchController();
export { match };
