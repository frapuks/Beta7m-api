//~ Import modules
import pg from "pg";
import client from "../../config/databases/connect_pg.js";
import { PGCoreDataMapper } from "../core/coreDatamapper.js";

class PGPlayerDataMapper extends PGCoreDataMapper {
  tableName = "player";
  columns = ` "id", "first_name", "last_name", "is_goalkeeper"`;

  createFunctionName = "create_player";
  updateFunctionName = "update_player";
}

const PGPlayerData = new PGPlayerDataMapper(client);
export { PGPlayerData };
