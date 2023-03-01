SELECT * FROM hr.employees;

SELECT
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM
    hr.employees AS manager
INNER JOIN
    hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY
    manager.employee_id;