-- Usando a query a seguir, modifique-a de forma 
-- que exiba apenas as durações médias que estão 
-- entre 115.0 a 121.50. Além disso, dê um alias 
-- (apelido) à coluna gerada por AVG(length), de 
-- forma que deixe a query mais legível. 
-- Finalize ordenando os resultados de forma decrescente.

SELECT rating, AVG(length) 'tempo'
FROM sakila.film
GROUP BY rating
HAVING tempo BETWEEN 115.0 AND 121.50
ORDER BY tempo DESC;

