SELECT * FROM sakila.payment;

SELECT * FROM sakila.staff;

SELECT 
    s.first_name, 
    s.last_name, AVG(p.amount)
FROM 
    sakila.staff AS s 
INNER JOIN 
    sakila.payment AS p
ON 
    s.staff_id = p.staff_id
WHERE 
    YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;