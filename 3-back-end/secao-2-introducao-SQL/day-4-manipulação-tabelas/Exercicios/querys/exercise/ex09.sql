SELECT * FROM pixar.box_office
WHERE international_sales < 300000000 AND  domestic_sales > 200000000;

UPDATE pixar.box_office
SET rating = 6.0
WHERE international_sales < 300000000 AND  domestic_sales > 200000000;
