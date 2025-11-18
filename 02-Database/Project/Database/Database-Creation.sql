CREATE DATABASE ZagazigDatabaseProject;

use ZagazigDatabaseProject;

CREATE TABLE Departments (
  Department_ID integer PRIMARY KEY AUTO_INCREMENT,
  Department_Name varchar(255) NOT NULL,
  Department_Desc text
);

CREATE TABLE Professors (
  Professor_ID integer PRIMARY KEY AUTO_INCREMENT,
  Professor_Name varchar(255) NOT NULL,
  Dep_ID integer -- Foreign Key
);

ALTER TABLE Professors ADD FOREIGN KEY (Dep_ID) REFERENCES Departments (Department_ID) ON DELETE SET NULL;

CREATE TABLE Students (
  Student_ID integer PRIMARY KEY AUTO_INCREMENT,
  Student_Name varchar(255) NOT NULL,
  Student_Level varchar(50),
  Student_Gender varchar(20)
);

CREATE TABLE Courses (
  Course_ID integer PRIMARY KEY AUTO_INCREMENT,
  Course_Name varchar(255) NOT NULL,
  Course_Desc text,
  Course_Code varchar(20) UNIQUE NOT NULL,
  Academic_Level varchar(50),
  Dep_ID integer -- Foreign Key
);

ALTER TABLE Courses ADD FOREIGN KEY (Dep_ID) REFERENCES Departments (Department_ID) ON DELETE CASCADE;

CREATE TABLE Exams (
  Exam_ID integer PRIMARY KEY AUTO_INCREMENT,
  Exam_Type varchar(100) NOT NULL,
  Exam_Duration integer COMMENT 'Duration in minutes',
  Exam_Total_Marks integer
);

CREATE TABLE Questions (
  Question_ID integer PRIMARY KEY AUTO_INCREMENT,
  Question_Text text NOT NULL
);

CREATE TABLE Students_Academic_Program (
  Student_ID integer,
  Academic_Program varchar(255),
  PRIMARY KEY (Student_ID, Academic_Program)
);

ALTER TABLE Students_Academic_Program ADD FOREIGN KEY (Student_ID) REFERENCES Students (Student_ID) ON DELETE CASCADE;

CREATE TABLE Questions_Level (
  Question_ID integer,
  Question_Level varchar(100),
  PRIMARY KEY (Question_ID, Question_Level)
);

ALTER TABLE Questions_Level ADD FOREIGN KEY (Question_ID) REFERENCES Questions (Question_ID) ON DELETE CASCADE;

CREATE TABLE Course_Professor (
  Crs_ID integer,
  Prof_ID integer,
  Scientific_Degree varchar(100),
  Level varchar(100),
  PRIMARY KEY (Crs_ID, Prof_ID)
);

ALTER TABLE Course_Professor ADD FOREIGN KEY (Crs_ID) REFERENCES Courses (Course_ID) ON DELETE CASCADE;
ALTER TABLE Course_Professor ADD FOREIGN KEY (Prof_ID) REFERENCES Professors (Professor_ID) ON DELETE CASCADE;

CREATE TABLE Student_Professor_Evaluation (
  Std_ID integer,
  Prof_ID integer,
  Rating decimal(3,2) COMMENT 'Rating out of 5.00',
  Comments text,
  PRIMARY KEY (Std_ID, Prof_ID)
);

ALTER TABLE Student_Professor_Evaluation ADD FOREIGN KEY (Std_ID) REFERENCES Students (Student_ID) ON DELETE CASCADE;
ALTER TABLE Student_Professor_Evaluation ADD FOREIGN KEY (Prof_ID) REFERENCES Professors (Professor_ID) ON DELETE CASCADE;

CREATE TABLE Student_Course_Evaluation (
  Std_ID integer,
  Crs_ID integer,
  Rating decimal(3,2) COMMENT 'Rating out of 5.00',
  Comments text,
  PRIMARY KEY (Std_ID, Crs_ID)
);

ALTER TABLE Student_Course_Evaluation ADD FOREIGN KEY (Std_ID) REFERENCES Students (Student_ID) ON DELETE CASCADE;
ALTER TABLE Student_Course_Evaluation ADD FOREIGN KEY (Crs_ID) REFERENCES Courses (Course_ID) ON DELETE CASCADE;

CREATE TABLE Professor_Exam_Question (
  Prof_ID integer,
  Exam_ID integer,
  Ques_ID integer,
  PRIMARY KEY (Prof_ID, Exam_ID, Ques_ID)
);

ALTER TABLE Professor_Exam_Question ADD FOREIGN KEY (Prof_ID) REFERENCES Professors (Professor_ID) ON DELETE CASCADE;
ALTER TABLE Professor_Exam_Question ADD FOREIGN KEY (Exam_ID) REFERENCES Exams (Exam_ID) ON DELETE CASCADE;
ALTER TABLE Professor_Exam_Question ADD FOREIGN KEY (Ques_ID) REFERENCES Questions (Question_ID) ON DELETE CASCADE;

CREATE TABLE Student_Course_Exam (
  Std_ID integer,
  Crs_ID integer,
  Exam_ID integer,
  Username varchar(255) UNIQUE COMMENT 'Unique username for the exam instance',
  Password varchar(255) COMMENT 'Hashed password for security',
  PRIMARY KEY (Std_ID, Crs_ID, Exam_ID)
);

ALTER TABLE Student_Course_Exam ADD FOREIGN KEY (Std_ID) REFERENCES Students (Student_ID) ON DELETE CASCADE;
ALTER TABLE Student_Course_Exam ADD FOREIGN KEY (Crs_ID) REFERENCES Courses (Course_ID) ON DELETE CASCADE;
ALTER TABLE Student_Course_Exam ADD FOREIGN KEY (Exam_ID) REFERENCES Exams (Exam_ID) ON DELETE CASCADE;

ALTER TABLE Student_Course_Exam
ADD COLUMN Score DECIMAL(5,2) DEFAULT 0.00;
