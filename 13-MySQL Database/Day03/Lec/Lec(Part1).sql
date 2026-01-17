-- /////////////////////////////
-- Stored Procedure
-- /////////////////////////////
-- 1- in
DELIMITER //

CREATE PROCEDURE get_films_with_category_id(IN c_id INT)
BEGIN
    SELECT fc.category_id, f.*
    FROM film f
    INNER JOIN film_category fc
        ON f.film_id = fc.film_id
    WHERE fc.category_id = c_id;
END //

DELIMITER ;

CALL get_films_with_category_id(1);


-- 2- out
DELIMITER /

CREATE PROCEDURE calc_customer_total_payment(IN c_id INT,out total decimal(10,3))
BEGIN
    SELECT sum(amount) into total
    FROM payment
    where customer_id = c_id;
END /
DELIMITER ;


set @cid = 2;
set @total = null;

CALL calc_customer_total_payment(@cid,@total);

select @total;

-- 3- inout

DELIMITER /
create procedure get_film_count_by_category_id(inout c_id int)
begin
	select count(*) into c_id
    from film_category fc
    where fc.category_id = c_id;
end /

DELIMITER ;

set @cid=2;

select @cid;

call get_film_count_by_category_id(@cid);

select @cid;


DELIMITER /
create procedure insert_new_actor
	(in id int,in fname varchar(30),in lname varchar(30))
begin
	insert into actor values(id,fname,lname,now());
    -- last_insert_id();-- get the last inserted id
end /

DELIMITER ;

call insert_new_actor(1000,'a','b');

select * from actor
where actor_id=1000;

-- /////////////////////////////
-- Trigger
-- /////////////////////////////
create table actor_backup
(
	id int,
    fname varchar(20),
    lname varchar(20)
);

DELIMITER /
create trigger backup_actor
after insert
on actor
for each row
begin
	insert into actor_backup values(new.actor_id,new.first_name,new.last_name);
end /
DELIMITER ;

insert into actor values(1002,"ahmed","mohamed",now()),
(1003,"sadas","dasdas",now());

select * from actor_backup;

-- modify actor name before the insert

DELIMITER /
create trigger modify_actor_name_before_insert
before insert
on actor
for each row
begin
	set new.first_name=upper(new.first_name);
    set new.last_name=upper(new.last_name);
end /
DELIMITER ;

insert into actor values(1004,"nader","mohamed",now());

select * from actor
where actor_id=1004;

-- prevent action

DELIMITER /
create trigger prevent_amount_update
before update
on payment
for each row

begin
	if new.amount <> old.amount then
		signal sqlstate '45000'
        set message_text = 'can not update amount';
	end if;
end /

DELIMITER ;


update payment
set amount = 2.1
where payment_id=1;

update payment
set payment_date = now()
where payment_id=1;

select * from payment
where payment_id=1;
