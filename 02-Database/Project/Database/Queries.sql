-- Question 1
select s.Student_Name,c.Course_Name,sce.Score,e.Exam_Type
from Students s join Student_Course_Exam sce
on s.Student_ID=sce.Std_ID
join Courses c 
on sce.Crs_ID=c.Course_ID
join Exams e
on e.Exam_ID=sce.Exam_ID
where e.Exam_Type like 'F%'
order by s.Student_Name Desc;

-- Question 2
SELECT 
    s.Student_Name, 
    c.Course_Name AS Item_Name, 
    sce.Rating AS Evaluation,
    'Course' AS Evaluation_Type
FROM Courses c
JOIN Student_Course_Evaluation sce ON c.Course_ID = sce.Crs_ID
JOIN Students s ON sce.Std_ID = s.Student_ID

UNION ALL

SELECT 
    s.Student_Name, 
    p.Professor_Name AS Item_Name, 
    spe.Rating AS Evaluation,
    'Professor' AS Evaluation_Type
FROM Professors p
JOIN Student_Professor_Evaluation spe ON p.Professor_ID = spe.Prof_ID
JOIN Students s ON spe.Std_ID = s.Student_ID
ORDER BY Student_Name, Evaluation_Type;

-- Question 3
select c.Course_Name,s.Student_Name,sce.Score,e.Exam_Type
from Students s join Student_Course_Exam sce
on s.Student_ID=sce.Std_ID
join Courses c 
on sce.Crs_ID=c.Course_ID
join Exams e
on e.Exam_ID=sce.Exam_ID
where e.Exam_Type like 'F%' and c.Course_ID=1
order by sce.Score Desc
LIMIT 10; 

-- Question 4
select c.Course_Name,p.Professor_Name,spe.Rating
from Courses c join Course_Professor cp
on c.Course_ID = cp.Crs_ID
join Professors p
on p.Professor_ID=cp.Prof_ID
join Student_Professor_Evaluation spe 
on spe.Prof_ID=p.Professor_ID
where c.Course_ID=1
order by spe.Rating DESC
limit 1;
