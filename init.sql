CREATE DATABASE  IF NOT EXISTS `eventdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `eventdb`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: eventdb.cpi0iouyqh2w.us-east-1.rds.amazonaws.com    Database: eventdb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admins`
--

DROP TABLE IF EXISTS `Admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admins` (
  `uid` int NOT NULL,
  PRIMARY KEY (`uid`),
  CONSTRAINT `Admins_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `Users` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `event_id` int NOT NULL,
  `uid` int NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`event_id`,`uid`),
  KEY `uid` (`uid`),
  CONSTRAINT `Comments_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE,
  CONSTRAINT `Comments_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `Users` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Events`
--

DROP TABLE IF EXISTS `Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `uni_id` int DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `desc` varchar(10000) DEFAULT NULL,
  `location_name` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `event_host` varchar(255) DEFAULT NULL,
  `event_phone` varchar(25) DEFAULT NULL,
  `event_email` varchar(255) DEFAULT NULL,
  `event_type` varchar(255) DEFAULT NULL,
  `event_name` varchar(255) DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `RSO_uni_idx` (`uni_id`),
  CONSTRAINT `RSO_uni` FOREIGN KEY (`uni_id`) REFERENCES `Universities` (`uni_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Private_Events`
--

DROP TABLE IF EXISTS `Private_Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Private_Events` (
  `event_id` int NOT NULL,
  `created_by` int NOT NULL,
  KEY `Private_Events_ibfk_2_idx` (`event_id`),
  KEY `Private_Events_ibfk_1_idx` (`created_by`),
  CONSTRAINT `Private_Events_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `Admins` (`uid`) ON DELETE CASCADE,
  CONSTRAINT `Private_Events_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Public_Events`
--

DROP TABLE IF EXISTS `Public_Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Public_Events` (
  `event_id` int NOT NULL,
  `created_by` int NOT NULL,
  PRIMARY KEY (`event_id`,`created_by`),
  KEY `Public_Events_ibfk_1_idx` (`created_by`),
  CONSTRAINT `Public_Events_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `Admins` (`uid`) ON DELETE CASCADE,
  CONSTRAINT `Public_Events_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `RSO`
--

DROP TABLE IF EXISTS `RSO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RSO` (
  `rso_id` int NOT NULL AUTO_INCREMENT,
  `uni_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `desc` varchar(10000) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `number` varchar(25) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `approved` int DEFAULT '1',
  PRIMARY KEY (`rso_id`),
  KEY `created_by` (`created_by`),
  KEY `RSO_ibfk_2_idx` (`uni_id`),
  CONSTRAINT `RSO_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `Admins` (`uid`) ON DELETE CASCADE,
  CONSTRAINT `RSO_ibfk_2` FOREIGN KEY (`uni_id`) REFERENCES `Universities` (`uni_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `RSO_Events`
--

DROP TABLE IF EXISTS `RSO_Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RSO_Events` (
  `event_id` int NOT NULL,
  `owned_by` int NOT NULL,
  `approved` int DEFAULT '1',
  PRIMARY KEY (`event_id`,`owned_by`),
  KEY `owned_by` (`owned_by`),
  CONSTRAINT `RSO_Events_ibfk_1` FOREIGN KEY (`owned_by`) REFERENCES `RSO` (`rso_id`) ON DELETE CASCADE,
  CONSTRAINT `RSO_Events_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `RSO_Users_Joined`
--

DROP TABLE IF EXISTS `RSO_Users_Joined`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RSO_Users_Joined` (
  `rso_id` int NOT NULL,
  `uid` int NOT NULL,
  PRIMARY KEY (`rso_id`,`uid`),
  KEY `RSO_Users_Joined_ibfk_1` (`uid`),
  CONSTRAINT `RSO_Users_Joined_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `Users` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`admin`@`%`*/ /*!50003 TRIGGER `rso_membership_change` AFTER INSERT ON `RSO_Users_Joined` FOR EACH ROW BEGIN
    DECLARE rso_count INT;
    
    SELECT COUNT(*) INTO rso_count
    FROM RSO_Users_Joined
    WHERE rso_id = NEW.rso_id;
    
    IF rso_count >= 5 THEN
        UPDATE RSO
        SET status = 'Active'
        WHERE rso_id = NEW.rso_id;
    ELSE
        UPDATE RSO
        SET status = 'Inactive'
        WHERE rso_id = NEW.rso_id;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`admin`@`%`*/ /*!50003 TRIGGER `rso_membership_change_DELETE` AFTER DELETE ON `RSO_Users_Joined` FOR EACH ROW BEGIN
    DECLARE rso_count INT;
    
    SELECT COUNT(*) INTO rso_count
    FROM RSO_Users_Joined
    WHERE rso_id = OLD.rso_id;
    
    IF rso_count >= 5 THEN
        UPDATE RSO
        SET status = 'Active'
        WHERE rso_id = OLD.rso_id;
    ELSE
        UPDATE RSO
        SET status = 'Inactive'
        WHERE rso_id = OLD.rso_id;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `SuperAdmins`
--

DROP TABLE IF EXISTS `SuperAdmins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SuperAdmins` (
  `uid` int NOT NULL,
  PRIMARY KEY (`uid`),
  CONSTRAINT `SuperAdmins_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `Users` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Universities`
--

DROP TABLE IF EXISTS `Universities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Universities` (
  `uni_id` int NOT NULL AUTO_INCREMENT,
  `uni_name` varchar(255) DEFAULT NULL,
  `desc` varchar(10000) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `NOstudents` int DEFAULT NULL,
  `domain` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uni_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `uni_id` int DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `uni_id` (`uni_id`),
  CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`uni_id`) REFERENCES `Universities` (`uni_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-15 16:48:44
