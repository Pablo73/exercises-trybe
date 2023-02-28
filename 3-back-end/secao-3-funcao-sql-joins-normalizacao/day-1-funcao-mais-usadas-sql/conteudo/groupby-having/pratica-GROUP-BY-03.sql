-- Monte uma query que exiba a média de duração 
-- de locação por classificação indicativa (rating) 
-- dos filmes cadastrados na tabela sakila.film. 
-- Os resultados devem ser agrupados pela classificação 
-- indicativa e ordenados da maior média para a menor.

SELECT * FROM sakila.film;

SELECT rating, AVG(rental_duration) FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;
