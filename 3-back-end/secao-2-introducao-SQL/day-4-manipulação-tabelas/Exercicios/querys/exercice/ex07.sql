SELECT * FROM pixar.movies
WHERE director = 'Andrew Stanton';

DELETE FROM pixar.box_office
WHERE movie_id in (2, 9);

SELECT * FROM pixar.box_office;

DELETE FROM pixar.movies
WHERE director = 'Andrew Stanton';

SELECT * FROM pixar.movies;