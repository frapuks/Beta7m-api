// nom sans majuscule : shoot
//~ Import module
import { Router } from "express";
import { shoot } from "./controller.js";
import { validate } from "../../middlewares/validateSchema.js";
import { shootSchema, shootUpdateSchema } from "./schema.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { admin, auth } from "../../middlewares/auth.js";
const router = Router();

//~ Routes CRUD
router.get("/api/v1/shoots", shoot.fetchAll);
router.get("/api/v1/shoots/:shootId(\\d+)", shoot.fetchOne);
router.post("/api/v1/shoots", validate(shootSchema), shoot.create);
router.patch("/api/v1/shoots/:shootId(\\d+)", [validateToken, auth, admin], validate(shootUpdateSchema), shoot.update);
router.delete("/api/v1/shoots/:shootId(\\d+)", [validateToken, auth, admin], shoot.delete);

//~ Routes custom
// Un tir avec les infos des joueurs
router.get("/api/v1/shoots/:shootId(\\d+)/infos", shoot.fetchOneShoot);
// Les tirs par rapport à un match_id
router.get("/api/v1/shoots/match/:matchId(\\d+)", shoot.fetchByMatch);
// Les tirs par rapport à un shooter
router.get("/api/v1/shoots/shooter/:playerId(\\d+)", shoot.fetchByShooter);
// Les tirs par rapport à un goalkeeper
router.get("/api/v1/shoots/goalkeeper/:playerId(\\d+)", shoot.fetchByGoalkeeper);

//~ Export router
export { router };
