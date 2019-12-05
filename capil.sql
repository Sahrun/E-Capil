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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(20,'2019_09_22_105619_create_navigation_table',7),
(21,'2019_10_06_063105_create_warga_table',8);

/*Table structure for table `navigation` */

DROP TABLE IF EXISTS `navigation`;

CREATE TABLE `navigation` (
  `NavigationId` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `NavigationName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NavigationTitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NavigationUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NavigationParam` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `NavigationComponent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`NavigationId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `navigation` */

insert  into `navigation`(`NavigationId`,`NavigationName`,`NavigationTitle`,`icon`,`NavigationUrl`,`NavigationParam`,`NavigationComponent`,`created_at`,`updated_at`) values 
(1,'Dashboard','Dashboard','fas fa-home','/dasboard',NULL,'../dashboard/Dasboard',NULL,NULL),
(2,'Warga','Warga','fas fa-users','/warga',NULL,'../warga/Warga',NULL,NULL);

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
('02c89adcd4c6e49c402378def06b0cc06078663a8aa70b0cd87e2cfac47b97825512a42f4b3bf91c',2,1,'MyApp','[]',0,'2019-10-05 08:37:27','2019-10-05 08:37:27','2020-10-05 08:37:27'),
('041eec6e249bd2bdc22a48ee7e07e8347dbca8f3deb4ba2d3784bd0ce842e4c482bb6e19851494ba',2,1,'MyApp','[]',0,'2019-09-29 14:20:43','2019-09-29 14:20:43','2020-09-29 14:20:43'),
('04e74d750a056e2a9503e15f32635a5b6d12b490eb2f1e9cc2e2ad4ad651d28c05119d32bf265027',2,1,'MyApp','[]',0,'2019-10-06 13:32:37','2019-10-06 13:32:37','2020-10-06 13:32:37'),
('07a1df6664a83e8d3998399156033aa1f0564e0643f339adb5f39e49a83d7bec9e64ea0a32346bbd',2,1,'MyApp','[]',0,'2019-09-29 14:08:39','2019-09-29 14:08:39','2020-09-29 14:08:39'),
('08c199c5f652f54a1952e5c50aa57d0f17c2e39705db737b277f6ae54bb70d0b3d38576945044bc1',2,1,'MyApp','[]',0,'2019-09-22 14:10:17','2019-09-22 14:10:17','2020-09-22 14:10:17'),
('140fb2680823663be59c42c8f1c14a6d9a2ca4799aba6d32bc0dd032c4a30b85e84e55d28f50e7f1',2,1,'MyApp','[]',0,'2019-09-29 16:20:58','2019-09-29 16:20:58','2020-09-29 16:20:58'),
('1ac7c6e38d61f742dde2927174432ba219386f5fb4ab6a87123e194f3a8868ae22a8a4baef273f2f',2,1,'MyApp','[]',0,'2019-10-05 10:35:40','2019-10-05 10:35:40','2020-10-05 10:35:40'),
('1d96840c28d7ee884da5c2e656bdf1444a7c7679c794818f2f45dab2d692c1720a7e2b001214ff85',3,1,'MyApp','[]',0,'2019-09-22 12:00:21','2019-09-22 12:00:21','2020-09-22 12:00:21'),
('24f5eac6d3a48798f8cbad498698b99728dcd18609b61c42ede3b70bc3151ea51ccfe67beb3a7751',2,1,'MyApp','[]',0,'2019-09-22 12:00:38','2019-09-22 12:00:38','2020-09-22 12:00:38'),
('25ad0fec3e7e401863ec81bf47339dd5cf3b0ed07845c5585a1003fbb89092d72e30e9c7ac917f2d',2,1,'MyApp','[]',0,'2019-09-29 14:11:36','2019-09-29 14:11:36','2020-09-29 14:11:36'),
('2b132e1ad7cc40e78bf8aa2875301bb218bc722f76920ef712f8386a22ff0bc451264bc58eeb8a34',2,1,'MyApp','[]',0,'2019-09-29 16:25:13','2019-09-29 16:25:13','2020-09-29 16:25:13'),
('2eb7a38d0cc9e8785402d95f6d073ad3a9b132dfd9838f613955c5a11a41f282c15492ed73b6ea9e',2,1,'MyApp','[]',0,'2019-12-04 05:17:45','2019-12-04 05:17:45','2020-12-04 05:17:45'),
('2ec753e686ceaf6c79f0cc423a1b0b5e81a2ff7f463966186251df695604690d7bd59716352d7e3a',2,1,'MyApp','[]',0,'2019-09-29 14:12:29','2019-09-29 14:12:29','2020-09-29 14:12:29'),
('360aeeee3304974d70181d3a97956c74c1cd73fc91e5e9309cfe0c71b75a546196dbb0c56d6bda00',2,1,'MyApp','[]',0,'2019-10-05 10:40:08','2019-10-05 10:40:08','2020-10-05 10:40:08'),
('3ae6e6b53a8413c9b67707271e89b18bfee4e7e0477d81bab214bc3167084b63f22a46d786a2215d',2,1,'MyApp','[]',0,'2019-10-05 07:59:34','2019-10-05 07:59:34','2020-10-05 07:59:34'),
('3ed3d640034edd83f5eb5e6c7b91f048dfe81bcbce24ad6b56e12e9b6d29aa9fb9f691abdc94143b',2,1,'MyApp','[]',0,'2019-09-29 16:20:10','2019-09-29 16:20:10','2020-09-29 16:20:10'),
('40785ba482601944059da9a1f3797b0b5c47c164805bf9e15c11720931e75939971b347a94319d46',2,1,'MyApp','[]',0,'2019-10-05 08:33:53','2019-10-05 08:33:53','2020-10-05 08:33:53'),
('4dbf1dd9f7277ffd189359b80d3b486550659992273194a704bc0f435fdc658d3836b938f094f3e2',2,1,'MyApp','[]',0,'2019-11-24 05:20:03','2019-11-24 05:20:03','2020-11-24 05:20:03'),
('4dcd38554ef3575733fee0a9131af808efa41839d7d1a0229244547a5d025d75f44813b0b191ccfd',2,1,'MyApp','[]',0,'2019-10-07 16:18:26','2019-10-07 16:18:26','2020-10-07 16:18:26'),
('50c273a1d2589546c4e2b20496f5845a10d6fb1ad67bdfb3fe1fe9f665a7aaf8c0e601f992e52a0f',2,1,'MyApp','[]',0,'2019-09-29 14:08:38','2019-09-29 14:08:38','2020-09-29 14:08:38'),
('52799274fa8f906ce85700ad69151a9b7bf028e384c0d4ebaf35e30ab4b41d18720eaa977eb61c2e',2,1,'MyApp','[]',0,'2019-10-05 06:44:10','2019-10-05 06:44:10','2020-10-05 06:44:10'),
('5f1195e6a554c8318e7897081930016ef71b2e128504e7eb0f1f1653728bbe52d8b949f5c5ec5072',2,1,'MyApp','[]',0,'2019-10-05 08:24:57','2019-10-05 08:24:57','2020-10-05 08:24:57'),
('627db18c75d220f9c131acb962ffe55f75f2416c710d79ff38b1b0684830984ccf204c0d3e42015b',2,1,'MyApp','[]',0,'2019-10-07 14:58:28','2019-10-07 14:58:28','2020-10-07 14:58:28'),
('62dd32692c49e36264d5a00a8b6f55d4ff19377f43178ac59b54b9ba87c5c6fea187e8b8cbb30884',2,1,'MyApp','[]',0,'2019-10-05 06:20:34','2019-10-05 06:20:34','2020-10-05 06:20:34'),
('63d0f4919e048712cfb3ebf14d564adf9f2bf1f5a3de4d683a8f25cb93ebd274acd069ad7b7b5214',2,1,'MyApp','[]',1,'2019-10-05 10:25:07','2019-10-05 10:25:07','2020-10-05 10:25:07'),
('65255bd450b4b901afab1eb934191695fddbcd44abc0d350041c0cba244ced1bbd3c7b0822560011',2,1,'MyApp','[]',0,'2019-10-05 08:34:16','2019-10-05 08:34:16','2020-10-05 08:34:16'),
('6bfe9099e51fa836976798aaaee54772e5817603af11151e11ca732846c0d679c4065d7c720dcab7',2,1,'MyApp','[]',0,'2019-10-05 08:23:22','2019-10-05 08:23:22','2020-10-05 08:23:22'),
('732d219a62a4465bac547859606b99e861222daa0c5b78562d5a88b2e0362f83af073ddbb6d98f77',2,1,'MyApp','[]',0,'2019-11-27 04:52:07','2019-11-27 04:52:07','2020-11-27 04:52:07'),
('7669389a088ea7096d79a06a3386086b635ba50107fa18e312cb56d15acc9eaefa39675e17160b53',2,1,'MyApp','[]',0,'2019-10-05 08:47:28','2019-10-05 08:47:28','2020-10-05 08:47:28'),
('7a38b561fa9141e340ca10ee1c5f9e2e1f358aad47a935c05400054c746733d8ab4aab3901abf62a',2,1,'MyApp','[]',0,'2019-10-05 08:24:11','2019-10-05 08:24:11','2020-10-05 08:24:11'),
('7b63e07a53b46a9ffb772e32609852f6876c488283b2225e57fc028897cf8aac5353012b3179124a',2,1,'MyApp','[]',0,'2019-11-24 16:03:12','2019-11-24 16:03:12','2020-11-24 16:03:12'),
('7eb5dc46ae260f5e169a2d47c740719cc15e4583b587cb48ef55d79a633ad3558aaf759386400fdc',2,1,'MyApp','[]',0,'2019-10-05 10:36:02','2019-10-05 10:36:02','2020-10-05 10:36:02'),
('7f2bb109a0184122b36954ad8f9c729e6cd5d1c5467e42d1ebb7ff983724120f9f91dafeb0ea3106',2,1,'MyApp','[]',0,'2019-09-29 14:21:34','2019-09-29 14:21:34','2020-09-29 14:21:34'),
('82ebdb1e9e9add45b2ebfce618e6a420de064c796911986d4ddfcb9aa1051cffea23741fc8919752',2,1,'MyApp','[]',0,'2019-10-05 06:18:33','2019-10-05 06:18:33','2020-10-05 06:18:33'),
('8598dbf435ae9ab866eb97479a8b1b626994a8d974ea65175bb53e77ff471cd5cce96b190cd4c420',2,1,'MyApp','[]',0,'2019-10-05 05:12:57','2019-10-05 05:12:57','2020-10-05 05:12:57'),
('89e62131c16351e7bcf72fac912703240aa641bd3f3e6042c5da1f444c6a5b0ed831387c126c0972',2,1,'MyApp','[]',0,'2019-11-23 07:12:46','2019-11-23 07:12:46','2020-11-23 07:12:46'),
('8a87bafde998c27acdc81c7656230af365f80598aec6601a8a0b7edbc25ee8de02690f24f9802c09',2,1,'MyApp','[]',0,'2019-11-24 16:04:12','2019-11-24 16:04:12','2020-11-24 16:04:12'),
('8dd28a4c1c9f8e7f58745ffa252d52db1e67b7e98c87942d2e4971bbb3ed57b9b79b246a868d5a38',2,1,'MyApp','[]',0,'2019-09-29 15:37:18','2019-09-29 15:37:18','2020-09-29 15:37:18'),
('8edd0e4315d88d70b1f243c6c2b8c487a98a6dfbcc8827befea22c1b5bd922f93563175c89cc798e',2,1,'MyApp','[]',0,'2019-09-22 11:59:55','2019-09-22 11:59:55','2020-09-22 11:59:55'),
('90769a1180718e559a0dc8df6ab236b5d41027bda6bf781c84eaa9f90a7689c220614ddb686d7b19',2,1,'MyApp','[]',0,'2019-09-29 15:47:09','2019-09-29 15:47:09','2020-09-29 15:47:09'),
('93409617b629f10896fb277708b1db90faae912ae625138c192de5d136151f2eb9802ebbfef98b89',2,1,'MyApp','[]',0,'2019-09-29 15:37:30','2019-09-29 15:37:30','2020-09-29 15:37:30'),
('957ef03e5b1dfeae92ae3337e37da109ee3ecc7eb31f49938950a266bd4db337142bcffeeaa78b7d',2,1,'MyApp','[]',0,'2019-11-30 12:52:21','2019-11-30 12:52:21','2020-11-30 12:52:21'),
('967e9cc600d86c9154c935cc086e0de5b6ced2b72cf55b131c9c102567da7dffd325adf30e5dad86',2,1,'MyApp','[]',0,'2019-10-06 06:20:21','2019-10-06 06:20:21','2020-10-06 06:20:21'),
('9a01cf4fade0dbe9ba209e6b0338f49d0d00a90e5b0d258e592d5781a53b66a0aabfd6be9fc10a59',2,1,'MyApp','[]',0,'2019-10-05 05:14:26','2019-10-05 05:14:26','2020-10-05 05:14:26'),
('9d7fe029e42f30716a04e6f9beb4e63c3bbf9722f7c2ef09f0d6a8e620c12e373ae93dbaf6094c18',9,1,'MyApp','[]',0,'2019-10-05 16:54:11','2019-10-05 16:54:11','2020-10-05 16:54:11'),
('a201837596acb0e3d3680b833118f50a6900989ddbc50d79a65e03af8287661b58041cdccd32bb6e',2,1,'MyApp','[]',0,'2019-09-29 15:46:52','2019-09-29 15:46:52','2020-09-29 15:46:52'),
('bc42dc99ad7b65bcfcc1737c243f434fe804d8b37633593f2a0f87cf0a4231527a78d7f59b374f0a',2,1,'MyApp','[]',0,'2019-09-29 14:07:02','2019-09-29 14:07:02','2020-09-29 14:07:02'),
('cca1fd076ab437529017a203bb42800aa387ae5f58eb85fd1967a9950508c505d6c3a2b5cb596a07',2,1,'MyApp','[]',0,'2019-09-29 13:50:49','2019-09-29 13:50:49','2020-09-29 13:50:49'),
('cdfc482a088d59d86ede4a15f7f6e49134ab856a90e9f5d6af1c0069139545b5a951fa407c49dba4',2,1,'MyApp','[]',0,'2019-09-29 15:44:12','2019-09-29 15:44:12','2020-09-29 15:44:12'),
('d5a7075d85cb0c6a4cdd5b5f130cad72a245f89834b2ea07666ce910ace46c17c172b618413f217f',2,1,'MyApp','[]',0,'2019-09-22 11:59:37','2019-09-22 11:59:37','2020-09-22 11:59:37'),
('ddbe98fe407abb208362bb444880b46b640d6a21a4f97ceaba9e3c94b68b5bf8a11b88466e803e98',2,1,'MyApp','[]',0,'2019-11-24 16:03:39','2019-11-24 16:03:39','2020-11-24 16:03:39'),
('df93d52e7cdb056a2c9a99f0ef9297e80d84f11f2983db11a8a0c83634aad59f3e9c7f3f708cf6c7',2,1,'MyApp','[]',0,'2019-09-29 15:34:40','2019-09-29 15:34:40','2020-09-29 15:34:40'),
('e48840e375fd996b9c52e0b41cf32a14ced13100c4f719ad0ef00a2d703e6ecf38a9a9ff0a5a2fed',2,1,'MyApp','[]',0,'2019-09-29 15:44:41','2019-09-29 15:44:41','2020-09-29 15:44:41'),
('e4b8e47ca98dfd9f9ab87caf28a538f9f1f40148fbd86f7c90d0888d8d4f2ce7931f9274ea044034',2,1,'MyApp','[]',0,'2019-09-29 14:21:21','2019-09-29 14:21:21','2020-09-29 14:21:21'),
('e7bbac05beb3b16fce9b52b2e736c5ca4666f2ed14d6b096be2e71c49e00b694d962684d801221b1',2,1,'MyApp','[]',1,'2019-10-05 08:48:35','2019-10-05 08:48:35','2020-10-05 08:48:35'),
('f51b86ed1fa593d5059b6eb7b2cbccf8c4556b54d26fd4d60449d7bceabaca574d2dfbbbd6608879',2,1,'MyApp','[]',0,'2019-11-24 05:26:41','2019-11-24 05:26:41','2020-11-24 05:26:41'),
('f6409ebf1147511e357f541e49fc6256e686348e05d1e71560b355113fa6ddce3afdd5a02f7c4427',2,1,'MyApp','[]',0,'2019-10-05 06:20:57','2019-10-05 06:20:57','2020-10-05 06:20:57'),
('f7ac2f714e87d6d30ed144aef67f39f854e808da86c9c44414343e1cadaea6381b758f1b719f0de2',2,1,'MyApp','[]',0,'2019-10-05 06:19:34','2019-10-05 06:19:34','2020-10-05 06:19:34'),
('fb09632641132afb2d9622114efabd0cabb8707b5b9d2fb9509304bae32c7e7bf2d87d24a029de86',2,1,'MyApp','[]',0,'2019-09-29 16:20:43','2019-09-29 16:20:43','2020-09-29 16:20:43'),
('fc61e1ad7f2e3268b9e92a7c542c3aa6ad8bb83222b11e5916192cab3a776e99977fb5b73953c1c7',2,1,'MyApp','[]',0,'2019-11-23 07:13:08','2019-11-23 07:13:08','2020-11-23 07:13:08'),
('ff1e63116e7d8058a74cec769582e2f63954611925436b6b7eda95235d6b4ab3bf89f7fac8f6b49a',2,1,'MyApp','[]',0,'2019-09-29 16:22:32','2019-09-29 16:22:32','2020-09-29 16:22:32');

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`email_verified_at`,`password`,`remember_token`,`created_at`,`updated_at`) values 
(2,'Sahrun','sahrunnawawi995@gmai.com',NULL,'$2y$10$zm8IZ95nBBtWH6Vcw2luw.dll5fJBTGt8eqH3R02csFL/xvxMyW5W',NULL,'2019-09-22 11:24:16','2019-09-22 11:24:16'),
(3,'Sahrun','student@example.com',NULL,'$2y$10$8eE5bsoGDlC2.4SkthMtEu3O6.OYUot7qC/5d1KpWSn4LGHPes9gu',NULL,'2019-09-22 12:00:21','2019-09-22 12:00:21'),
(9,'Sahrun','sahrunnawadwi995@gmai.com',NULL,'$2y$10$.MYyQlx2JIEzIaNC4FUGsOEe53CIMfbFhW1lOuXVywkP6712fLiBu',NULL,'2019-10-05 16:54:10','2019-10-05 16:54:10');

/*Table structure for table `warga` */

DROP TABLE IF EXISTS `warga`;

CREATE TABLE `warga` (
  `id_warga` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `NIK` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_lengkap` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_panggilan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tempat_tinggal` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `jenis_kelamin` enum('laki-laki','Perempuan') COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `RT` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RW` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kecamatan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `agama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pekerjaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kewarganegaraan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_ktp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` int(11) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id_warga`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `warga` */

insert  into `warga`(`id_warga`,`NIK`,`nama_lengkap`,`nama_panggilan`,`tempat_tinggal`,`tempat_lahir`,`tanggal_lahir`,`jenis_kelamin`,`alamat`,`RT`,`RW`,`kecamatan`,`agama`,`status`,`pekerjaan`,`kewarganegaraan`,`foto`,`foto_ktp`,`created`,`created_at`,`updated`,`updated_at`) values 
(1,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-11-29','2019-11-29','laki-laki','Waenetat','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-24 00:00:00',2,'2019-11-24 00:00:00'),
(6,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-11-29','2019-11-29','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-24 03:31:58',2,'2019-11-24 03:31:58'),
(7,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-11-29','2019-11-29','laki-laki','Jalan batu krikil','asasas','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-24 03:35:55',2,'2019-11-24 03:35:55'),
(8,'11233121241','Sahrun Nawawi','Sahrun','Waenetat','2019-11-27','2019-11-27','laki-laki','Jalan batu krikil','5','1','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-24 03:38:22',2,'2019-11-24 03:38:22'),
(9,'11233121241','Sahrun Nawawi','Sahrun','Waenetat','2019-10-29','2019-10-29','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-24 03:39:40',2,'2019-11-24 03:39:40'),
(10,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-11-29','2019-11-29','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-24 04:00:12',2,'2019-11-24 04:00:12'),
(11,'11233121247','Sahrun Nawawi','asas','Waenetat','2019-11-29','2019-11-29','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','asas',NULL,NULL,2,'2019-11-27 05:14:58',2,'2019-11-27 05:14:58'),
(12,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-11-29','2019-11-29','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-27 05:17:03',2,'2019-11-27 05:17:03'),
(13,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-11-29','2019-11-29','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-27 05:18:00',2,'2019-11-27 05:18:00'),
(14,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-11-29','2019-11-29','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-27 05:20:17',2,'2019-11-27 05:20:17'),
(15,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-11-29','2019-11-29','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-27 05:21:22',2,'2019-11-27 05:21:22'),
(16,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-09-28','2019-09-28','laki-laki','asas','3','asas','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-27 06:08:26',2,'2019-11-27 06:08:26'),
(17,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-09-28','2019-09-28','laki-laki','asas','3','asas','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-27 06:15:56',2,'2019-11-27 06:15:56'),
(18,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-12-09','2019-12-09','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-30 02:59:44',2,'2019-11-30 02:59:44'),
(19,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-12-09','2019-12-09','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-30 03:00:34',2,'2019-11-30 03:00:34'),
(20,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-12-09','2019-12-09','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia',NULL,NULL,2,'2019-11-30 03:02:50',2,'2019-11-30 03:02:50'),
(21,'11233121247','Sahrun Nawawi','Sahrun','Waenetat','2019-12-09','2019-12-09','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia','15751010395de2226f969391.08151602.jpg','15751010395de2226f970f24.06454448.jpg',2,'2019-11-30 03:03:59',2,'2019-11-30 03:03:59'),
(22,'112331212476','Sahrun Nawawi','Sahrun','Waenetat','2019-11-30','2019-11-30','laki-laki','Jalan batu krikil','3','2','Waeapo','Islam','belum-menikah','swasta','Indonesia','','',2,'2019-11-30 10:19:46',2,'2019-11-30 10:19:46');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
