-- Monte uma query para a tabela sakila.address que exiba 
-- o nome do distrito e a quantidade de endereços registrados nele. 
-- Os resultados devem ser ordenados da maior quantidade para a menor.

SELECT * FROM sakila.address;

SELECT district, COUNT(address) FROM sakila.address
GROUP BY district
ORDER BY COUNT(address) DESC;