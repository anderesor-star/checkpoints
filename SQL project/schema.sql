CREATE SCHEMA `university_project` ;

CREATE TABLE `university_project`.`professors` (
  `professor_id` INT NOT NULL AUTO_INCREMENT,
  `Professor_name` VARCHAR(100) NOT NULL,
  `Professor_email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`professor_id`),
  UNIQUE INDEX `professor_id_UNIQUE` (`professor_id` ASC) VISIBLE,
  UNIQUE INDEX `Professor_email_UNIQUE` (`Professor_email` ASC) VISIBLE
);

CREATE TABLE `university_project`.`courses` (
  `course_id` INT NOT NULL AUTO_INCREMENT,
  `course_title` VARCHAR(150) NOT NULL,
  `professor_id` INT NOT NULL,
  PRIMARY KEY (`course_id`),
  UNIQUE INDEX `course_id_UNIQUE` (`course_id` ASC) VISIBLE,
  INDEX `professor_id_idx` (`professor_id` ASC) VISIBLE,
  CONSTRAINT `professor_id`
    FOREIGN KEY (`professor_id`)
    REFERENCES `university_project`.`professors` (`professor_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE `university_project`.`students` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `student_name` VARCHAR(100) NOT NULL,
  `student_email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE INDEX `student_id_UNIQUE` (`student_id` ASC) VISIBLE,
  UNIQUE INDEX `student_email_UNIQUE` (`student_email` ASC) VISIBLE
);

CREATE TABLE `university_project`.`grades` (
  `grade_id` INT NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `course_id` INT NOT NULL,
  `score` DECIMAL(5,2) NOT NULL,
  `professor_id` INT NOT NULL,
  PRIMARY KEY (`grade_id`),
  UNIQUE INDEX `grade_id_UNIQUE` (`grade_id` ASC) VISIBLE,
  INDEX `student_id_idx` (`student_id` ASC) VISIBLE,
  INDEX `course_id_idx` (`course_id` ASC) VISIBLE,
  INDEX `professor_id_idx` (`professor_id` ASC) VISIBLE,
  CONSTRAINT `student_id`
    FOREIGN KEY (`student_id`)
    REFERENCES `university_project`.`students` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `course_id`
    FOREIGN KEY (`course_id`)
    REFERENCES `university_project`.`courses` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `professor_id_grade`
    FOREIGN KEY (`professor_id`)
    REFERENCES `university_project`.`professors` (`professor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);