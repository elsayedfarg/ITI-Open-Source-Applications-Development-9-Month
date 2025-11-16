CREATE DATABASE my_database;
use my_database;

CREATE TABLE Employees(
	SSN int primary key,
	FName varchar(50),
    LName varchar(50),
    BDate date,
    Address varchar(50),
    Sex varchar(10),
    Salary int,
    Supervisor_SSN int,-- foreign key (Done)
    Department_Number int-- foreign key (Done)
);
ALTER TABLE Employees
ADD CONSTRAINT Employee_Supervisor_FK foreign key (Supervisor_SSN) references Employees(SSN);

ALTER TABLE Employees
ADD CONSTRAINT positive_salary CHECK (Salary > 500),
ADD CONSTRAINT valid_sex CHECK (Sex IN ('M', 'F')),
ADD CONSTRAINT not_own_supervisor CHECK (SSN <> Supervisor_SSN);

ALTER TABLE Employees
MODIFY FName VARCHAR(50) NOT NULL,
MODIFY LName VARCHAR(50) NOT NULL,
MODIFY Address VARCHAR(50) NOT NULL,
MODIFY Sex VARCHAR(10) NOT NULL;

CREATE TABLE Department(
	Department_Number int primary key,
    Department_Name varchar(50),
    Manager_Start_Date date,
    Manager_SSN int -- foreign key(Done)
);

ALTER TABLE Employees
ADD CONSTRAINT Employee_Department_FK foreign key (Department_Number) references Department(Department_Number);

ALTER TABLE Department
ADD CONSTRAINT Department_Employee_FK foreign key (Manager_SSN ) references Employees(SSN);

ALTER TABLE Department
MODIFY Department_Name VARCHAR(50) NOT NULL;

ALTER TABLE Department
ADD CONSTRAINT Unique_Department_Name UNIQUE (Department_Name);

CREATE TABLE Project(
	Project_Number int primary key,
    Project_Name varchar(50),
    Project_Location varchar(50),
    Project_City varchar(50),
    Dep_Number int -- foreign key (Done)
);

ALTER TABLE Project
ADD CONSTRAINT Department_Project_FK foreign key (Dep_Number) references Department(Department_Number);

ALTER TABLE Project
MODIFY Project_Name VARCHAR(50) NOT NULL,
MODIFY Project_Location VARCHAR(50) NOT NULL,
MODIFY Project_City VARCHAR(50) NOT NULL;

ALTER TABLE Project
ADD CONSTRAINT Unique_Project_Name UNIQUE (Project_Name);

CREATE TABLE Works_For(
	Hours int,
    Proj_Number int,  -- foreign key (Done)
    Emp_SSN int  -- foreign key (Done)
);

ALTER TABLE Works_For
ADD CONSTRAINT Project_Work_For_PK foreign key (Proj_Number) references Project(Project_Number);

ALTER TABLE Works_For
ADD CONSTRAINT Employee_Work_For_PK foreign key (Emp_SSN) references Employees(SSN);

ALTER TABLE Works_For
ADD CONSTRAINT Valid_Hours CHECK (Hours >= 0 AND Hours <= 100);

CREATE TABLE Dependent(
	Dependent_Name varchar(50),
    Sex varchar(10),
    BDate date,
    Emp_SSN int,
    PRIMARY KEY (Dependent_Name, Emp_SSN),-- Composite pk
	CONSTRAINT Emp_Dependent_FK foreign key (Emp_SSN) references Employees(SSN) -- foreign key (Done)
);

ALTER TABLE Dependent
MODIFY Dependent_Name VARCHAR(50) NOT NULL,
MODIFY Sex VARCHAR(10) NOT NULL,
MODIFY BDate DATE NOT NULL;

ALTER TABLE Dependent
ADD CONSTRAINT Valid_Dependent_Sex CHECK (Sex IN ('M', 'F'));
