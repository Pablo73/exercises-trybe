-- Active: 1676928823432@@127.0.0.1@33060
SELECT * FROM pixar.box_office
WHERE domestic_sales > 400000000;

UPDATE pixar.box_office
SET rating = 9.0
WHERE domestic_sales > 400000000;

SELECT * FROM pixar.box_office;