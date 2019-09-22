/*
SQLyog Enterprise v13.1.1 (32 bit)
MySQL - 5.7.24 : Database - capil
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`capil` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `capil`;

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values 
(8,'2019_08_19_000000_create_failed_jobs_table',3),
(9,'2019_09_22_090844_create_navigation_table',4),
(11,'2014_10_12_000000_create_users_table',5),
(12,'2014_10_12_100000_create_password_resets_table',5),
(13,'2016_06_01_000001_create_oauth_auth_codes_table',5),
(14,'2016_06_01_000002_create_oauth_access_tokens_table',5),
(15,'2016_06_01_000003_create_oauth_refresh_tokens_table',5),
(16,'2016_06_01_000004_create_oauth_clients_table',5),
(17,'2016_06_01_000005_create_oauth_personal_access_clients_table',5),
(18,'2019_09_22_102518_create_navigation_table',5),
(19,'2019_09_22_105315_create_navigation_table',6),
(20,'2019_09_22_105619_create_navigation_table',7);

/*Table structure for table `navigation` */

DROP TABLE IF EXISTS `navigation`;

CREATE TABLE `navigation` (
  `NavigationId` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `NavigationName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NavigationTitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NavigationUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NavigationParam` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NavigationComponent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`NavigationId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `navigation` */

insert  into `navigation`(`NavigationId`,`NavigationName`,`NavigationTitle`,`NavigationUrl`,`NavigationParam`,`NavigationComponent`,`created_at`,`updated_at`) values 
(1,'Dashboard','Dashboard','/dasboard',NULL,'../dashboard/Dasboard',NULL,NULL);

/*Table structure for table `oauth_access_tokens` */

DROP TABLE IF EXISTS `oauth_access_tokens`;

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_access_tokens` */

insert  into `oauth_access_tokens`(`id`,`user_id`,`client_id`,`name`,`scopes`,`revoked`,`created_at`,`updated_at`,`expires_at`) values 
('08c199c5f652f54a1952e5c50aa57d0f17c2e39705db737b277f6ae54bb70d0b3d38576945044bc1',2,1,'MyApp','[]',0,'2019-09-22 14:10:17','2019-09-22 14:10:17','2020-09-22 14:10:17'),
('1d96840c28d7ee884da5c2e656bdf1444a7c7679c794818f2f45dab2d692c1720a7e2b001214ff85',3,1,'MyApp','[]',0,'2019-09-22 12:00:21','2019-09-22 12:00:21','2020-09-22 12:00:21'),
('24f5eac6d3a48798f8cbad498698b99728dcd18609b61c42ede3b70bc3151ea51ccfe67beb3a7751',2,1,'MyApp','[]',0,'2019-09-22 12:00:38','2019-09-22 12:00:38','2020-09-22 12:00:38'),
('8edd0e4315d88d70b1f243c6c2b8c487a98a6dfbcc8827befea22c1b5bd922f93563175c89cc798e',2,1,'MyApp','[]',0,'2019-09-22 11:59:55','2019-09-22 11:59:55','2020-09-22 11:59:55'),
('d5a7075d85cb0c6a4cdd5b5f130cad72a245f89834b2ea07666ce910ace46c17c172b618413f217f',2,1,'MyApp','[]',0,'2019-09-22 11:59:37','2019-09-22 11:59:37','2020-09-22 11:59:37');

/*Table structure for table `oauth_auth_codes` */

DROP TABLE IF EXISTS `oauth_auth_codes`;

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_auth_codes` */

/*Table structure for table `oauth_clients` */

DROP TABLE IF EXISTS `oauth_clients`;

CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_clients` */

insert  into `oauth_clients`(`id`,`user_id`,`name`,`secret`,`redirect`,`personal_access_client`,`password_client`,`revoked`,`created_at`,`updated_at`) values 
(1,NULL,'Laravel Personal Access Client','4sjC9mzkykjPuYy11GrZSyG4xzCY6pBf8djutpMn','http://localhost',1,0,0,'2019-09-22 11:59:26','2019-09-22 11:59:26'),
(2,NULL,'Laravel Password Grant Client','cM8sUlnWnsQfHXAgOnNeXCGM0as1eiQIhT0GuWbj','http://localhost',0,1,0,'2019-09-22 11:59:27','2019-09-22 11:59:27');

/*Table structure for table `oauth_personal_access_clients` */

DROP TABLE IF EXISTS `oauth_personal_access_clients`;

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_personal_access_clients` */

insert  into `oauth_personal_access_clients`(`id`,`client_id`,`created_at`,`updated_at`) values 
(1,1,'2019-09-22 11:59:26','2019-09-22 11:59:26');

/*Table structure for table `oauth_refresh_tokens` */

DROP TABLE IF EXISTS `oauth_refresh_tokens`;

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_refresh_tokens` */

/*Table structure for table `password_resets` */

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_resets` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`email_verified_at`,`password`,`remember_token`,`created_at`,`updated_at`) values 
(2,'Sahrun','sahrunnawawi995@gmai.com',NULL,'$2y$10$zm8IZ95nBBtWH6Vcw2luw.dll5fJBTGt8eqH3R02csFL/xvxMyW5W',NULL,'2019-09-22 11:24:16','2019-09-22 11:24:16'),
(3,'Sahrun','student@example.com',NULL,'$2y$10$8eE5bsoGDlC2.4SkthMtEu3O6.OYUot7qC/5d1KpWSn4LGHPes9gu',NULL,'2019-09-22 12:00:21','2019-09-22 12:00:21');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
