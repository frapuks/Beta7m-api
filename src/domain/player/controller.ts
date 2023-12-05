//~ Import modules
import { Request, Response } from 'express';
import debug from 'debug';
const logger = debug('Controller');
import { CoreController } from '../core/coreController.js';
import { Player } from './model.js';

class PlayerController extends CoreController {
  model = Player;
  paramsId = 'playerId';
  
  fetchOnePlayer = async (req: Request, res: Response) => {
    try {
      const playerId = +req.params[this.paramsId];
      const player = await Player.getOnePlayer(playerId);
      //~ Result
      return res.status(200).json(player);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };
  
  fetchAllPlayers = async (req: Request, res: Response) => {
    try {
      const players = await Player.getAllPlayers();
      //~ Result
      return res.status(200).json(players);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };
}

const player = new PlayerController();
export { player };
