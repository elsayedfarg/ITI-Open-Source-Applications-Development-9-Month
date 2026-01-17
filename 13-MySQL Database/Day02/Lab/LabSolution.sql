-- Question 1
select title,description,length
from film
where length > 120
order by length desc;

-- Question 2
select film_id,title,rental_rate,replacement_cost
from film
where rental_rate in (0.99,2.99) and replacement_cost > 20.00;

-- Question 3
select rating,count(film_id) as "Number of films"
from film
group by rating;

-- Question 4
select customer_id
from payment
group by customer_id
having count(payment_id) > 30;

-- Question 5
 -- Join Solution
select ci.city,co.country
from city ci join country co 
on ci.country_id=co.country_id
where country = "Egypt";

 -- Nested Query Solution
select city,country_id
from city
where country_id =
	(select country_id
	from country
	where country="Egypt"
	);

-- Question 6
 -- Join Solution
select f.film_id,f.title,concat(first_name," ",last_name) as "Actor name"
from film f join film_actor fa
on f.film_id = fa.film_id
join actor a
on fa.actor_id = a.actor_id;

-- Question 7
 -- Join Solution
select f.title,concat(first_name," ",last_name) as "Customer name"
from film f join inventory i
on f.film_id =  i.film_id
join rental r
on i.inventory_id=r.inventory_id
join customer c
on r.customer_id=c.customer_id
where r.return_date is null;

-- Question 8
select f.title
from film f
where length > 
	(
	select avg(length)
	from film
	);

-- Question 9
-- i want to return all the customers even if rental is null
select c.first_name,c.last_name,c.email
from customer c left join rental r
on c.customer_id = r.customer_id
where rental_id is null;

-- Question 10
create view customer_spending_summary as
select 
	concat(first_name," ",last_name) as "Customer name"
	,count(r.rental_id) "Number of rentals"
	,sum(p.amount) "Total amount of money"
from customer c join rental r
on c.customer_id = r.customer_id
join payment p
on r.rental_id = p.rental_id
group by c.first_name,c.last_name;

-- Question 11
select *
from customer_spending_summary css
where `Total amount of money` > 100;

-- ////////////////////////////////////////////////
-- Built-in Functions
-- ////////////////////////////////////////////////

-- Question 1
select concat(upper(last_name),",",upper(left(first_name,1)),lower(substring(first_name,2)))
from actor;

-- Question 2
select lower(email) "Old email",replace(email,"@sakilacustomer.org","@iti-students.edu") "New email"
from customer;

-- Question 3
select concat(substring(description,1,50) ,"...") "short_summary"
from film;

-- Question 4

select concat(first_name," ",last_name) "Customer name", create_date
from customer
where month(create_date) = 2;

-- Question 5
select quarter(payment_date) "Quarter_number",sum(amount) "amount"
from payment
group by Quarter_number
order by Quarter_number desc
limit 1;

-- Question 6
select rental_id,amount,
  case
    when amount < 2 then 'Cheap'
    when amount between 2 and 4.99 then 'Mid'
    when amount > 5 then 'Expensive'
  end as price_category
from payment;

-- ////////////////////////////////////////////////
-- Bonus
-- ////////////////////////////////////////////////

-- Question 1
with action_film_count_for_actor_CTE as
(
select concat(first_name,' ',last_name) 'Actor_name', count(*) 'action_film_count'
from actor a join film_actor fa
on a.actor_id = fa.actor_id
join film f
on fa.film_id = f.film_id
join film_category fc
on f.film_id = fc.film_id
join category c
on fc.category_id = c.category_id
where c.name = 'Action'
group by `Actor_name`
)
select *
from action_film_count_for_actor_CTE
where `action_film_count` > 3; -- > 10 no output found

-- Question 2
with actors_with_more_than_5_action_movies_CTE as
(
select a.actor_id,concat(first_name,' ',last_name) 'Actor_name', count(*) 'action_film_count'
from actor a join film_actor fa
on a.actor_id = fa.actor_id
join film f
on fa.film_id = f.film_id
join film_category fc
on f.film_id = fc.film_id
join category c
on fc.category_id = c.category_id
where c.name = 'Action'
group by a.actor_id,`Actor_name`
having count(*) > 2
),
actors_with_more_than_5_drama_movies_CTE as
(
select a.actor_id,concat(first_name,' ',last_name) 'Actor_name', count(*) 'drama_film_count'
from actor a join film_actor fa
on a.actor_id = fa.actor_id
join film f
on fa.film_id = f.film_id
join film_category fc
on f.film_id = fc.film_id
join category c
on fc.category_id = c.category_id
where c.name = 'Drama'
group by a.actor_id,`Actor_name`
having count(*) > 2
)
select 
	act.actor_id,
    act.actor_name,
    act.action_film_count,
    drama.drama_film_count
from actors_with_more_than_5_action_movies_CTE act join actors_with_more_than_5_drama_movies_CTE drama
on act.actor_id = drama.actor_id; -- no ouput when you use 5 so i have used 2