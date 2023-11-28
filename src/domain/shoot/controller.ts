//~ Import modules
import { Request, Response } from 'express';
import debug from 'debug';
const logger = debug('Controller');
import { CoreController } from '../core/coreController.js';
import { Shoot } from './model.js';

class ShootController extends CoreController {
  model = Shoot;
  paramsId = 'shootId';
}

const shoot = new ShootController();
export { shoot };
