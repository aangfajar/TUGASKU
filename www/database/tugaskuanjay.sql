/*
SQLyog Community v13.3.0 (64 bit)
MySQL - 10.4.32-MariaDB : Database - tugaskuanjay
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tugaskuanjay` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `tugaskuanjay`;

/*Table structure for table `jawaban_tugas` */

DROP TABLE IF EXISTS `jawaban_tugas`;

CREATE TABLE `jawaban_tugas` (
  `id_jawaban` int(11) NOT NULL AUTO_INCREMENT,
  `id_posting` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `file_jawaban` text DEFAULT NULL,
  `tanggal_submit` datetime DEFAULT current_timestamp(),
  `nilai` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id_jawaban`),
  KEY `id_posting` (`id_posting`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `jawaban_tugas_ibfk_1` FOREIGN KEY (`id_posting`) REFERENCES `posting` (`id_posting`),
  CONSTRAINT `jawaban_tugas_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `jawaban_tugas` */

/*Table structure for table `kelas` */

DROP TABLE IF EXISTS `kelas`;

CREATE TABLE `kelas` (
  `id_kelas` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kelas` varchar(100) NOT NULL,
  `mapel` varchar(100) NOT NULL,
  `kode_kelas` varchar(10) NOT NULL,
  `cover_warna` int(11) DEFAULT NULL,
  `dibuat_oleh` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_kelas`),
  UNIQUE KEY `kode_kelas` (`kode_kelas`),
  KEY `dibuat_oleh` (`dibuat_oleh`),
  CONSTRAINT `kelas_ibfk_1` FOREIGN KEY (`dibuat_oleh`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `kelas` */

insert  into `kelas`(`id_kelas`,`nama_kelas`,`mapel`,`kode_kelas`,`cover_warna`,`dibuat_oleh`) values 
(1,'Praktikum ASD','Algoritma Struktur Data 24/25','J9w0bh',737373,2);

/*Table structure for table `posting` */

DROP TABLE IF EXISTS `posting`;

CREATE TABLE `posting` (
  `id_posting` int(11) NOT NULL AUTO_INCREMENT,
  `id_kelas` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `jenis_posting` enum('pengumuman','materi','tugas') NOT NULL,
  `judul` varchar(200) DEFAULT NULL,
  `isi` text DEFAULT NULL,
  `tanggal_posting` datetime DEFAULT current_timestamp(),
  `deadline` datetime DEFAULT NULL,
  PRIMARY KEY (`id_posting`),
  KEY `id_kelas` (`id_kelas`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `posting_ibfk_1` FOREIGN KEY (`id_kelas`) REFERENCES `kelas` (`id_kelas`),
  CONSTRAINT `posting_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `posting` */

/*Table structure for table `user_kelas` */

DROP TABLE IF EXISTS `user_kelas`;

CREATE TABLE `user_kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_kelas` int(11) NOT NULL,
  `role` enum('pelajar','pengajar') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_kelas` (`id_kelas`),
  CONSTRAINT `user_kelas_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `user_kelas_ibfk_2` FOREIGN KEY (`id_kelas`) REFERENCES `kelas` (`id_kelas`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `user_kelas` */

insert  into `user_kelas`(`id`,`id_user`,`id_kelas`,`role`) values 
(1,1,1,'pelajar');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `foto_porfile` varchar(255) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `users` */

insert  into `users`(`id_user`,`email`,`username`,`password`,`foto_porfile`) values 
(1,'aang','aangfajar4@gmail.com','memek','anjay'),
(2,'lendra','lendra','anjay','bezir');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
