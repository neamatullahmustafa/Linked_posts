-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2024 at 04:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `linked_posts`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `user_id` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `title` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`user_id`, `description`, `title`, `id`, `createdAt`) VALUES
(1, 'descreption', 'title', 1, '2024-11-09 23:19:31'),
(2, 'descreption', 'title', 2, '2024-11-09 23:19:31'),
(3, 'descreption', 'title', 3, '2024-11-09 23:19:31'),
(4, 'descreption', 'title', 4, '2024-11-09 23:19:31'),
(5, 'descreption', 'title', 5, '2024-11-09 23:19:31'),
(6, 'descreption', 'title', 6, '2024-11-09 23:19:31'),
(7, 'descreption', 'title', 7, '2024-11-09 23:19:31'),
(8, 'descreption', 'title', 8, '2024-11-09 23:19:31'),
(1, 'text', 'title', 11, '2024-11-09 23:20:39'),
(1, 'text', 'title', 12, '2024-11-09 23:23:31'),
(1, 'text', 'title', 13, '2024-11-09 23:26:25'),
(1, 'text', 'title', 14, '2024-11-09 23:26:38'),
(1, 'text', 'title', 15, '2024-11-09 23:29:54'),
(1, 'DESC', 'title', 16, '2024-11-10 12:48:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender` tinyint(1) NOT NULL DEFAULT 0,
  `username` varchar(100) NOT NULL,
  `cover` varchar(100) DEFAULT NULL,
  `bio` varchar(500) DEFAULT NULL,
  `profile` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `password`, `name`, `email`, `gender`, `username`, `cover`, `bio`, `profile`) VALUES
(1, '$2b$10$Y.zMVDcP5EFG8VZ2CAQireNvzo9tL8CMmMsOm0cma81s/3/Hb0Bzu', 'noha', 'noha@gmail.com', 0, 'noha', 'https://d2j6dbq0eux0bg.cloudfront.net/images/66610504/2636936256.jpg', 'cool gerl', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0a8931xUEbluolhk--fnC2fAhaRP7ueiZ1Q&s'),
(2, '$2b$10$LWuLHGz/9wjBcvLong.h8.y66hmTG7sbSfzulw9XESpqft8dbloU.', 'mona', 'mona@gmail.com', 0, 'mona', NULL, NULL, NULL),
(3, '$2b$10$1r7v6tt5Yo5P4FTWVoFxRuCbVbWIPlTOg/xtInjx46wCcg20kYil.', 'safwa', 'safwa@gmail.com', 0, 'safwa', NULL, NULL, NULL),
(4, '$2b$10$zHwXhdOSEGJ/HyGcfKF.J.xyZdCVePjIJe3Kj1nxIwFTaLGZV1BIK', 'youmna', 'youmna@gmail.com', 0, 'youmna', NULL, NULL, NULL),
(5, '$2b$10$Gltw9ViL3D.YDtokFrDnk.1jFcc.ltMeXWnPYzaHm9.d8zyqVbIB.', 'sara', 'sara@gmail.com', 0, 'sara', NULL, NULL, NULL),
(6, '$2b$10$5IZb8jilWzWjn6w4HC7D/Os3fCV7bBowYuxTC9p/yAAG3GcXNX9GO', 'nada', 'nada@gmail.com', 0, 'nada', NULL, NULL, NULL),
(7, '$2b$10$snNNsY/INY8/KFIoiwlh6.mNSMkr1BT9LMaIBminS7dBBQ5Yqyky6', 'doha', 'doha@gmail.com', 0, 'doha', NULL, NULL, NULL),
(8, '$2b$10$8vfKqqRvVs8euInoYWT0OuvaWnYcYBTvWpoi3m87U5QA4XGSx4fYe', 'donia', 'donia@gmail.com', 0, 'donia', NULL, NULL, NULL),
(9, '$2b$10$hDBg1BmRMn0v9kSwOZMNtOI747DGc45BhNkRm2nxPplNIVilAo0je', 'maha', 'maha@gmail.com', 0, 'maha', NULL, NULL, NULL),
(10, '$2b$10$hNSUTrrZKrOBUghuP9H2KuM9DLu4NSOj/PV.8T9go/PmoMEpgVnB2', 'Neamatullah abo lila', 'tareqshrouq@gmail.com', 0, 'neama', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Foreign key constraint` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `Foreign key constraint` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
