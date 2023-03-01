SELECT * FROM sakila.staff;

SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

