-- Usando a query a seguir, exiba apenas os valores de 
-- total do custo de substituição que estão acima de $3950.50. 
-- Dê um alias que faça sentido para SUM(replacement_cost), de 
-- forma que deixe a query mais legível. Finalize ordenando os 
-- resultados de forma crescente.

SELECT rating, SUM(replacement_cost) AS 'value'
FROM sakila.film
GROUP by rating
HAVING value > 3950.50
ORDER BY value;

