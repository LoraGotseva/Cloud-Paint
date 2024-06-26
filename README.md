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

When creating an account, each user must enter their email address, name on the platform, a password that you will use, as well as confirm the password and agree to the privacy policy and terms of use of the application, as well as date of birth.

Each of these fields has necessary rules that the user must follow in order to successfully register.

Each field must be filled in and valid

name cannot be less than 3 characters or more than 15 characters, it can only consist of 'a-z', 'A-Z', '_', '$', '0-9 '!"

Password must be between 6 and 30 characters

User must be 14 years of age or older

Email address must be valid

### Login

Users need to provide correct pair of registered e-mail and password to access their account.

### Cursor change

When a tool is selected, the cursor changes its appearance according to the selected tool.

It uses a single event listener for all tool buttons. This listener dynamically updates the cursor style based on which tool is selected.
By removing existing cursor classes and adding the appropriate one (`brush-cursor`, `eraser-cursor`, `text-cursor`, or `default-cursor`), the application ensures clarity and responsiveness.

### Pick Color

The app allows you to pick a color from a color palette. This functionality is made with JS.

It iterates over a collection of elements (colors) then adds a click event listener to each element.
When an element is clicked it removes the selected class from the previously selected element and adds the selected class to the clicked element.
Sets `selectedColor` to the color of the clicked element.

It updates the visual selection and the selected color whenever a button is clicked.

### Drawing tools

// David
- Size Slider - Using the size slider, the users can adjust the thickness of the selected tool. The function sets up an event listener for a range input element (slider) that adjusts the brush width. It updates the `brushWidth` variable to the slider's current value whenever the slider is adjusted.

- Text - Users can add text to the drawing canvas using the "A" tool. The function adds a click event listener to the canvas, then checks if the active tool is the text tool.
It calculates the click position on the canvas and creates a text input. Focuses the input and waits for the user to type. It draws the text on the canvas when the input loses focus or "Enter" is pressed.

### Figures

// David

### Clear canvas

The bucket in the right top corner is used for clearing the canvas.

A function named `clearCanvasBackground()` is called when the bucket is clicked. It fills the entire canvas with white color.

### Download


Users have the option to download their developed image in 3 different formats - JPEG, PNG, BMP



## Technologies

Main used technologies for this project are HTML, CSS, JS and MongoDB.

Node.js packages:
- body-parser (1.20.2)
- crypto-js (4.2.0)
- ejs (3.1.10)
- express (4.19.2)
- mongodb (6.7.0)
- mongoose (8.4.3)
- sweetalert2 (11.12.0)
- uuid (10.0.0)

### HTML

Our project's HTML structure defines the user interface for Cloud Paint, providing essential functionalities for drawing and interaction.

Key elements:

 - Canvas: Used for drawing operations, controlled by JavaScript for functionalities like brush, shapes, and eraser tools.

 - Buttons and Icons: Utilizes Font Awesome icons for intuitive button actions.

 - Color and Tool Options: Provides selectable options for colors, drawing tools (brush, eraser, shapes), and additional functionalities like uploading and downloading images.

### CSS

Firstly, to remove all unnecessary default css values, we have included the `css-reset.css` file. Then, for every page in this project, we have created different css files with many characteristics.

The pages are responsive, which means the app is compatible with different screen sizes.

### JS

The programming language we have used for this project is JavaScript. All of the functionalities are made with it, and you can see their documentation [here](#features).

For user authentication there are two exported methods in `auth.js`: one for registering a new user to save in the database and one for searching a registered user by e-mail and comparing passwords for login.

The script in `saveImgToDB.js` uploads a new drawing with its author into the database.
The server part handles converting the image to string format in the /upload method.

The models provide schemas for the database collections to ensure the records are not mutated easily. They also ensure that each json document is generated with unique id in UUID format.

The server.js file imports most of the libraries here to ensure the connection between the pages, styles and functionalities, connection to the database and handles the correct tokenisation to work with the collections

### MongoDB

The app uses MongoDB as its database, where it stores registered users and their drawings.
Users are saved with unique names, unique e-mails and encrypted passwords.
Each image is stored with the id of the user that had drawn it and the encrypted to string file itself.
For now there are not explicitly created clear CRUD operations to work with the database, it uses already generated once provided by the "mongoose" library.

The `database.config.js` file handles the correct connection to the database.

## Credit
Made by:
- Lora Gotseva
- David Petrov
- Alex Slavov
- Atanas Keranov