SELECT * FROM pixar.movies;

SELECT * FROM pixar.box_office;

SELECT a.title, a.director, a.year, a.length_minutes, b.rating, a.theater_id
FROM pixar.movies AS a
INNER JOIN pixar.box_office AS b
ON a.id = b.movie_id
WHERE b.rating > 8 AND a.theater_id <> 'NULL';