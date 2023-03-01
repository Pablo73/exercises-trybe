SELECT * FROM sakila.address;

SELECT * FROM sakila.customer;

SELECT CONCAT(c.first_name, ' ', c.last_name) AS 'name', c.email, 
a.address, a.district
FROM sakila.customer AS c 
INNER JOIN sakila.address AS a 
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';