SELECT * FROM sakila.customer;

SELECT * FROM sakila.rental;

SELECT CONCAT(c.first_name, ' ', c.last_name) AS 'name', COUNT(r.rental_id) AS 'rented movies'
FROM sakila.customer AS c 
INNER JOIN sakila.rental AS r 
ON c.customer_id = r.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY name DESC;