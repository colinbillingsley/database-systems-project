-- DROP schema `eventdb`; for testing purposes
CREATE DATABASE `eventdb`;

USE `eventdb`;

   CREATE TABLE `Universities` (
  `uni_id` int NOT NULL AUTO_INCREMENT,
  `uni_name` varchar(255),
  `desc` varchar(10000) ,
  `location` varchar(255),
  `NOstudents` int,
  `domain` varchar(255),  
  PRIMARY KEY (`uni_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  CREATE TABLE `Users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `role` varchar(255),
  `email` varchar(255),
  `uni_id` int,
  PRIMARY KEY (`uid`),
  FOREIGN KEY (uni_id) references Universities(uni_id) ON DELETE CASCADE
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
  `location_name` varchar(255),
  `date` DATE,
  `category` varchar(255),
  `event_host` varchar(255),
  `event_phone` varchar(25),
  `event_email` varchar(255),
  `event_name` varchar(255),
  `longitude` varchar(255),
  `latitude` varchar(255),
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 
    CREATE TABLE `RSO` (
  `rso_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `created_by` int,
  `type` varchar(255),
  `desc` varchar(10000),
  `email` varchar(255),
  `number` varchar(25),
  `status` varchar(255),
  `approved` INT,
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
   `approved` INT,
  PRIMARY KEY (event_id, owned_by),
  FOREIGN KEY (owned_by) references RSO(rso_id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) references Events(event_id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

   CREATE TABLE `Private_Events` (
  `event_id` int NOT NULL,
  `created_by` int,
  PRIMARY KEY (event_id, created_by),
  FOREIGN KEY (created_by) references Admins(uid) ON DELETE CASCADE,
  FOREIGN KEY (event_id) references Events(event_id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

   CREATE TABLE `Public_Events` (
  `event_id` int NOT NULL,
  `created_by` int,
  PRIMARY KEY (event_id, created_by),
  FOREIGN KEY (created_by) references Admins(uid) ON DELETE CASCADE,
  FOREIGN KEY (event_id) references Events(event_id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


   CREATE TABLE `Comments` (
  `event_id` int NOT NULL,
  `uid` int NOT NULL,
  `text` varchar(255),
  `rating` varchar(255),
  `timestamp` datetime,
  PRIMARY KEY (`event_id`, `uid`),
  FOREIGN KEY (`event_id`) references Events(event_id) ON DELETE CASCADE,
  FOREIGN KEY (`uid`) references Users(uid) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


