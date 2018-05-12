drop database if exists reservations;

create database reservations;

use reservations;

create table reservations(
  customerName varchar(30) not null,
  phoneNumber varchar(15) not null,
  customerEmail varchar(30) not null,
  customerID integer(10) auto_increment not null,

  primary key (customerID)
);