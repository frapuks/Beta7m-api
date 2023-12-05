//~ Import module
import { Router } from "express";
import { player } from "./controller.js";
import { validate } from "../../middlewares/validateSchema.js";
import { playerSchema, playerUpdateSchema } from "./schema.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { admin, auth } from "../../middlewares/auth.js";
const router = Router();

//~ Routes CRUD
router.get("/api/v1/players", player.fetchAll);
router.get("/api/v1/players/:playerId(\\d+)", player.fetchOne);
router.post("/api/v1/players", validate(playerSchema), player.create);
router.patch("/api/v1/players/:playerId(\\d+)", [validateToken, auth, admin], validate(playerUpdateSchema), player.update);
router.delete("/api/v1/players/:playerId(\\d+)", [validateToken, auth, admin], player.delete);

//~ Routes custom
// Un joueur avec tout ses tirs et ses matchs
router.get("/api/v1/players/:playerId(\\d+)/infos", player.fetchOnePlayer);
// Tous les joueurs avec leurs infos
router.get("/api/v1/players/infos", player.fetchAllPlayers);

//~ Export router
export { router };
