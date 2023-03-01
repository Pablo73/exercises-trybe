SELECT * FROM hr.employees;

SELECT REPLACE(phone_number, 515, 777) FROM hr.employees;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';