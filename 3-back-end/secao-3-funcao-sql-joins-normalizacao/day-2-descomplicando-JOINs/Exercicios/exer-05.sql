SELECT * FROM pixar.theater;

SELECT * FROM pixar.movies;

SELECT b.title, b.director, b.year, b.length_minutes, a.name, a.location
FROM pixar.theater AS a
RIGHT JOIN pixar.movies AS b
ON a.id = b.theater_id
ORDER BY a.name;