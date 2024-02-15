-- DROP schema `eventdb`; for testing purposes
CREATE DATABASE `eventdb`; 
USE `eventdb`;
/*
CREATE TABLE `comment` (
  `comment_id` int(255) NOT NULL  AUTO_INCREMENT,
  `user_id` int(255) NOT NULL, -- RELATE TO USER THAT POSTED
  `event_id` int(255) NOT NULL, -- This will relate to the event its posted on--
  `content` varchar(255) NOT NULL,
  `rating` int(255) NOT NULL,
  `time` time(6) NOT NULL,  -- optional, date and time of comment creation?
  `date` date NOT NULL,
  PRIMARY KEY (`comment_id`, `event_id`, `user_id`),
  FOREIGN KEY (`event_id`) references eventsinfo(event_id) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) references creds(user_id) ON DELETE CASCADE
  -- "Cascade" deletes the comment if either the event or user is deleted.
  
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/ 
  CREATE TABLE `Users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  -- THINKING ABT LISTING ROLE HERE
  PRIMARY KEY (`uid`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


  CREATE TABLE `SuperAdmins` (
  `uid` int NOT NULL,
  PRIMARY KEY (uid),
  FOREIGN KEY (uid) references Users(uid) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


  CREATE TABLE `Admins` (
  `uid` int NOT NULL,
  PRIMARY KEY (uid),
  FOREIGN KEY (uid) references Users(uid) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



   CREATE TABLE `Events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `time` time(6) , 
  `desc` varchar(255) ,
  `location` varchar(255),
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 
    CREATE TABLE `RSO` (
  `rso_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `created_by` int,
  PRIMARY KEY (`rso_id`),
  FOREIGN KEY (created_by) references Admins(uid) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    CREATE TABLE `RSO_Users_Joined` (
  `rso_id` int,
  `uid` int,
  PRIMARY KEY (`rso_id`),
  FOREIGN KEY (uid) references Users(uid) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 
   CREATE TABLE `RSO_Events` (
  `event_id` int NOT NULL,
  `owned_by` int NOT NULL,
  PRIMARY KEY (event_id, owned_by),
  FOREIGN KEY (owned_by) references RSO(rso_id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) references Events(event_id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

   CREATE TABLE `Private_Events` (
  `event_id` int NOT NULL,
  `created_by` int,
  PRIMARY KEY (event_id, created_by),
  FOREIGN KEY (created_by) references SuperAdmins(uid) ON DELETE CASCADE,
  FOREIGN KEY (event_id) references Events(event_id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

   CREATE TABLE `Public_Events` (
  `event_id` int NOT NULL,
  `created_by` int,
  PRIMARY KEY (event_id, created_by),
  FOREIGN KEY (created_by) references SuperAdmins(uid) ON DELETE CASCADE,
  FOREIGN KEY (event_id) references Events(event_id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


   CREATE TABLE `comments` (
  `event_id` int NOT NULL,
  `uid` int NOT NULL,
  `text` varchar(255),
  `rating` varchar(255),
  `timestamp` datetime,
  PRIMARY KEY (`event_id`, `uid`),
  FOREIGN KEY (`event_id`) references Events(event_id) ON DELETE CASCADE,
  FOREIGN KEY (`uid`) references Users(uid) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

