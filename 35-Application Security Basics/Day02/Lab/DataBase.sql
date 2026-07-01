CREATE DATABASE school_db;
USE school_db;

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coursid VARCHAR(10) NOT NULL,
    coursename VARCHAR(100) NOT NULL
);

INSERT INTO courses (coursid, coursename) VALUES 
('CS101', 'Introduction to Computer Science'),
('SEC202', 'Web Application Security'),
('DB303', 'Database Management Systems');