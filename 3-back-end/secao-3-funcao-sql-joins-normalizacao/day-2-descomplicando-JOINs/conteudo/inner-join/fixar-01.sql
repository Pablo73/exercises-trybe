SELECT * FROM sakila.actor;

SELECT * FROM sakila.film_actor;

SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS 'name', f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;