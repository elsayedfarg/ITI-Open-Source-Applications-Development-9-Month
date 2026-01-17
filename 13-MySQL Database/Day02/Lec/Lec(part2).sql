-- ////////////////////////////////////////////////////////////
-- EXPLAIN Command
-- ////////////////////////////////////////////////////////////

EXPLAIN
SELECT 
    f.title,
    c.name AS category_name,
    f.rental_rate
FROM 
    film f
JOIN 
    film_category fc ON f.film_id = fc.film_id
JOIN 
    category c ON fc.category_id = c.category_id
WHERE 
    f.rental_rate > 4.99
ORDER BY 
    f.title
LIMIT 10;
