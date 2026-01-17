use sakila;

-- ///////////////////////////////////////////////////////////////
-- Find all films that have a rental rate higher than the avg rental rate
-- ///////////////////////////////////////////////////////////////

-- select f.film_id,f.title
-- from film f
-- where rental_rate > (
-- 	select avg(rental_rate)
--     from film
-- );

-- ///////////////////////////////////////////////////////////////
-- Find all films with category "Action"
-- ///////////////////////////////////////////////////////////////

-- Using subquery solution

-- select f.film_id,f.title
-- from film f
-- where film_id in
-- 	(select film_id
-- 	from film_category
-- 	where category_id = 
-- 		(select category_id from category
-- 		where name like "Action"
-- 		)
-- );

-- Using join solution

-- select f.film_id,f.title
-- from film f join film_category fc
-- on f.film_id = fc.film_id
-- join category c
-- on fc.category_id = c.category_id
-- where c.name like "Action";

-- ///////////////////////////////////////////////////////////////
-- Find customers who have rented
-- more films than the avg number of rentals per customer
-- ///////////////////////////////////////////////////////////////

-- select c.customer_id,c.first_name
-- from customer c
-- where c.customer_id in
-- 	(select customer_id
--     from rental
--     group by customer_id
--     having count(*) > 
--     (
--     select count(*)/count(distinct(customer_id))
-- 	from rental
--     )
-- );


-- ///////////////////////////////////////////////////////////////
-- CTE (Common table expression)
-- ///////////////////////////////////////////////////////////////

-- with action_category_id as
-- (
-- 	select category_id
-- 	from category
-- 	where name = "Action"
-- ), film_ids as
-- (
-- 	select film_id
--     from film_category
--     where category_id in
--     (
-- 		select category_id
--         from action_category_id
-- 	)
-- )
-- select * 
-- from film
-- where film_id in 
-- (
-- 	select film_id from film_ids
-- );

-- ///////////////////////////////////////////////////////////////
-- Views
-- ///////////////////////////////////////////////////////////////

-- create view FIlms_with_rate_greater_than_3 as
-- select * from film
-- where rental_rate > 3;

-- select rental_rate
-- from FIlms_with_rate_greater_than_3;

-- -- now this upate in the original table will affect the view
-- update film
-- set title = 'new title'
-- where film_id = 2;

-- select *
-- from FIlms_with_rate_greater_than_3
-- where film_id=2;

-- -- also any update in the view will affect the original table as the view is updatable
-- update FIlms_with_rate_greater_than_3
-- set title = 'update from view'
-- where film_id = 2;

-- select *
-- from FIlms_with_rate_greater_than_3
-- where film_id=2;

-- ///////////////////////////////////////////////////////////////
-- 
-- ///////////////////////////////////////////////////////////////