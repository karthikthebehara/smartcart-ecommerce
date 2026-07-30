-- ========================================================
-- SmartCart - Full Stack E-Commerce Shopping Website
-- Database DDL Schema & Seed Data Export (MySQL 8.0+)
-- Generated for Production & Railway MySQL Deployment
-- Developer: Behara Karthik (B.Tech Major Project 2025-2026)
-- ========================================================

SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--
CREATE DATABASE IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `ecommerce`;

-- --------------------------------------------------------
-- Table structure for table `user`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `uk_user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--
INSERT INTO `user` (`username`, `email`, `password`, `is_admin`) VALUES
('karthikbehara2005@gmail.com', 'karthikbehara2005@gmail.com', 'karthik123', 1),
('john_doe', 'john@example.com', 'password123', 0);

-- --------------------------------------------------------
-- Table structure for table `category`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_category_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--
INSERT INTO `category` (`id`, `name`, `picture`) VALUES
(1, 'Men Shirts', 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468900.jpg'),
(2, 'Men T-Shirts', 'https://images.meesho.com/images/products/480710974/msf9c_512.avif');

-- --------------------------------------------------------
-- Table structure for sequence `category_seq` (Hibernate Compatibility)
-- --------------------------------------------------------
DROP TABLE IF EXISTS `category_seq`;
CREATE TABLE IF NOT EXISTS `category_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `category_seq` (`next_val`) VALUES (100);

-- --------------------------------------------------------
-- Table structure for table `product`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `weight` double NOT NULL DEFAULT '0',
  `price` double NOT NULL,
  `picture1` varchar(500) DEFAULT NULL,
  `picture2` varchar(500) DEFAULT NULL,
  `picture3` varchar(500) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_category` (`category_id`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--
INSERT INTO `product` (`id`, `name`, `description`, `weight`, `price`, `picture1`, `picture2`, `picture3`, `category_id`) VALUES
(1, 'Casual Shirts', 'Casual Wear For men.', 0.5, 500, 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468900.jpg?auto=format&w=390', 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468901.jpg?auto=format&w=390', 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468903.jpg?auto=format&w=390', 1),
(2, 'Men Color Block T-shirts Shirt', 'Men Color Block T-shirts Shirt, Half Sleeves, Summer, Casual Half Sleeve Shirt For Outdoor, Gym Wear, Tshirt', 0.2, 230, 'https://images.meesho.com/images/products/480710974/msf9c_512.avif?width=512', 'https://images.meesho.com/images/products/480710974/b0hqp_512.avif?width=512', NULL, 2);

-- --------------------------------------------------------
-- Table structure for sequence `product_seq` (Hibernate Compatibility)
-- --------------------------------------------------------
DROP TABLE IF EXISTS `product_seq`;
CREATE TABLE IF NOT EXISTS `product_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `product_seq` (`next_val`) VALUES (100);

-- --------------------------------------------------------
-- Table structure for table `customer_order`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `customer_order`;
CREATE TABLE IF NOT EXISTS `customer_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `order_date` varchar(255) DEFAULT NULL,
  `total_amount` double NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `shipping_address` varchar(500) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_customer_order_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customer_order`
--
INSERT INTO `customer_order` (`id`, `username`, `order_date`, `total_amount`, `status`, `shipping_address`, `payment_method`) VALUES
(1, 'karthikbehara2005@gmail.com', '2026-07-26T16:01:00Z', 730, 'PENDING', '123 Main St, Apt 4B, New York 10001', 'Credit / Debit Card');

-- --------------------------------------------------------
-- Table structure for table `order_item`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE IF NOT EXISTS `order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_id` bigint DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_item_customer_order` (`order_id`),
  CONSTRAINT `fk_order_item_customer_order` FOREIGN KEY (`order_id`) REFERENCES `customer_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order_item`
--
INSERT INTO `order_item` (`id`, `order_id`, `product_id`, `product_name`, `price`, `quantity`, `picture`) VALUES
(1, 1, 1, 'Casual Shirts', 500, 1, 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468900.jpg'),
(2, 1, 2, 'Men Color Block T-shirts Shirt', 230, 1, 'https://images.meesho.com/images/products/480710974/msf9c_512.avif');

SET FOREIGN_KEY_CHECKS = 1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
