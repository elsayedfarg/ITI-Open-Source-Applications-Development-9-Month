use sakila;

-- ///////////////////////////////////////////////////////////////
-- built in functions
-- ///////////////////////////////////////////////////////////////

-- numbers
-- select round(20.46,1);-- 20.5
-- select truncate(20.46,1);-- 20.4
-- select avg(length) from film;
-- select pow(2,4);-- 16

-- string
-- select left(title,3) from film;-- get the first 3 chars from the string

-- select substring(title,3,5) from film;-- start from 3 and get 5 chars

-- -- the 2 lines give the same result (the first letter capital and others small)
-- select concat(upper(substring(title,1,1)),"",lower(substring(title,2))) from film;
-- select concat(upper(left(title,1)),lower(substring(title,2))) from film;

-- date
-- select now();-- '2025-12-31 11:46:46'
-- select date(now());-- '2025-12-31'
-- select month(date(now()));-- '12'
-- select current_date();-- '2025-12-31'
-- select date_format('2025-12-30','%y-%m-%d');-- '25-12-30'
-- select date_format('2025-12-30','%y,%M,%d');-- '25,December,30'

-- select quarter ('2025-12-30') from payment;-- 4
-- select quarter ('2025-7-30') from payment;-- 3

-- ///////////////////////////////////////////////////////////////
-- flow control
-- ///////////////////////////////////////////////////////////////

-- select length,case
-- 	when length > 110 then 'Long'
--     when length > 80 then 'Medium'
--     else 'Short'
--     end as Duration
-- from film;

-- update film
-- set description = null
-- where film_id=1;

-- select description, if(isnull(description),'No Desc', description) "desc"-- if description is null show "no description" else rint it
-- from film;

-- ///////////////////////////////////////////////////////////////
-- user defined functions
-- ///////////////////////////////////////////////////////////////

-- 1.get customer total payment (by customer id)

-- edit the delimiter to prevent function stop when (;) found
-- DELIMITER /
-- create function get_customer_total_payment(c_id int)
-- returns decimal(8,3)-- 8 total number => 5 for int and 3 for numbers after the (.)
-- not deterministic reads sql data -- with the same input the output may change

-- begin
-- 	declare total decimal(8,3);
--     select sum(amount) into total
--     from payment
--     where customer_id = c_id;

--     return total;
-- end /
-- DELIMITER ;

-- select get_customer_total_payment(3);

-- 2.returns their "loyalty status" based on the amount of money spent

DELIMITER /
create function calc_customer_loyalty(c_id int)
returns varchar(20)
not deterministic reads sql data

begin
declare total decimal(8,3);
    select sum(amount) into total
    from payment
    where customer_id = c_id;

    if total > 130 then
		return "Platinum";
	elseif total > 80 then
		return "Gold";
	else
		return "Silver";
	end if;
end /
DELIMITER ;

select calc_customer_loyalty(3);



