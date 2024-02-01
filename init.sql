CREATE DATABASE `databaseProj`; 
USE `databaseProj`;
-- Create database that will hold user credentials--
CREATE TABLE `creds` (
  `user_id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `university` varchar(255),
  `rso` varchar(255),
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Create database that will hold event info -- avoiding using "event" as thats keyword
CREATE TABLE `eventsinfo` ( 
  `event_id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `time` time(50) NOT NULL, 
  `date` date NOT NULL,
  `location` varchar(255) NOT NULL, -- we have to set this with a google map or something?
  `contact_phone` varchar(22) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `rso` varchar(255), -- either relate to rso or be null/public
  `university` varchar(255) NOT NULL, -- relate to university that created it
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Create database that will hold university--
CREATE TABLE `university` (
  `uni_id` int(255) NOT NULL,
  `owner` varchar(255) NOT NULL AUTO_INCREMENT, -- will relate to the id of user that created the university?--
  `location` varchar(255) NOT NULL,
  `amt_students` varchar(255) NOT NULL,
  -- we can add extra here, like contact info and such.
PRIMARY KEY (`uni_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `comment` (
  `comment_id` int(255) NOT NULL  AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL, -- RELATE TO USER THAT POSTED
  `event_id` varchar(255) NOT NULL, -- This will relate to the event its posted on--
  `content` varchar(255) NOT NULL,
  `rating` int(255) NOT NULL,
  `time` time(50) NOT NULL,  -- optional, date and time of comment creation?
  `date` date NOT NULL,
  PRIMARY KEY (`comment_id`, `event_id`, `user_id`),
  FOREIGN KEY (`event_id`) references eventinfo ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) references creds ON DELETE CASCADE 
  -- "Cascade" deletes the comment if either the event or user is deleted.
  
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `RSO` (
  `rso_id` int(255) NOT NULL,
  `rso` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL AUTO_INCREMENT, -- will relate to the id of user that created the rso maybe?--
-- probably more info needed her
PRIMARY KEY (`rso_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
