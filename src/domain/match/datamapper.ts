//~ Import modules
import pg from "pg";
import client from "../../config/databases/connect_pg.js";
import { PGCoreDataMapper } from "../core/coreDatamapper.js";
import { Match } from "./Types.js";

class PGMatchDataMapper extends PGCoreDataMapper {
  tableName = "match";
  columns = ` "id", "players_victory"`;

  createFunctionName = "create_match";
  updateFunctionName = "update_match";
}

const PGMatchData = new PGMatchDataMapper(client);
export { PGMatchData };
