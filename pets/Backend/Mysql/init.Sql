-- Create the database
CREATE DATABASE IF NOT EXISTS awayhome;
USE awayhome;

-- Drop tables if they exist to avoid duplicate entries
DROP TABLE IF EXISTS PetFlyers;
DROP TABLE IF EXISTS Animals;
DROP TABLE IF EXISTS Addresses;
DROP TABLE IF EXISTS Users;

-- Users Table
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Addresses Table
CREATE TABLE IF NOT EXISTS Addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR(255),
    city VARCHAR(255)
);

-- Animals Table
CREATE TABLE IF NOT EXISTS Animals (
    id VARCHAR(24) PRIMARY KEY,
    typePost BOOLEAN,
    userLogin VARCHAR(255),
    username VARCHAR(255),
    avatar VARCHAR(255),
    datePost DATETIME,
    type VARCHAR(255),
    name VARCHAR(255),
    sex ENUM('male', 'female', 'unknown'),
    breed VARCHAR(255),
    address_id INT,
    description TEXT,
    status ENUM('lost', 'found'),
    size ENUM('small', 'medium', 'large'),
    FOREIGN KEY (address_id) REFERENCES Addresses(id)
);

-- PetFlyers Table
CREATE TABLE IF NOT EXISTS PetFlyers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id VARCHAR(24),
    photo_url VARCHAR(255),
    FOREIGN KEY (pet_id) REFERENCES Animals(id)
);
