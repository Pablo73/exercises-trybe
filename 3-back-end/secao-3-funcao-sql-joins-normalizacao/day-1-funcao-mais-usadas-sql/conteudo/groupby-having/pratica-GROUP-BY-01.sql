-- Monte uma query que exiba a quantidade de clientes 
-- cadastrados na tabela sakila.customer
--  que estão ativos e a quantidade que estão inativos.

SELECT * FROM sakila.customer;

SELECT active, COUNT(active) FROM sakila.customer
GROUP BY active;