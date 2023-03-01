SELECT * FROM hr.employees;

SELECT CONCAT(first_name, ' ', last_name), CONCAT(DATEDIFF(NOW(), hire_date), ' ', 'days') FROM hr.employees;