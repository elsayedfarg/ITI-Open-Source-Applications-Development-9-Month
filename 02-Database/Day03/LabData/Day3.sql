-- DDL 
	-- Create Table 
    --  Alter Table 
    -- Drop table
create database iti;

use iti;

Create table Employees (
ssn int primary key auto_increment,
Fname varchar(50) NOT NULL,
-- Mname varchar(50) Not Null,
Lname varchar(50) Not Null,
email varchar(100) unique,
-- BDate date,
-- Addrees Text Null,
salary int default 10000
-- created_at timestamp
);


Create Table Departments (
DNumber int primary Key,
DName varchar(255) Not Null,
MGRSSN int,
MGRStart_date Date
);

-- alter table -> add column 
Alter Table Employees
Add Column SEX varchar(255);

Alter Table Employees
Add Column Superssn int After Addrees,
Add Column DNo int;

-- Alter Column Modify Data Type 
Alter Table Employees
Modify Column Fname Varchar(100);

-- Drop a Column
Alter Table Employees
drop Column created_at;

-- Rename a Column 
Alter Table Employees
change column ssn emp_SNN int; 

alter table Employees
Alter Column Salary Set default 10000;

Alter Table Employees
MODIFY COLUMN email VARCHAR(255) NOT NULL;

alter table Employees
Add constraint un_email unique(email);

alter table Employees
Add constraint pk_ssn primary key(emp_SNN);

alter table Employees
Add constraint fk_superssn foreign key(superssn)
references Employees(emp_SNN);

Drop Table Employees;

-- DML 
	-- Insert Into
    -- Update Table_name 
    -- Delete from Table_name , trucate table 

show tables;
describe table Employees;

Insert Into Employees (ssn, fname, Lname, email) values (2, "Ahmed",  "Ali", "ahmed1@gmail.com");

Insert Into Employees (fname, Lname, email) values ("Mohamed",  "Ali", "ahmed4@gmail.com"), ("", "", ""), ();

select * From Employees;

Insert Into Employees values (3, "Ahmed",  "Ali", "ahmed3@gmail.com", 50000);
    
    
-- Update 
update Employees SET Fname = "Hamdy", Lname = "Ahmed"
where ssn = 2;

-- Delete 
Delete From Employees where ssn = 3;

truncate Table Employees;
-- DQL -> read 
	-- Select 
Select * From Employees Where email = "ahmed1@gmail.com";

Select Fname as "First Name", Lname as Last_name From Employees ;

Select * From Employees order by salary desc