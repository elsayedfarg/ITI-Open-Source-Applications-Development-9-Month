-- Question 1
SELECT *
FROM Employees;

-- Question 2
SELECT FName AS 'First Name', LName AS 'Last Name', Salary AS 'Salary', Department_Number AS 'Department Number'
FROM Employees;

-- Question 3
SELECT Project_Name,Project_Location,Dep_Number
FROM Project;

-- Question 4
SELECT CONCAT(FName, ' ', LName) AS "FULL NAME",(Salary * 12 * 0.10) AS "ANNUAL COMM"
FROM Employees;

-- Question 5
SELECT SSN AS 'Employee Id',CONCAT(FName, ' ', LName) AS "FULL NAME"
FROM Employees
WHERE Salary > 1000;

-- Question 6
SELECT SSN AS 'Employee Id',CONCAT(FName, ' ', LName) AS "FULL NAME"
FROM Employees
WHERE (Salary * 12) > 10000;

-- Question 7
SELECT CONCAT(FName, ' ', LName) AS "FULL NAME",Salary
FROM Employees
WHERE Sex = 'F';

-- Question 8
SELECT Department_Number,Department_Name
FROM Department
WHERE Manager_SSN=968574;

-- Questions 9
SELECT Project_Number,Project_Name,Project_Location
FROM Project
WHERE Dep_Number=10;
