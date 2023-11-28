//~ Import modules
import { Router } from 'express';
const router = Router();

//~ Main
import { router as mainRouter } from '../main/router.js';
router.use(mainRouter);

//~ User
import { router as userRouter } from '../user/router.js';
router.use(userRouter);

//~ Player
import { router as playerRouter } from '../player/router.js';
router.use(playerRouter);

//~ Match
import { router as matchRouter } from '../match/router.js';
router.use(matchRouter);

//~ Shoot
import { router as shootRouter } from '../shoot/router.js';
router.use(shootRouter);

//~ Export all routes
export { router };
