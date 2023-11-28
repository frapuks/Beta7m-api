BEGIN;

--& Function Create shoot
CREATE OR REPLACE FUNCTION create_shoot(json) RETURNS TABLE (inserted_shoot INT) AS $$
  BEGIN
  INSERT INTO "shoot" ("is_Goal", "shooter_id", "goalkeeper_id", "match_id")
  VALUES (
    ($1 ->> 'is_Goal')::BOOLEAN,
    ($1 ->> 'shooter_id')::INT,
    ($1 ->> 'goalkeeper_id')::INT,
    ($1 ->> 'match_id')::INT
  );
  RETURN QUERY (
    SELECT "shoot".id
    FROM "shoot"
    ORDER BY "shoot".id DESC LIMIT 1
  );
  END
$$ LANGUAGE plpgsql VOLATILE;

--& Function Update shoot
CREATE OR REPLACE FUNCTION update_shoot(json) RETURNS TABLE (updated_shoot INT) AS $$
  BEGIN
  UPDATE "shoot" AS P
  SET
    "is_Goal" = COALESCE(($1 ->> 'is_Goal')::BOOLEAN, "is_Goal"),
    "shooter_id" = COALESCE(($1 ->> 'shooter_id')::INT, "shooter_id"),
    "goalkeeper_id" = COALESCE(($1 ->> 'goalkeeper_id')::INT, "goalkeeper_id"),
    "match_id" = COALESCE(($1 ->> 'match_id')::INT, "match_id")
  WHERE P."id" = ($1->> 'id')::INT;
  RETURN QUERY (
    SELECT P.id 
    FROM "shoot" AS P
    WHERE P.id = ($1->> 'id')::INT
  );
  END
$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
