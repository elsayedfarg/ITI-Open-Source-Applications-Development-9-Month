-- ============================================
-- COMPLETE DATA INSERTION SCRIPT
-- ITI Zagazig Branch Database
-- ============================================

-- Insert Departments
INSERT INTO `Departments` (`Department_Name`, `Department_Desc`) VALUES
('Information Technology', 'Focuses on software development, databases, and web technologies'),
('Computer Science', 'Covers algorithms, data structures, and theoretical computer science'),
('Network Administration', 'Specializes in network infrastructure and security'),
('Artificial Intelligence', 'Studies machine learning, deep learning, and AI applications');

-- Insert Professors
INSERT INTO `Professors` (`Professor_Name`, `Dep_ID`) VALUES
('Dr. Ahmed Mohamed', 1),
('Dr. Fatma Hassan', 1),
('Dr. Mohamed Ali', 2),
('Dr. Noha Mahmoud', 2),
('Dr. Khaled Ibrahim', 3),
('Dr. Aya Samir', 3),
('Dr. Omar Youssef', 4),
('Dr. Mona Salah', 4),
('Dr. Hassan Abdel-Rahman', 1),
('Dr. Rania Fathy', 2);

-- Insert Students
INSERT INTO `Students` (`Student_Name`, `Student_Level`, `Student_Gender`) VALUES
('Ahmed Khaled', 'Third Year', 'Male'),
('Fatma Ali', 'Second Year', 'Female'),
('Mohamed Hassan', 'Third Year', 'Male'),
('Nour Ibrahim', 'First Year', 'Female'),
('Ali Mahmoud', 'Third Year', 'Male'),
('Heba Samir', 'Second Year', 'Female'),
('Omar Youssef', 'First Year', 'Male'),
('Mariam Ahmed', 'Third Year', 'Female'),
('Youssef Mohamed', 'Second Year', 'Male'),
('Sara Hassan', 'First Year', 'Female'),
('Mahmoud Khaled', 'Third Year', 'Male'),
('Rana Ali', 'Second Year', 'Female'),
('Ibrahim Mohamed', 'Third Year', 'Male'),
('Nada Hassan', 'First Year', 'Female'),
('Khaled Youssef', 'Second Year', 'Male'),
('Salma Mahmoud', 'Third Year', 'Female'),
('Amr Ibrahim', 'First Year', 'Male'),
('Dina Ahmed', 'Second Year', 'Female'),
('Tarek Ali', 'Third Year', 'Male'),
('Layla Mohamed', 'First Year', 'Female'),
('Hassan Khaled', 'Second Year', 'Male'),
('Nadia Hassan', 'Third Year', 'Female'),
('Sherif Youssef', 'First Year', 'Male'),
('Yasmin Ali', 'Second Year', 'Female'),
('Adel Mohamed', 'Third Year', 'Male');

-- Insert Academic Programs
INSERT INTO `Students_Academic_Program` (`Student_ID`, `Academic_Program`) VALUES
(1, 'Software Development'),
(2, 'Web Development'),
(3, 'Database Administration'),
(4, 'Software Development'),
(5, 'Network Security'),
(6, 'Web Development'),
(7, 'Software Development'),
(8, 'Artificial Intelligence'),
(9, 'Database Administration'),
(10, 'Web Development'),
(11, 'Network Security'),
(12, 'Software Development'),
(13, 'Artificial Intelligence'),
(14, 'Web Development'),
(15, 'Database Administration'),
(16, 'Software Development'),
(17, 'Network Security'),
(18, 'Web Development'),
(19, 'Artificial Intelligence'),
(20, 'Software Development'),
(21, 'Database Administration'),
(22, 'Web Development'),
(23, 'Software Development'),
(24, 'Artificial Intelligence'),
(25, 'Network Security');

-- Insert Courses
INSERT INTO `Courses` (`Course_Name`, `Course_Desc`, `Course_Code`, `Academic_Level`, `Dep_ID`) VALUES
('Database Systems', 'Introduction to relational databases and SQL', 'DB101', 'Second Year', 1),
('Web Development', 'HTML, CSS, JavaScript, and modern frameworks', 'WEB201', 'Second Year', 1),
('Data Structures', 'Arrays, linked lists, trees, and algorithms', 'DS301', 'Third Year', 2),
('Network Security', 'Cybersecurity fundamentals and protocols', 'NS401', 'Third Year', 3),
('Machine Learning', 'Introduction to ML algorithms and applications', 'ML501', 'Third Year', 4),
('Software Engineering', 'SDLC, design patterns, and best practices', 'SE202', 'Second Year', 1),
('Operating Systems', 'Process management, memory, and file systems', 'OS302', 'Third Year', 2),
('Cloud Computing', 'AWS, Azure, and cloud architectures', 'CC403', 'Third Year', 3);

-- Insert Course-Professor relationships
INSERT INTO `Course_Professor` (`Crs_ID`, `Prof_ID`, `Scientific_Degree`, `Level`) VALUES
(1, 1, 'PhD in Database Systems', 'Senior'),
(1, 9, 'Master in Information Systems', 'Junior'),
(2, 2, 'PhD in Web Technologies', 'Senior'),
(3, 3, 'PhD in Computer Science', 'Senior'),
(3, 10, 'Master in Algorithms', 'Junior'),
(4, 5, 'PhD in Network Security', 'Senior'),
(4, 6, 'Master in Cybersecurity', 'Associate'),
(5, 7, 'PhD in Artificial Intelligence', 'Senior'),
(5, 8, 'PhD in Machine Learning', 'Senior'),
(6, 1, 'PhD in Database Systems', 'Senior'),
(7, 3, 'PhD in Computer Science', 'Senior'),
(8, 5, 'PhD in Network Security', 'Senior');

-- Insert Exams
INSERT INTO `Exams` (`Exam_Type`, `Exam_Duration`, `Exam_Total_Marks`) VALUES
('Midterm Exam', 120, 50),
('Final Exam', 180, 100),
('Quiz 1', 30, 20),
('Midterm Exam', 120, 50),
('Final Exam', 180, 100),
('Quiz 1', 30, 20),
('Quiz 2', 30, 20),
('Midterm Exam', 120, 50),
('Final Exam', 180, 100),
('Practical Exam', 90, 40);

-- Insert Questions
INSERT INTO `Questions` (`Question_Text`) VALUES
('What is a primary key in a database?'),
('Explain the difference between INNER JOIN and LEFT JOIN'),
('Write a query to find all students enrolled in Database Systems'),
('What are the main principles of Object-Oriented Programming?'),
('Describe the TCP/IP protocol stack'),
('What is the difference between supervised and unsupervised learning?'),
('Explain the concept of normalization in databases'),
('What is a binary search tree?'),
('Describe the OSI model layers'),
('What is overfitting in machine learning?'),
('Write HTML code for a responsive navigation menu'),
('Explain the concept of closures in JavaScript'),
('What is the difference between HTTP and HTTPS?'),
('Describe the Agile software development methodology'),
('What is a deadlock in operating systems?'),
('Explain the CAP theorem in distributed systems'),
('What is SQL injection and how to prevent it?'),
('Describe the different types of cloud services (IaaS, PaaS, SaaS)'),
('What is the difference between stack and queue?'),
('Explain RESTful API design principles');

-- Insert Question Levels
INSERT INTO `Questions_Level` (`Question_ID`, `Question_Level`) VALUES
(1, 'Beginner'),
(2, 'Intermediate'),
(3, 'Intermediate'),
(4, 'Beginner'),
(5, 'Advanced'),
(6, 'Intermediate'),
(7, 'Intermediate'),
(8, 'Advanced'),
(9, 'Advanced'),
(10, 'Advanced'),
(11, 'Beginner'),
(12, 'Advanced'),
(13, 'Beginner'),
(14, 'Intermediate'),
(15, 'Advanced'),
(16, 'Advanced'),
(17, 'Intermediate'),
(18, 'Intermediate'),
(19, 'Beginner'),
(20, 'Intermediate');

-- Insert Professor-Exam-Question relationships
INSERT INTO `Professor_Exam_Question` (`Prof_ID`, `Exam_ID`, `Ques_ID`) VALUES
(1, 1, 1), (1, 1, 2), (1, 1, 7), (1, 1, 17),
(1, 2, 3), (1, 2, 7), (1, 2, 17),
(2, 3, 11), (2, 3, 12), (2, 3, 13),
(3, 4, 4), (3, 4, 8), (3, 4, 19),
(3, 5, 8), (3, 5, 19),
(5, 6, 5), (5, 6, 13),
(7, 8, 6), (7, 8, 10),
(8, 9, 6), (8, 9, 10),
(5, 10, 16), (5, 10, 18);

-- Insert Student Course Exams with scores
INSERT INTO `Student_Course_Exam` (`Std_ID`, `Crs_ID`, `Exam_ID`, `Username`, `Password`, `Score`) VALUES
-- Database Systems (Course 1) - Midterm
(1, 1, 1, 'ahmed_k_db_mid', 'hashed_pass_1', 45.50),
(3, 1, 1, 'mohamed_h_db_mid', 'hashed_pass_2', 48.00),
(5, 1, 1, 'ali_m_db_mid', 'hashed_pass_3', 42.75),
(9, 1, 1, 'youssef_m_db_mid', 'hashed_pass_4', 38.50),
(11, 1, 1, 'mahmoud_k_db_mid', 'hashed_pass_5', 46.25),
(13, 1, 1, 'ibrahim_m_db_mid', 'hashed_pass_6', 49.00),
(15, 1, 1, 'khaled_y_db_mid', 'hashed_pass_7', 41.00),
(19, 1, 1, 'tarek_a_db_mid', 'hashed_pass_8', 44.50),
(21, 1, 1, 'hassan_k_db_mid', 'hashed_pass_9', 47.75),
(25, 1, 1, 'adel_m_db_mid', 'hashed_pass_10', 43.25),

-- Database Systems (Course 1) - Final
(1, 1, 2, 'ahmed_k_db_final', 'hashed_pass_11', 92.00),
(2, 1, 2, 'fatma_a_db_final', 'hashed_pass_83', 79.50),
(3, 1, 2, 'mohamed_h_db_final', 'hashed_pass_12', 95.50),
(4, 1, 2, 'nour_i_db_final', 'hashed_pass_84', 84.75),
(5, 1, 2, 'ali_m_db_final', 'hashed_pass_13', 88.00),
(6, 1, 2, 'heba_s_db_final', 'hashed_pass_85', 87.25),
(7, 1, 2, 'omar_y_db_final', 'hashed_pass_86', 81.00),
(8, 1, 2, 'mariam_a_db_final', 'hashed_pass_87', 93.50),
(9, 1, 2, 'youssef_m_db_final', 'hashed_pass_14', 78.50),
(10, 1, 2, 'sara_h_db_final', 'hashed_pass_88', 85.75),
(11, 1, 2, 'mahmoud_k_db_final', 'hashed_pass_15', 91.25),
(12, 1, 2, 'rana_a_db_final', 'hashed_pass_89', 89.25),
(13, 1, 2, 'ibrahim_m_db_final', 'hashed_pass_16', 97.00),
(14, 1, 2, 'nada_h_db_final', 'hashed_pass_90', 91.50),
(15, 1, 2, 'khaled_y_db_final', 'hashed_pass_17', 82.00),
(16, 1, 2, 'salma_m_db_final', 'hashed_pass_91', 88.75),
(17, 1, 2, 'amr_i_db_final', 'hashed_pass_92', 83.00),
(18, 1, 2, 'dina_a_db_final', 'hashed_pass_93', 90.25),
(19, 1, 2, 'tarek_a_db_final', 'hashed_pass_18', 89.50),
(20, 1, 2, 'layla_m_db_final', 'hashed_pass_94', 86.50),
(21, 1, 2, 'hassan_k_db_final', 'hashed_pass_19', 94.75),
(22, 1, 2, 'nadia_h_db_final', 'hashed_pass_95', 92.75),
(23, 1, 2, 'sherif_y_db_final', 'hashed_pass_96', 80.00),
(24, 1, 2, 'yasmin_a_db_final', 'hashed_pass_97', 94.25),
(25, 1, 2, 'adel_m_db_final', 'hashed_pass_20', 86.25),

-- Web Development (Course 2) - Quiz
(2, 2, 3, 'fatma_a_web_quiz', 'hashed_pass_21', 18.50),
(6, 2, 3, 'heba_s_web_quiz', 'hashed_pass_22', 19.00),
(10, 2, 3, 'sara_h_web_quiz', 'hashed_pass_23', 17.25),
(12, 2, 3, 'rana_a_web_quiz', 'hashed_pass_24', 16.50),
(14, 2, 3, 'nada_h_web_quiz', 'hashed_pass_25', 19.50),
(18, 2, 3, 'dina_a_web_quiz', 'hashed_pass_26', 18.00),
(20, 2, 3, 'layla_m_web_quiz', 'hashed_pass_27', 17.75),
(22, 2, 3, 'nadia_h_web_quiz', 'hashed_pass_28', 19.25),
(24, 2, 3, 'yasmin_a_web_quiz', 'hashed_pass_29', 18.75),

-- Data Structures (Course 3) - Midterm
(1, 3, 4, 'ahmed_k_ds_mid', 'hashed_pass_30', 44.00),
(3, 3, 4, 'mohamed_h_ds_mid', 'hashed_pass_31', 47.50),
(5, 3, 4, 'ali_m_ds_mid', 'hashed_pass_32', 42.00),
(8, 3, 4, 'mariam_a_ds_mid', 'hashed_pass_33', 45.75),
(11, 3, 4, 'mahmoud_k_ds_mid', 'hashed_pass_34', 48.50),
(13, 3, 4, 'ibrahim_m_ds_mid', 'hashed_pass_35', 46.25),
(16, 3, 4, 'salma_m_ds_mid', 'hashed_pass_36', 43.50),
(19, 3, 4, 'tarek_a_ds_mid', 'hashed_pass_37', 49.00),
(22, 3, 4, 'nadia_h_ds_mid', 'hashed_pass_38', 44.75),
(25, 3, 4, 'adel_m_ds_mid', 'hashed_pass_39', 41.25),

-- Data Structures (Course 3) - Final
(1, 3, 5, 'ahmed_k_ds_final', 'hashed_pass_40', 90.00),
(2, 3, 5, 'fatma_a_ds_final', 'hashed_pass_98', 82.00),
(3, 3, 5, 'mohamed_h_ds_final', 'hashed_pass_41', 96.50),
(4, 3, 5, 'nour_i_ds_final', 'hashed_pass_99', 87.50),
(5, 3, 5, 'ali_m_ds_final', 'hashed_pass_42', 85.00),
(6, 3, 5, 'heba_s_ds_final', 'hashed_pass_100', 89.75),
(7, 3, 5, 'omar_y_ds_final', 'hashed_pass_101', 84.25),
(8, 3, 5, 'mariam_a_ds_final', 'hashed_pass_43', 92.75),
(9, 3, 5, 'youssef_m_ds_final', 'hashed_pass_102', 86.50),
(10, 3, 5, 'sara_h_ds_final', 'hashed_pass_103', 88.00),
(11, 3, 5, 'mahmoud_k_ds_final', 'hashed_pass_44', 98.00),
(12, 3, 5, 'rana_a_ds_final', 'hashed_pass_104', 91.25),
(13, 3, 5, 'ibrahim_m_ds_final', 'hashed_pass_45', 94.25),
(14, 3, 5, 'nada_h_ds_final', 'hashed_pass_105', 93.50),
(15, 3, 5, 'khaled_y_ds_final', 'hashed_pass_106', 85.75),
(16, 3, 5, 'salma_m_ds_final', 'hashed_pass_46', 88.50),
(17, 3, 5, 'amr_i_ds_final', 'hashed_pass_107', 87.00),
(18, 3, 5, 'dina_a_ds_final', 'hashed_pass_108', 92.50),
(19, 3, 5, 'tarek_a_ds_final', 'hashed_pass_47', 99.00),
(20, 3, 5, 'layla_m_ds_final', 'hashed_pass_109', 89.25),
(21, 3, 5, 'hassan_k_ds_final', 'hashed_pass_110', 95.75),
(22, 3, 5, 'nadia_h_ds_final', 'hashed_pass_48', 91.75),
(23, 3, 5, 'sherif_y_ds_final', 'hashed_pass_111', 83.50),
(24, 3, 5, 'yasmin_a_ds_final', 'hashed_pass_112', 96.25),
(25, 3, 5, 'adel_m_ds_final', 'hashed_pass_49', 83.25),

-- Network Security (Course 4) - Quiz
(5, 4, 6, 'ali_m_ns_quiz', 'hashed_pass_50', 17.50),
(11, 4, 6, 'mahmoud_k_ns_quiz', 'hashed_pass_51', 18.75),
(17, 4, 6, 'amr_i_ns_quiz', 'hashed_pass_52', 16.25),
(23, 4, 6, 'sherif_y_ns_quiz', 'hashed_pass_53', 19.00),
(25, 4, 6, 'adel_m_ns_quiz', 'hashed_pass_54', 18.50),

-- Machine Learning (Course 5) - Midterm & Final (continued)
(8, 5, 8, 'mariam_a_ml_mid', 'hashed_pass_55', 43.00),
(13, 5, 8, 'ibrahim_m_ml_mid', 'hashed_pass_56', 46.50),
(19, 5, 8, 'tarek_a_ml_mid', 'hashed_pass_57', 48.00),
(24, 5, 8, 'yasmin_a_ml_mid', 'hashed_pass_58', 44.75),

(8, 5, 9, 'mariam_a_ml_final', 'hashed_pass_59', 87.00),
(13, 5, 9, 'ibrahim_m_ml_final', 'hashed_pass_60', 93.50),
(19, 5, 9, 'tarek_a_ml_final', 'hashed_pass_61', 96.00),
(24, 5, 9, 'yasmin_a_ml_final', 'hashed_pass_62', 90.75),

-- Software Engineering (Course 6) - Midterm & Final
(1, 6, 1, 'ahmed_k_se_mid', 'hashed_pass_63', 44.50),
(9, 6, 1, 'youssef_m_se_mid', 'hashed_pass_64', 46.00),
(15, 6, 1, 'khaled_y_se_mid', 'hashed_pass_65', 43.25),
(21, 6, 1, 'hassan_k_se_mid', 'hashed_pass_66', 47.75),

(1, 6, 2, 'ahmed_k_se_final', 'hashed_pass_67', 89.50),
(9, 6, 2, 'youssef_m_se_final', 'hashed_pass_68', 93.00),
(15, 6, 2, 'khaled_y_se_final', 'hashed_pass_69', 87.25),
(21, 6, 2, 'hassan_k_se_final', 'hashed_pass_70', 95.75),

-- Operating Systems (Course 7) - Midterm & Final
(3, 7, 4, 'mohamed_h_os_mid', 'hashed_pass_71', 42.50),
(11, 7, 4, 'mahmoud_k_os_mid', 'hashed_pass_72', 45.75),
(19, 7, 4, 'tarek_a_os_mid', 'hashed_pass_73', 47.25),
(25, 7, 4, 'adel_m_os_mid', 'hashed_pass_74', 41.00),

(3, 7, 5, 'mohamed_h_os_final', 'hashed_pass_75', 86.50),
(11, 7, 5, 'mahmoud_k_os_final', 'hashed_pass_76', 92.75),
(19, 7, 5, 'tarek_a_os_final', 'hashed_pass_77', 95.25),
(25, 7, 5, 'adel_m_os_final', 'hashed_pass_78', 84.00),

-- Cloud Computing (Course 8) - Practical Exam
(5, 8, 10, 'ali_m_cc_practical', 'hashed_pass_79', 36.50),
(13, 8, 10, 'ibrahim_m_cc_practical', 'hashed_pass_80', 38.75),
(23, 8, 10, 'sherif_y_cc_practical', 'hashed_pass_81', 37.25),
(25, 8, 10, 'adel_m_cc_practical', 'hashed_pass_82', 35.50);

-- Insert Student Professor Evaluations
INSERT INTO `Student_Professor_Evaluation` (`Std_ID`, `Prof_ID`, `Rating`, `Comments`) VALUES
-- Dr. Ahmed Mohamed (Prof 1) - teaches Database Systems (Course 1)
(1, 1, 4.80, 'Excellent professor, explains concepts clearly'),
(3, 1, 4.90, 'Very knowledgeable and helpful'),
(5, 1, 4.50, 'Good teaching style but sometimes moves too fast'),
(9, 1, 4.60, 'Patient and answers all questions'),
(11, 1, 4.85, 'Best database professor I have had'),
(13, 1, 4.95, 'Exceptional teaching skills'),
(15, 1, 4.40, 'Good but needs more practical examples'),
(19, 1, 4.70, 'Very clear explanations'),
(21, 1, 4.75, 'Great professor, highly recommended'),

-- Dr. Hassan Abdel-Rahman (Prof 9) - also teaches Database Systems (Course 1)
(2, 9, 4.20, 'Good but less experienced'),
(4, 9, 4.30, 'Explains well but needs improvement'),
(6, 9, 4.10, 'Decent teaching style'),
(7, 9, 4.00, 'Okay professor'),
(8, 9, 4.25, 'Good effort but could be better'),

-- Dr. Fatma Hassan (Prof 2) - teaches Web Development (Course 2)
(2, 2, 4.95, 'Amazing professor, makes web development fun'),
(6, 2, 4.90, 'Very practical approach to teaching'),
(10, 2, 4.85, 'Excellent hands-on sessions'),
(12, 2, 4.80, 'Great at explaining complex topics'),
(14, 2, 5.00, 'Perfect teaching style'),
(18, 2, 4.88, 'Very helpful and supportive'),
(20, 2, 4.92, 'Best web development instructor'),
(22, 2, 4.87, 'Outstanding teaching quality'),
(24, 2, 4.93, 'Inspiring and knowledgeable'),

-- Dr. Mohamed Ali (Prof 3) - teaches Data Structures (Course 3)
(1, 3, 4.70, 'Challenging but rewarding course'),
(3, 3, 4.80, 'Very thorough in explanations'),
(5, 3, 4.60, 'Good professor, tough exams'),
(8, 3, 4.75, 'Excellent at teaching algorithms'),
(11, 3, 4.85, 'Makes difficult concepts understandable'),
(13, 3, 4.65, 'Good teaching but fast-paced'),
(16, 3, 4.70, 'Very knowledgeable professor'),
(19, 3, 4.90, 'Outstanding teaching quality'),
(22, 3, 4.55, 'Good but sometimes unclear'),
(25, 3, 4.60, 'Solid teaching approach'),

-- Dr. Rania Fathy (Prof 10) - also teaches Data Structures (Course 3)
(2, 10, 4.40, 'Good professor but less engaging'),
(4, 10, 4.35, 'Decent explanations'),
(6, 10, 4.30, 'Could improve presentation skills'),
(7, 10, 4.45, 'Good knowledge but delivery needs work'),
(9, 10, 4.50, 'Helpful during office hours'),

-- Dr. Khaled Ibrahim (Prof 5) - teaches Network Security (Course 4)
(5, 5, 4.85, 'Expert in network security'),
(11, 5, 4.90, 'Very practical and industry-focused'),
(17, 5, 4.80, 'Excellent real-world examples'),
(23, 5, 4.75, 'Great hands-on labs'),
(25, 5, 4.88, 'Best security professor'),

-- Dr. Aya Samir (Prof 6) - also teaches Network Security (Course 4)
(1, 6, 4.55, 'Good professor, modern teaching methods'),
(3, 6, 4.60, 'Engaging lectures'),
(7, 6, 4.50, 'Clear explanations'),
(9, 6, 4.65, 'Very approachable'),

-- Dr. Omar Youssef (Prof 7) - teaches Machine Learning (Course 5)
(8, 7, 4.92, 'Brilliant professor, cutting-edge knowledge'),
(13, 7, 4.88, 'Makes AI concepts easy to grasp'),
(19, 7, 4.95, 'Outstanding research background'),
(24, 7, 4.85, 'Very inspiring instructor'),

-- Dr. Mona Salah (Prof 8) - also teaches Machine Learning (Course 5)
(1, 8, 4.80, 'Excellent practical projects'),
(3, 8, 4.75, 'Good balance of theory and practice'),
(5, 8, 4.85, 'Very supportive and helpful'),
(11, 8, 4.78, 'Great teaching style'),

-- Additional evaluations for different students/professors
(2, 1, 4.65, 'Good at teaching software principles'),
(4, 1, 4.70, 'Practical examples from industry'),
(6, 1, 4.55, 'Clear methodology teaching'),
(7, 1, 4.75, 'Excellent project guidance'),
(10, 1, 4.68, 'Well-organized lectures'),
(12, 1, 4.72, 'Very approachable professor'),

(10, 9, 4.15, 'Needs more experience'),
(12, 9, 4.22, 'Improving over time'),
(14, 9, 4.18, 'Good but could be better'),
(16, 9, 4.28, 'Decent teaching approach'),

(12, 10, 4.48, 'Good at problem solving'),
(14, 10, 4.42, 'Helpful with assignments'),
(17, 10, 4.52, 'Patient instructor'),
(18, 10, 4.46, 'Good teaching style');

-- Insert Student Course Evaluations
INSERT INTO `Student_Course_Evaluation` (`Std_ID`, `Crs_ID`, `Rating`, `Comments`) VALUES
-- Database Systems (Course 1)
(1, 1, 4.70, 'Very useful course, learned a lot about databases'),
(2, 1, 4.45, 'Good introductory database course'),
(3, 1, 4.85, 'Essential knowledge for any developer'),
(4, 1, 4.55, 'Useful for understanding SQL'),
(5, 1, 4.50, 'Good course but heavy workload'),
(6, 1, 4.60, 'Well-paced learning'),
(9, 1, 4.40, 'Interesting content, challenging assignments'),
(11, 1, 4.80, 'Excellent course structure'),
(13, 1, 4.90, 'Best course in the curriculum'),
(15, 1, 4.35, 'Good but needs more hands-on practice'),
(19, 1, 4.65, 'Very practical and applicable'),
(21, 1, 4.75, 'Well organized course'),
(25, 1, 4.55, 'Solid foundation in databases'),

-- Web Development (Course 2)
(2, 2, 4.90, 'Amazing course, learned modern web technologies'),
(6, 2, 4.85, 'Very practical and up-to-date'),
(7, 2, 4.78, 'Great web frameworks coverage'),
(8, 2, 4.83, 'Modern and relevant'),
(10, 2, 4.80, 'Great hands-on projects'),
(12, 2, 4.75, 'Enjoyable and useful'),
(14, 2, 4.95, 'Perfect balance of theory and practice'),
(18, 2, 4.88, 'Excellent course content'),
(20, 2, 4.82, 'Very relevant to industry needs'),
(22, 2, 4.92, 'Best web development course'),
(24, 2, 4.87, 'Comprehensive and well-taught'),

-- Data Structures (Course 3)
(1, 3, 4.60, 'Challenging but rewarding'),
(3, 3, 4.75, 'Fundamental knowledge for programming'),
(4, 3, 4.48, 'Challenging algorithms'),
(5, 3, 4.45, 'Difficult but necessary'),
(8, 3, 4.70, 'Good course, tough assignments'),
(11, 3, 4.80, 'Very important for interviews'),
(13, 3, 4.55, 'Good content, fast-paced'),
(16, 3, 4.65, 'Solid course structure'),
(19, 3, 4.85, 'Excellent preparation for advanced topics'),
(22, 3, 4.50, 'Good but could use more examples'),
(25, 3, 4.40, 'Challenging course'),

-- Network Security (Course 4)
(5, 4, 4.80, 'Very relevant in today\'s world'),
(7, 4, 4.72, 'Good security fundamentals'),
(11, 4, 4.85, 'Excellent practical labs'),
(17, 4, 4.75, 'Great industry insights'),
(23, 4, 4.70, 'Interesting and practical'),
(25, 4, 4.82, 'Essential cybersecurity knowledge'),

-- Machine Learning (Course 5)
(8, 5, 4.88, 'Cutting-edge content, excellent course'),
(10, 5, 4.76, 'Fascinating AI concepts'),
(12, 5, 4.84, 'Great ML projects'),
(13, 5, 4.82, 'Great introduction to AI'),
(19, 5, 4.92, 'Best course I\'ve taken'),
(24, 5, 4.80, 'Very interesting and practical'),

-- Software Engineering (Course 6)
(1, 6, 4.65, 'Good overview of software development lifecycle'),
(9, 6, 4.70, 'Practical project management skills'),
(14, 6, 4.58, 'Useful SDLC knowledge'),
(15, 6, 4.60, 'Useful for career preparation'),
(16, 6, 4.67, 'Good agile methodology'),
(21, 6, 4.75, 'Well-structured course'),

-- Operating Systems (Course 7)
(3, 7, 4.55, 'Complex but fundamental'),
(11, 7, 4.68, 'Important low-level concepts'),
(17, 7, 4.52, 'Important OS concepts'),
(18, 7, 4.64, 'Good system understanding'),
(19, 7, 4.72, 'Challenging and informative'),
(25, 7, 4.50, 'Good theoretical foundation'),

-- Cloud Computing (Course 8)
(5, 8, 4.78, 'Very modern and industry-relevant'),
(13, 8, 4.85, 'Excellent hands-on with AWS'),
(20, 8, 4.73, 'Practical cloud skills'),
(22, 8, 4.81, 'Modern infrastructure knowledge'),
(23, 8, 4.80, 'Great practical experience'),
(25, 8, 4.75, 'Important for cloud careers');