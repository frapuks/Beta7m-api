//~ Import modules
import pg from "pg";
import client from "../../config/databases/connect_pg.js";
import { PGCoreDataMapper } from "../core/coreDatamapper.js";

class PGShootDataMapper extends PGCoreDataMapper {
  tableName = "shoot";
  columns = ` "id", "is_Goal", "shooter_id", "goalkeeper_id", "match_id"`;

  createFunctionName = "create_shoot";
  updateFunctionName = "update_shoot";

  selectAllByMatch = async (matchId: number) => {
    if (this.client instanceof pg.Pool) {
      const preparedQuery = {
        text: `SELECT * FROM "${this.tableName}" WHERE "match_id" = $1;`,
        values: [matchId],
      };
      const result = await this.client.query(preparedQuery);
      return result.rows;
    }
  };

  selectAllByShooter = async (playerId: number) => {
    if (this.client instanceof pg.Pool) {
      const preparedQuery = {
        text: `SELECT * FROM "${this.tableName}" WHERE "shooter_id" = $1;`,
        values: [playerId],
      };
      const result = await this.client.query(preparedQuery);
      return result.rows;
    }
  };

  selectAllByGoalkeeper = async (playerId: number) => {
    if (this.client instanceof pg.Pool) {
      const preparedQuery = {
        text: `SELECT * FROM "${this.tableName}" WHERE "goalkeeper_id" = $1;`,
        values: [playerId],
      };
      const result = await this.client.query(preparedQuery);
      return result.rows;
    }
  };
}

const PGShootData = new PGShootDataMapper(client);
export { PGShootData };
