//~ Import modules
import { Request, Response } from 'express';
import debug from 'debug';
const logger = debug('Controller');
import { CoreController } from '../core/coreController.js';
import { Player } from './model.js';

class PlayerController extends CoreController {
  model = Player;
  paramsId = 'playerId';
}

const player = new PlayerController();
export { player };
