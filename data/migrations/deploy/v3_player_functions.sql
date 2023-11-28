BEGIN;

--& Function Create player
CREATE OR REPLACE FUNCTION create_player(json) RETURNS TABLE (inserted_player TEXT) AS $$
  BEGIN
  INSERT INTO "player" ("first_name", "last_name", "is_goalkeeper")
  VALUES (
    ($1 ->> 'first_name')::TEXT,
    ($1 ->> 'last_name')::TEXT,
    ($1 ->> 'is_goalkeeper')::BOOLEAN
  );
  RETURN QUERY (
    SELECT "player".first_name
    FROM "player"
    ORDER BY "player".id DESC LIMIT 1
  );
  END
$$ LANGUAGE plpgsql VOLATILE;

--& Function Update player
CREATE OR REPLACE FUNCTION update_player(json) RETURNS TABLE (updated_player TEXT) AS $$
  BEGIN
  UPDATE "player" AS P
  SET
    "first_name" = COALESCE(($1 ->> 'first_name')::TEXT, "first_name"),
    "last_name" = COALESCE(($1 ->> 'last_name')::TEXT, "last_name"),
    "is_goalkeeper" = COALESCE(($1 ->> 'is_goalkeeper')::BOOLEAN, "is_goalkeeper")
  WHERE P."id" = ($1->> 'id')::INT;
  RETURN QUERY (
    SELECT P.first_name 
    FROM "player" AS P
    WHERE P.id = ($1->> 'id')::INT
  );
  END
$$ LANGUAGE plpgsql VOLATILE;

COMMIT;
