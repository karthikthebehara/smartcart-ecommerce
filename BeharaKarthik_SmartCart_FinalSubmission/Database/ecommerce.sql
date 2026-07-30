-- ========================================================
-- SmartCart - Full Stack E-Commerce Shopping Website
-- Database DDL Schema & Seed Data Dump (MySQL 8.0+)
-- Author: Behara Karthik (B.Tech Major Project)
-- ========================================================

CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

-- --------------------------------------------------------
-- Table structure for table `user`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` boolean DEFAULT FALSE,
  PRIMARY KEY (`username`),
  UNIQUE KEY `uk_user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table `category`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table `product`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `price` double NOT NULL,
  `weight` double DEFAULT NULL,
  `picture1` varchar(500) DEFAULT NULL,
  `picture2` varchar(500) DEFAULT NULL,
  `picture3` varchar(500) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_category` (`category_id`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table `customer_order`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `customer_order`;
CREATE TABLE `customer_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `order_date` varchar(255) NOT NULL,
  `total_amount` double NOT NULL,
  `status` varchar(255) NOT NULL,
  `shipping_address` varchar(500) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table `order_item`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_id` bigint NOT NULL,
  `product_id` int NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_item_order` (`order_id`),
  CONSTRAINT `fk_order_item_order` FOREIGN KEY (`order_id`) REFERENCES `customer_order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Dumping initial seed data
-- --------------------------------------------------------
INSERT INTO `user` (`username`, `email`, `password`, `is_admin`) VALUES
('karthikbehara2005@gmail.com', 'karthikbehara2005@gmail.com', 'karthik123', true),
('john_doe', 'john@example.com', 'password123', false);

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Men Shirts'),
(2, 'Men T-Shirts');

INSERT INTO `product` (`id`, `name`, `description`, `price`, `weight`, `picture1`, `picture2`, `picture3`, `category_id`) VALUES
(1, 'Casual Shirts', 'Casual Wear For men.', 500, 0.5, 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468900.jpg?auto=format&w=390', 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468901.jpg?auto=format&w=390', 'https://imagescdn.peterengland.com/img/app/product/4/40566359-31468903.jpg?auto=format&w=390', 1),
(2, 'Men Color Block T-shirts Shirt', 'Men Color Block T-shirts Shirt, Half Sleeves, Summer, Casual Half Sleeve Shirt For Outdoor, Gym Wear, Tshirt', 230, 0.2, 'https://images.meesho.com/images/products/480710974/msf9c_512.avif?width=512', 'https://images.meesho.com/images/products/480710974/b0hqp_512.avif?width=512', NULL, 2);

INSERT INTO `customer_order` (`id`, `username`, `order_date`, `total_amount`, `status`, `shipping_address`, `payment_method`) VALUES
(1, 'karthikbehara2005@gmail.com', '2026-07-26T16:01:00Z', 730, 'PENDING', '123 Main St, Apt 4B, New York 10001', 'Credit / Debit Card');

INSERT INTO `order_item` (`id`, `order_id`, `product_id`, `product_name`, `price`, `quantity`) VALUES
(1, 1, 1, 'Casual Shirts', 500, 1),
(2, 1, 2, 'Men Color Block T-shirts Shirt', 230, 1);

COMMIT;
