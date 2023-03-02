SELECT * FROM pixar.box_office;

SELECT * FROM pixar.movies;

SELECT a.title, b.domestic_sales, b.international_sales
FROM pixar.movies AS a
INNER JOIN pixar.box_office AS b 
ON a.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;