-- Utilizando o resultado anterior, responda à 
-- seguinte pergunta: temos lugares sobrando? Se sim, quantos?

SELECT IF(220 MOD 12 = 0, 'Não temos lugares sobrando', 
CONCAT('Temos', ' ', 220 MOD 12, ' ', 'lugares livres')) AS 'lugares';