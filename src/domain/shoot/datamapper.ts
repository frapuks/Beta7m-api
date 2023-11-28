//~ Import modules
import client from "../../config/databases/connect_pg.js";
import { PGCoreDataMapper } from "../core/coreDatamapper.js";

class PGShootDataMapper extends PGCoreDataMapper {
  tableName = "shoot";
  columns = ` "id", "is_Goal", "shooter_id", "goalkeeper_id", "match_id"`;

  createFunctionName = "create_shoot";
  updateFunctionName = "update_shoot";
}

const PGShootData = new PGShootDataMapper(client);
export { PGShootData };
