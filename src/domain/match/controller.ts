//~ Import modules
import { Request, Response } from 'express';
import debug from 'debug';
const logger = debug('Controller');
import { CoreController } from '../core/coreController.js';
import { Match } from './model.js';

class MatchController extends CoreController {
  model = Match;
  paramsId = 'matchId';
}

const match = new MatchController();
export { match };
