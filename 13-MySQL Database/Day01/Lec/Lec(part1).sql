CREATE DATABASE Temp;
use Temp;

-- /////////////////////////////////////// Generated Columns /////////////////////////////////////////////

-- CREATE TABLE users(
-- 	email varchar(50),
--     domain varchar(50) as (substring_index(email,"@",-1)) stored -- select substring_index("sayedmohamed@gmail.com",'@',-1) => ouput (gmail.com)
-- );
-- insert into users (email) values("elsayedmohamed@gmail.com");
-- select * from users;

-- ///////////////////////////////////////////// Enum /////////////////////////////////////////////

-- ALTER TABLE users
-- add column gender enum('male','female') default 'male';
-- select *
-- from users;


-- ///////////////////////////////////////////// Operations on database /////////////////////////////////////////////

-- CREATE TABLE employees(
-- 	eid int primary key,
--     ename varchar(50) not null,
--     email varchar(30) unique,
--     dept_id int
-- );

-- CREATE TABLE departments(
-- 	dept_id int primary key,
--     dname varchar(30) not null unique
-- );

-- insert into employees (eid,ename,email,dept_id) 
-- 	values(1,"sayed","sayed@mohamed@gmail.com",null)
--     ,(2,"ahmed","ahmed@ahmed@gmail.com",null);

-- select * from employees;

-- insert into departments 
-- 	values(1,"os")
--     ,(2,"java")
--     ,(3,"ai");
--     
-- select * from departments;

-- update employees
-- set dept_id=1
-- where eid=1;

-- alter table employees
-- add constraint employees_departments_fk foreign key(dept_id) references departments(dept_id);

-- update employees
-- set dept_id=2 -- error set dept_id=200
-- where eid=2;

-- select * from employees;

-- alter table employees
-- drop constraint employees_departments_fk;

-- alter table employees
-- add constraint employees_departments_fk foreign key(dept_id) references departments(dept_id)
-- on delete cascade;

-- delete from departments
-- where dept_id=1;

-- select * from employees












