# Cloud Paint
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Credit](#credit)

## Introduction

Cloud Paint is a web application that allows users to create profiles and draw via user-friendly interface.

## Features

### Create profile

Users are registered with  name, e-mails and encrypted passwords to the database.
// Aleks da si napisha tam za validaciite rabotite

### Login

Users need to provide correct pair of registered e-mail and password to access their account.
// Aleks da si napisha tam za validaciite rabotite

### Pick Color

// Lora

### Drawing tools

// David

### Figures

// David

### Download

// Alex

## Technologies

Main used technologies for this project are HTML, CSS, JS and MongoDB.

Node.js packages:
body-parser (1.20.2)
crypto-js (4.2.0)
ejs (3.1.10)
express (4.19.2)
mongodb (6.7.0)
mongoose (8.4.3)
sweetalert2 (11.12.0)
uuid (10.0.0)

### HTML

//Lora

### CSS

//Lora

### JS

For user authentication there are two exported methods in auth.js: one for registering a new user to save in the database and one for searching a registered user by e-mail and comparing passwords for login.

The script in saveImgToDB.js uploads a new drawing with its author into the database.
The server part handles converting the image to string format in the /upload method.

The models provide schemas for the database collections to ensure the records are not mutated easily. They also ensure that each json document is generated with unique id in UUID format.

The server.js file imports most of the libraries here to ensure the connection between the pages, styles and functionalities, connection to the database and handles the correct tokenisation to work with the collections

### MongoDB

The app uses MongoDB as its database, where it stores registered users and their drawings.
Users are saved with unique names, unique e-mails and encrypted passwords.
Each image is stored with the id of the user that had drawn it and the encrypted to string file itself.
For now there are not explicitly created clear CRUD operations to work with the database, it uses already generated once provided by the "mongoose" library.

The database.config.js file handles the correct connection to the database.

## Credit
Made by:
- Lora Gotseva
- David Petrov
- Alex Slavov
- Atanas Keranov