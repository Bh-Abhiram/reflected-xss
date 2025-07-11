CREATE DATABASE reflected_xss;
USE reflected_xss;

1.CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL
);



2. CREATE TABLE search_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    query TEXT NOT NULL
);



After creating the Database and Tables including the values then create a new user in the Database
this database creation is mandatory to prevent the conflict of the other database privileges.

Follow the below steps to setup new user for above reflected_xss database

STEP:1 : Create the new user

CREATE USER 'new_user'@'localhost'
IDENTIFIED BY 'new_password';

STEP:2 : Grant all privileges to above user and database

GRANT ALL PRIVILEGES on stored_xss.* TO 'new_user'@'locahost';

STEP:3 : Check whether the user is created or not on particular database

SELECT USER, HOST FROM mysql.db WHERE db="reflected_xss";
