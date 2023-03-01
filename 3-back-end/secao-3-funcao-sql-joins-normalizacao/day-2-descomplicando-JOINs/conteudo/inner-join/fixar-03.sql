SELECT * FROM sakila.customer;

SELECT * FROM sakila.address;

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS 'name', c.email, 
a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.address_id = c.address_id
ORDER BY name DESC 
LIMIT 100;