use my_database;

-- Question 2
select d.Department_Number,d.Department_Name,e.SSN,CONCAT(e.FName,' ',e.LName) AS 'Full Name'
from Department d join Employees e
ON d.Department_Number=e.Department_Number
where e.SSN in (
    select Supervisor_SSN
    from Employees
);

-- Question 3
select d.Department_Name,p.Project_Name
from Department d join Project p
ON d.Department_Number=p.Dep_Number;

-- Question 4
select d.*,CONCAT(e.FName,' ',e.LName) AS 'Full Name'
from Dependent d join Employees e
on d.EMP_SSN=e.SSN;

-- Question 5
select d.Dependent_Name, d.Sex
from Dependent d
where d.Sex = 'F'
-- The UNION combines both result sets (removing duplicates)
UNION

select d.Dependent_Name, d.Sex
from Dependent d join Employees e
on d.EMP_SSN = e.SSN
where e.Sex = 'F';

-- Question 6
select d.Dependent_Name,d.Sex
from Dependent d
where d.Sex = 'M'

UNION

select d.Dependent_Name,d.Sex
from Employees e join Dependent d
on e.SSN=d.EMP_SSN
where e.Sex='F';

-- Question 7
select p.Project_Number,p.Project_Name
from Project p
where p.Project_City='Alex' or p.Project_City='Cairo';

-- Question 8
select *
from Project p
where p.Project_Name like 'a%';

-- Question 9
select *
from Employees e
where e.Department_Number = 30 and e.Salary between 1000 and 2000;

-- Question 10(9)
select CONCAT(e.FName,' ',e.LName) AS 'Full Name',e.Department_Number,wf.Hours,p.Project_Name
from Employees e join Works_For wf
on e.SSN=wf.Emp_SSN
join Project p
on wf.Proj_Number = p.Project_Number
where e.Department_Number=30 and 
wf.Hours>=10 and p.Project_Name = 'AL Rabwah';

-- Question 11
select CONCAT(e.FName,' ',e.LName) AS 'Full Name'
from Employees e join Employees s
on e.Supervisor_SSN=s.SSN
where CONCAT(s.FName,' ',s.LName)='Kamel Mohamed';

-- Question 12
select p.Project_Name,SUM(wf.Hours) AS Total_Hours
from Project p join Works_For wf
on p.Project_Number=wf.Proj_Number
GROUP BY p.Project_Name;

-- Question 13
select CONCAT(e.FName,' ',e.LName) AS 'Full Name',p.Project_Name
from Project p join Works_For wf
on p.Project_Number=wf.Proj_Number
join Employees e
on e.SSN=wf.Emp_SSN
order by p.Project_Name;

-- Question 14
select d.*
from Department d join Employees e
on d.Department_Number=e.Department_Number
where e.SSN=(select min(SSN) from Employees);

-- Question 15
select d.Department_Name,max(e.Salary) "Max salary",min(e.Salary) "Min salary",avg(e.salary) "Avg salary"
from Department d join Employees e
on d.Department_Number=e.Department_Number
group by d.Department_Name;

-- Question 16;
select distinct e.LName
from Employees e
where e.SSN in (
    select Supervisor_SSN
    from Employees
)
and e.SSN not in (
    select Emp_SSN
    from Dependent
);

-- Question 17
select d.Department_Number,d.Department_Name,count(d.Department_Number) as Num_Employees
from Department d join Employees e
on d.Department_Number=e.Department_Number
group by d.Department_Name
having avg(e.Salary) < (select avg(Salary) from Employees);

-- Question 18
select CONCAT(e.FName,' ',e.LName) AS 'Full Name',p.Project_Name,d.Department_Number
from Project p join Works_For wf
on p.Project_Number=wf.Proj_Number
join Employees e
on e.SSN=wf.Emp_SSN
join Department d
on e.Department_Number=d.Department_Number
order by d.Department_Number,e.LName,e.FName;

-- Question 19
select p.Project_Number,p.Project_City,d.Department_Name , e.LName,e.Address,e.BDate
from Project p join Department d
on p.Dep_Number=d.Department_Number
join Employees e
on e.SSN=d.Manager_SSN
where p.Project_City='Cairo';









