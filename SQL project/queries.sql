USE university_project;


SELECT 
    p.professor_id,
    p.Professor_name AS professor_name,
    ROUND(AVG(g.score), 2) AS average_grade_given,
    COUNT(g.grade_id) AS total_grades_assigned
FROM professors p
JOIN courses c ON p.professor_id = c.professor_id
JOIN grades g ON c.course_id = g.course_id
GROUP BY p.professor_id, p.Professor_name
ORDER BY average_grade_given DESC;


WITH RankedGrades AS (
    SELECT 
        s.student_id,
        s.student_name,
        c.course_title,
        g.score,
        ROW_NUMBER() OVER (PARTITION BY s.student_id ORDER BY g.score DESC) AS grade_rank
    FROM students s
    JOIN grades g ON s.student_id = g.student_id
    JOIN courses c ON g.course_id = c.course_id
)
SELECT 
    student_id,
    student_name,
    course_title,
    score
FROM RankedGrades
WHERE grade_rank = 1;


SELECT 
    s.student_id,
    s.student_name,
    COUNT(c.course_id) AS total_courses_enrolled,
    GROUP_CONCAT(c.course_title ORDER BY c.course_title SEPARATOR ', ') AS enrolled_courses
FROM students s
LEFT JOIN grades g ON s.student_id = g.student_id
LEFT JOIN courses c ON g.course_id = c.course_id
GROUP BY s.student_id, s.student_name
ORDER BY total_courses_enrolled DESC;


SELECT 
    c.course_id,
    c.course_title,
    p.Professor_name AS professor_name,
    ROUND(AVG(g.score), 2) AS average_course_grade,
    COUNT(g.student_id) AS total_students_enrolled
FROM courses c
JOIN professors p ON c.professor_id = p.professor_id
LEFT JOIN grades g ON c.course_id = g.course_id
GROUP BY c.course_id, c.course_title, p.Professor_name
ORDER BY average_course_grade ASC;


SELECT 
    s.student_name,
    p.Professor_name AS professor_name,
    COUNT(c.course_id) AS courses_in_common
FROM students s
JOIN grades g ON s.student_id = g.student_id
JOIN courses c ON g.course_id = c.course_id
JOIN professors p ON c.professor_id = p.professor_id
GROUP BY s.student_id, s.student_name, p.professor_id, p.Professor_name
ORDER BY courses_in_common DESC
LIMIT 1;