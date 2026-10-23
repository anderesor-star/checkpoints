INSERT INTO Professors (professor_name, professor_email) VALUES 
('Dr. Alan Turing', 'turing@university.edu'),
('Dra. Ada Lovelace', 'lovelace@university.edu'),
('Dr. Edsger Dijkstra', 'dijkstra@university.edu');

INSERT INTO Courses (course_title, professor_id) VALUES 
('Estructuras de Datos', 1),
('Algoritmos Avanzados', 1),
('Inteligencia Artificial', 2),
('Arquitectura de Computadores', 3),
('Bases de Datos Relacionales', 2);

INSERT INTO Students (student_name, student_email) VALUES 
('Carlos Santana', 'carlos@student.edu'),
('Lucía Mendoza', 'lucia@student.edu'),
('Mateo Fernández', 'mateo@student.edu'),
('Sofía Gómez', 'sofia@student.edu');

INSERT INTO grades (student_id, course_id, score, professor_id) VALUES  
(1, 1, 85.50, 1), (1, 2, 92.00, 1), 
(1, 3, 78.00, 2), (2, 1, 95.00, 1), 
(2, 3, 88.50, 2), (2, 5, 96.00, 2), 
(3, 2, 65.00, 1), (3, 4, 70.00, 3), 
(3, 5, 82.00, 2), (4, 1, 90.00, 1), 
(4, 4, 88.00, 3), (4, 5, 94.50, 2), (4, 2, 91.00, 1);