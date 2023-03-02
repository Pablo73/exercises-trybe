SELECT * FROM pixar.theater;

SELECT * FROM pixar.movies;

SELECT a.name, a.location, b.title, b.director, b.year, b.length_minutes
FROM pixar.theater AS a
LEFT JOIN pixar.movies AS b
ON a.id = b.theater_id
ORDER BY a.name;