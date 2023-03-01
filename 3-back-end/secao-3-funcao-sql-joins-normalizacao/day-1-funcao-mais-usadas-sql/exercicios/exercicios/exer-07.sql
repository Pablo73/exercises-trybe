SELECT * FROM hr.employees;

SELECT job_id, SUM(salary) AS 'salary' FROM hr.employees
GROUP BY job_id
ORDER BY salary DESC;