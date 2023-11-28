//~ Import module
import { Router } from "express";
import { match } from "./controller.js";
import { validate } from "../../middlewares/validateSchema.js";
import { matchSchema, matchUpdateSchema } from "./schema.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { admin, auth } from "../../middlewares/auth.js";
const router = Router();

//~ Routes
router.get("/api/v1/matchs", match.fetchAll);
router.get("/api/v1/matchs/:matchId(\\d+)", match.fetchOne);
router.post("/api/v1/matchs", validate(matchSchema), match.create);
router.patch("/api/v1/matchs/:matchId(\\d+)", [validateToken, auth, admin], validate(matchUpdateSchema), match.update);
router.delete("/api/v1/matchs/:matchId(\\d+)", [validateToken, auth, admin], match.delete);

//~ Export router
export { router };
