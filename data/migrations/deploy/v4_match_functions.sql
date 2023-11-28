BEGIN;

--& Function Create match
CREATE OR REPLACE FUNCTION create_match(json) RETURNS TABLE (inserted_match INT) AS $$
  BEGIN
  INSERT INTO "match" ("players_victory")
  VALUES (
    ($1 ->> 'players_victory')::BOOLEAN
  );
  RETURN QUERY (
    SELECT "match".id
    FROM "match"
    ORDER BY "match".id DESC LIMIT 1
  );
  END
$$ LANGUAGE plpgsql VOLATILE;

--& Function Update match
CREATE OR REPLACE FUNCTION update_match(json) RETURNS TABLE (updated_match INT) AS $$
  BEGIN
  UPDATE "match" AS P
  SET
    "players_victory" = COALESCE(($1 ->> 'players_victory')::BOOLEAN, "players_victory")
  WHERE P."id" = ($1->> 'id')::INT;
  RETURN QUERY (
    SELECT P.id
    FROM "match" AS P
    WHERE P.id = ($1->> 'id')::INT
  );
  END
$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
