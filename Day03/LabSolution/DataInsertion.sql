use my_database;

INSERT INTO Department (Department_Number, Department_Name, Manager_SSN, Manager_Start_Date)
VALUES
(10, 'DP1', 223344, '2005-01-01'),
(20, 'DP2', 968574, '2006-03-01'),
(30, 'DP3', 512463, '2006-06-01');


INSERT INTO Employees (FName, LName, SSN, BDate, Address, Sex, Salary, Supervisor_SSN, Department_Number)
VALUES
('Amr', 'Omran', 321654, '1963-09-14', '44 Heliopolis Cairo', 'M', 2500, NULL, NULL),
('Kamel', 'Mohamed', 223344, '1970-10-15', '38 Mohy el Dien Abo el Ezz St. Cairo', 'M', 1800, 321654, null),
('Hanaa', 'Sobhy', 123456, '1973-03-18', '38 Abdel Khalik Tharwat St. Downtown Cairo', 'F', 800, 223344, null),
('Ahmed', 'Ali', 112233, '1965-01-01', '15 Ali Fahmy St. Giza', 'M', 1300, 223344, null),
('Noha', 'Mohamed', 968574, '1975-02-01', '55 Orabi St. El Mohandiseen Cairo', 'F', 1600, 321654, null),
('Edward', 'Hanna', 512463, '1972-08-19', '18 Abaas El 3akaad St. Nasr City Cairo', 'M', 1500, 321654, null),
('Mariam', 'Adel', 669955, '1982-06-12', '269 El-Haram St. Giza', 'F', 750, 512463, null),
('Maged', 'Raoof', 521634, '1980-04-06', '18 Kholosi St. Shobra Cairo', 'M', 1000, 968574, null);

INSERT INTO Project (Project_Number, Project_Name, Project_Location, Project_City, Dep_Number)
VALUES
(100, 'AL Solimaniah', 'Cairo Alex Road', 'Alex', 10),
(200, 'Al Rabwah', '6th of October City', 'Giza', 10),
(300, 'Al Rawdah', 'Zaied City', 'Giza', 10),
(400, 'Al Rowad', 'Cairo Fayoum Road', 'Giza', 20),
(500, 'Al Rehab', 'Nasr City', 'Cairo', 30),
(600, 'Pitcho American', 'Maady', 'Cairo', 30),
(700, 'Ebad El Rahman', 'Ring Road', 'Cairo', 20);

INSERT INTO Dependent (Dependent_Name, Sex, BDate, Emp_SSN)
VALUES
('Hala Saied Ali', 'F', '1970-10-18', 112233),
('Ahmed Kamel Shawki', 'M', '1998-03-27', 223344),
('Mona Adel Mohamed', 'F', '1975-04-25', 223344),
('Ramy Amr Omran', 'M', '1990-01-26', 321654),
('Omar Amr Omran', 'M', '1993-03-30', 321654),
('Sanaa Gawish', 'F', '1973-05-16', 321654),
('Sara Edward', 'F', '2001-09-15', 512463),
('Nora Ghaly', 'F', '1976-06-22', 512463);

INSERT INTO Works_For (Emp_SSN, Proj_Number, Hours)
VALUES
(223344, 100, 10),
(223344, 200, 10),
(223344, 300, 10),
(112233, 100, 40),
(968574, 400, 15),
(968574, 700, 15),
(968574, 300, 10),
(669955, 400, 20),
(223344, 500, 10),
(669955, 700, 7),
(669955, 300, 10),
(512463, 500, 10),
(512463, 600, 25),
(521634, 500, 10),
(521634, 600, 20),
(521634, 300, 6),
(521634, 400, 4);