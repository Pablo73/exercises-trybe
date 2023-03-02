SELECT * FROM pixar.box_office;

SELECT * FROM pixar.movies;

SELECT a.title, b.rating 
FROM pixar.movies AS a 
INNER JOIN pixar.box_office AS b 
ON b.movie_id = a.id
ORDER BY b.rating DESC;