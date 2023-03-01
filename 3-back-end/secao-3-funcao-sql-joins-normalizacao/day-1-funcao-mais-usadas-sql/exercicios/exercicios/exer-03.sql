SELECT job_id, AVG(salary) as 'average_wage' FROM hr.employees
GROUP BY job_id
ORDER BY average_wage DESC;

SELECT * FROM hr.employees;