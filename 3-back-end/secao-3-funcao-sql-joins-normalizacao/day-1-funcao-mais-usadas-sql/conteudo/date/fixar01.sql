-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

SELECT DATEDIFF('2030-01-20', NOW());