use my_database;
-- Question 1
INSERT INTO Employees(Department_Number,SSN,Supervisor_SSN)
VALUES
(30,102672,112233);

UPDATE Employees
SET FName='Sayed',LName='Mohamed',BDate='2003-09-7',Address='38 Mohy el Dien Abo el Ezz St. Cairo',Sex='M',Salary=5000
WHERE Supervisor_SSN=112233;


-- Question 2
INSERT INTO Employees(FName, LName, Department_Number, BDate, Address, Sex, SSN)
VALUES
('new','mohamed',30,'1963-09-14','38 Mohy el Dien Abo el Ezz St. Cairo','M',102660);

-- Question 3
INSERT INTO Department (Department_Number, Department_Name, Manager_SSN, Manager_Start_Date)
VALUES
(100, 'IT DEPT', 112233, '2005-11-01');


-- Question 4
	-- Part a
UPDATE Department
SET Manager_SSN=968574
WHERE Department_Number=100;

	-- Part b
UPDATE Employees
SET Department_Number=20
WHERE Supervisor_SSN=112233;

	-- Part c
UPDATE Employees
SET Supervisor_SSN=102672
WHERE SSN=102660;
    
-- Question 5
-- delete 223344(kamel) Dependent
DELETE FROM Dependent
WHERE Emp_SSN=223344;

-- replace 223344(kamel) with your friend (102660) as a department manager
UPDATE Department
SET Manager_SSN = 102660
WHERE Manager_SSN = 223344;

-- replace 223344(kamel) with your friend (102660) as a supervisor
UPDATE Employees
SET Supervisor_SSN = 102660
WHERE Supervisor_SSN = 223344;

-- replace 223344(kamel) with your friend (102660) as an employee on a project (works for) table
UPDATE Works_For
SET Emp_SSN = 102660
WHERE Emp_SSN  = 223344;

-- now delete the employee (kamel)
DELETE FROM Employees
WHERE SSN = 223344;

-- Question 6
UPDATE Employees
SET Salary = Salary * 1.2 -- Old Salary = 5000
WHERE SSN = 102672;
