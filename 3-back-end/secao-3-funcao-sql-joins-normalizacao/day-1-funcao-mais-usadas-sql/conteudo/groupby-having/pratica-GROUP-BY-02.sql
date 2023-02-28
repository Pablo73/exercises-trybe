-- Monte uma query para a tabela sakila.customer 
-- que exiba a quantidade de clientes ativos e inativos 
-- por loja. Os resultados devem conter o ID da loja, o status dos clientes 
-- (ativos ou inativos) e a quantidade de clientes por status.

SELECT * FROM sakila.customer;

SELECT store_id, active, COUNT(active) FROM sakila.customer
GROUP BY store_id, active;