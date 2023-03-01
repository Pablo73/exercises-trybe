SELECT job_id, SUM(salary) AS 'salary' FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY salary DESC;