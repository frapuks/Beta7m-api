BEGIN;

--~ Create domains

--& Check email
CREATE DOMAIN EMAIL AS TEXT CHECK (
    VALUE ~ '^(?#email)[-a-zA-Z0-9.-_]+@[\w-]+(?:\.[\w-]{2,4})$'
);

--& Check password
-- Minimum 8 characters - at least 1 number, one min, one maj, un one special character min
CREATE DOMAIN PWD AS TEXT CHECK (
    VALUE ~ '^(?#password)(?=.*[0-9])(?=.*[-a-z])(?=.*[-A-Z])(?=.*[^a-zA-Z0-9]).{8,}$'
);

--~ Create tables
CREATE TABLE IF NOT EXISTS "match" (
  "id"              INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "players_victory" BOOLEAN NOT NULL,
  "created_at"      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "player" (
  "id"            INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "first_name"    TEXT NOT NULL,
  "last_name"     TEXT NOT NULL,
  "is_goalkeeper" BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS "role" (
  "id"    INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "label" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "shoot" (
  "id"            INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "is_Goal"       BOOLEAN NOT NULL,
  "shooter_id"    INT NOT NULL,
  "goalkeeper_id" INT NOT NULL,
  "match_id"      INT NOT NULL,
  "created_at"    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "user" (
    "id"          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "role_id"     INTEGER NOT NULL DEFAULT 2,
    "username"    VARCHAR(50) NOT NULL UNIQUE,
    "first_name"  VARCHAR(50),
    "last_name"   VARCHAR(50),
    "avatar"      TEXT,
    "email"       EMAIL NOT NULL UNIQUE,
    "password"    PWD NOT NULL
);

ALTER TABLE "shoot" ADD FOREIGN KEY (shooter_id) REFERENCES "player" (id);
ALTER TABLE "shoot" ADD FOREIGN KEY (goalkeeper_id) REFERENCES "player" (id);
ALTER TABLE "shoot" ADD FOREIGN KEY (match_id) REFERENCES "match" (id);
ALTER TABLE "user" ADD FOREIGN KEY (role_id) REFERENCES "role" (id);

--~ Insert Demo's Data

INSERT INTO "player" (first_name, last_name, is_goalkeeper) VALUES
  ('François', 'Grunert', true),
  ('Alexis', 'Thomman', true),
  ('Tanguy', 'Sengler', true),
  ('Florian', 'Hoffer', false),
  ('Honoré', 'Moog', false),
  ('Léo', 'Herrbach', false),
  ('Luca', 'Cerutti', false),
  ('Hugo', 'Ferlet', false),
  ('Jordan', 'Lavigne', false),
  ('Antoine', 'Lebrun', false),
  ('Alexis', 'Mittaine', false),
  ('Antoine', 'Ringelstein', false),
  ('Tom', 'Remetter', false),
  ('Hugo', 'Rietsch', false),
  ('Arnaud', 'Petermann', false),
  ('Léo', 'Dupré', false),
  ('Marvin', 'Findeli', false),
  ('Youn', 'Aug', false),
  ('Lucas', 'Forges', false);

INSERT INTO "role" (label) VALUES
  ('admin'),
  ('user');

-- user admin and password 'admin' ONLY FOR TEST ! Please create new user to use this app
INSERT INTO "user" (username, email, password, role_id) VALUES
  ('admin', 'admin@admin.com', '$2b$10$.Ng8WbQie6g/aSFzUXJJnuCOc1ot8gsta2/GU/OUcbfX95KJI9iUS', 1);

COMMIT;
