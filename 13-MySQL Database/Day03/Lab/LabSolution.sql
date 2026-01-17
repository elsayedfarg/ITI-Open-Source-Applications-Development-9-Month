-- /////////////////////////////////////////////////
-- User-Defined Functions
-- /////////////////////////////////////////////////

-- Question 1
DELIMITER /
create function get_full_name(act_id int)
returns varchar(50)
deterministic
reads sql data
	
begin
	declare full_name varchar(50);
	select concat(first_name," ",last_name) into full_name
    from actor
    where actor.actor_id=act_id;
    return full_name;
end /

DELIMITER ;

select get_full_name(1);

-- Question 2
DELIMITER /
create function get_rentals_count(cust_id int)
returns int
deterministic
reads sql data

begin
	declare total_rentals int;
	select count(*) into total_rentals
    from rental
    where customer_id=cust_id;
    return total_rentals;
end /

DELIMITER ;

select get_rentals_count(2);

-- Question 3
DELIMITER /
create function fomat_decimal_into_string(val DECIMAL(10,2))
returns varchar(50)
deterministic
no sql

begin
	declare formatted_string varchar(50);
    select concat('$',val) into formatted_string;
    return formatted_string;
end /

DELIMITER ;

select fomat_decimal_into_string(19.9);

-- /////////////////////////////////////////////////
-- Stored Procedures
-- /////////////////////////////////////////////////

-- Question 1
DELIMITER /
create procedure get_customer_data(in cust_id int)

begin 
	select concat(first_name," ",last_name) "Full_name"
		,c.email
        ,concat(address," ",address2) "Full_address"
        ,cty.city
	from customer c join address a
    on c.address_id = a.address_id
    join city cty
    on cty.city_id = a.city_id
    where c.customer_id = cust_id;
end /

DELIMITER ;

call get_customer_data(1);

-- Question 2
DELIMITER /
create procedure get_total_revneue
	(in start_date datetime,in end_date datetime,out total_revenue decimal(5,2))
begin
	select sum(amount) into total_revenue
    from payment p
    where payment_date between start_date and end_date;
end /
DELIMITER ;

set @total_revenue=null;

call get_total_revneue('2006-01-01','2026-01-01',@total_revenue);

select @total_revenue;

-- Question 3
DELIMITER /
create procedure get_film_title_and_rating
	(in partial_string varchar(50))
begin
	select f.title,f.rating
    from film f
    where f.title like concat("%",partial_string,"%");
end /
DELIMITER ;

call get_film_title_and_rating("dark");

-- Question 4
DELIMITER /
create procedure get_most_rented_category_name
	(in cust_id int,out category_name varchar(50))
begin
	select c.name into category_name
    from rental r join inventory i
    on r.inventory_id = i.inventory_id
    join film f
    on i.film_id = f.film_id
    join film_category fc
    on f.film_id = fc.film_id
    join category c
    on fc.category_id = c.category_id
    where r.customer_id = cust_id
    group by c.category_id
    order by count(*) desc
    limit 1;
end /
DELIMITER ;

set @category_name = null;

call get_most_rented_category_name(2,@category_name);

select @category_name;

-- /////////////////////////////////////////////////
-- Trigger
-- /////////////////////////////////////////////////

-- Question 1
DELIMITER /

create trigger change_last_update_before_update
before update
on address
for each row
begin
	set new.last_update = now();
end /
DELIMITER ;


select address_id,last_update
from address;

update address
set address = "new_address"
where address_id = 1;

select address_id,last_update
from address;

-- Question 2

DELIMITER /
create trigger prevent_update
before update
on staff
for each row
begin
	if new.username = "admin" then
		signal sqlstate '45000'
		set message_text = "you can not update username to admin";
	end if;
end /
DELIMITER ;

select staff_id,username
from staff;

update staff
set username="new_user"
where staff_id = 2;

select staff_id,username
from staff;

update staff
set username="admin"
where staff_id = 2;

-- Question 3

DELIMITER /
create trigger validate_email_before_insert
before insert
on customer
for each row
begin
	if new.email not like '%@%' or new.email not like '%.%' then
		signal sqlstate "45000"
        set message_text = "Email must conatin both . and @";
	end if;    
end/
DELIMITER ;

select * from customer
where customer_id >= 600;

insert into customer(customer_id,store_id,first_name,last_name,email,address_id) 
values(600,2,"sayed","mohamed","sayed@743@gmail.com",7);

insert into customer(customer_id,store_id,first_name,last_name,email,address_id) 
values(601,2,"ahmed","mohamed","sayed743@gmail.com",7);

insert into customer(customer_id,store_id,first_name,last_name,email,address_id) 
values(602,2,"ali","mohamed","sayed743gmail.com",7);

select * from customer
where customer_id >= 600;

-- Question 4
create table film_price_history
(
	history_id int auto_increment primary key,
    film_id int,
    film_name varchar(50),
    old_price decimal(3,2),
    new_price decimal(3,2),
    change_date datetime
);

DELIMITER /
create trigger change_date_after_update
after update
on film
for each row
begin
	if old.rental_rate <> new.rental_rate then
		insert into film_price_history
        (film_id,film_name,old_price,new_price,change_date)
		values(old.film_id,old.title,old.rental_rate,new.rental_rate,now());
	end if;
end /
DELIMITER ;

select *
from film_price_history;

select * from film;

update film
set rental_rate = 0.95
where film_id = 1;

select *
from film_price_history;

select * from film;