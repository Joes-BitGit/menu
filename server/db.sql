-- brew services start postgres
-- NOTE: psql command now works

-- psql postgres
-- NOTE: \l list DBs, \c connect to DB, \dt display tables, \? help

CREATE DATABASE lacostamenu;

CREATE TABLE menu (
  item_id BIGSERIAL NOT NULL PRIMARY KEY,
  item VARCHAR(50) NOT NULL,
  price MONEY NOT NULL,
  category VARCHAR(50) NOT NULL,
  size VARCHAR(20) DEFAULT 'Not Applicable'
);
SELECT * FROM menu;

INSERT INTO menu(item, price, category, size) VALUES ('carne asada', 13.95, 'meat') RETURNING *;

DELETE FROM menu WHERE item_id=$1;

SELECT * FROM menu WHERE item_id=1;

UPDATE menu SET item=$1, price=$2, category=$3, size=$4 WHERE item_id=$5 RETURNING *;