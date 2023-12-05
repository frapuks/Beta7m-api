//~ Import module
import { Router } from "express";
import { match } from "./controller.js";
import { validate } from "../../middlewares/validateSchema.js";
import { matchSchema, matchUpdateSchema } from "./schema.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { admin, auth } from "../../middlewares/auth.js";
const router = Router();

//~ Routes CRUD
router.get("/api/v1/matchs", match.fetchAll);
router.get("/api/v1/matchs/:matchId(\\d+)", match.fetchOne);
router.post("/api/v1/matchs", validate(matchSchema), match.create);
router.patch("/api/v1/matchs/:matchId(\\d+)", [validateToken, auth, admin], validate(matchUpdateSchema), match.update);
router.delete("/api/v1/matchs/:matchId(\\d+)", [validateToken, auth, admin], match.delete);

//~ Routes custom
// Un match avec liste des joueurs, des gardiens, et des tirs
router.get("/api/v1/matchs/:matchId(\\d+)/infos", match.fetchOneMatch);
// Créer un match avec liste des tirs
router.post("/api/v1/matchs/list", match.createOneMatchWithShoots);

//~ Export router
export { router };
