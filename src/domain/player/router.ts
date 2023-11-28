//~ Import module
import { Router } from "express";
import { player } from "./controller.js";
import { validate } from "../../middlewares/validateSchema.js";
import { playerSchema, playerUpdateSchema } from "./schema.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { admin, auth } from "../../middlewares/auth.js";
const router = Router();

//~ Routes
router.get("/api/v1/players", player.fetchAll);
router.get("/api/v1/players/:playerId(\\d+)", player.fetchOne);
router.post("/api/v1/players", validate(playerSchema), player.create);
router.patch("/api/v1/players/:playerId(\\d+)", [validateToken, auth, admin], validate(playerUpdateSchema), player.update);
router.delete("/api/v1/players/:playerId(\\d+)", [validateToken, auth, admin], player.delete);

//~ Export router
export { router };
