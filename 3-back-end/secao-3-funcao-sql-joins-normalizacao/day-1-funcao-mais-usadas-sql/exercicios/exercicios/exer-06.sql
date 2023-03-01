SELECT * FROM hr.employees;

SELECT job_id, COUNT(job_id) FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';