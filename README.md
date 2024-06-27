# Cloud Paint
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Credit](#credit)

## Introduction

Cloud Paint is a web application that allows users to create profiles and draw via user-friendly interface.

## Features

### Main drawing functionality

Firstly, for every element we are going to use, we have created variables that store the given element. Then, we have set some default values for certain variables. 

In order to draw anything, we have initialized the canvas. Then there are some event listeners for the mouse state (`mousedown`, `mousemove`, `mouseup`).

On `mousedown`, the function `startDraw()` is being called. This function initializes the drawing process on a canvas. It sets up drawing parameters such as line width and color.
It captures the initial mouse position and stores a snapshot of the canvas, preparing for subsequent drawing actions.

On `mousemove`, the function `drawing()` is responsible for continuing the drawing process on the canvas. It checks if drawing is currently active (`isDrawing` flag) and restores the canvas state (`snapshot`) to prevent dragging issues. The function dispatches the drawing operation to the appropriate function based on the selected tool (`selectedTool`).

On `mouseup` the `isDrawing` flag is set on false and the drawing process stops.

### Create profile

Users are registered with  name, e-mails and encrypted passwords to the database.

When creating an account, each user must enter their email address, name on the platform, a password that you will use, as well as confirm the password and agree to the privacy policy and terms of use of the application, as well as date of birth.

Each of these fields has necessary rules that the user must follow in order to successfully register.

Each field must be filled in and valid

Name cannot be less than 3 characters or more than 15 characters, it can only consist of 'a-z', 'A-Z', '_', '$', '0-9 '!"

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

- Brush - The default selected tool is a brush. It is used for drawing lines on a canvas element based on the mouse cursor's movement. The function draws an invisible line from the current position to the point specified by the cursor's coordinates, then actually (visibly) draws the line on the canvas using the current stroke style.

- Eraser - The users can erase their drawing using the eraser toor. It works the same as the brush, but for the stroke style we use white color.


- Size Slider - Using the size slider, the users can adjust the thickness of the selected tool. The function sets up an event listener for a range input element (slider) that adjusts the brush width. It updates the `brushWidth` variable to the slider's current value whenever the slider is adjusted.

- Text - Users can add text to the drawing canvas using the "A" tool. The function adds a click event listener to the canvas, then checks if the active tool is the text tool.
It calculates the click position on the canvas and creates a text input. Focuses the input and waits for the user to type. It draws the text on the canvas when the input loses focus or "Enter" is pressed.

### Figures

Our users are able to draw different geometric figures. Every shape (except for line) can be either filled or not, which can be chosen by the `Fill shape` checkbox.

 - Rectangle - `drawRect` function draws a rectangle on a canvas at the position of the mouse cursor (`e.offsetX`, `e.offsetY`). It either strokes (`strokeRect`) or fills (`fillRect`) the rectangle based on the state of `fillColor.checked`.

 - Circle - `drawCircle` function draws a circle on a canvas centered at `prevMouseX` and `prevMouseY`, with a radius calculated from the current mouse position (`e.offsetX`, `e.offsetY`). It fills or strokes the circle based on the state of `fillColor.checked`.

 - Triangle - `drawTriangle` function on a canvas creates a triangle, starting from the previous mouse position and extending to the current mouse position. It completes the triangle by connecting back to a calculated point (`prevMouseX * 2 - e.offsetX`, `e.offsetY`).
It then fills or strokes the triangle based on the state of `fillColor.checked`.

- Line - ``drawLine`` function on a canvas draws a straight line, starting from the previous mouse position and extending to the current mouse position. It then strokes (draws) the line on the canvas using `ctx.stroke()`.

### Clear canvas

The bucket in the right top corner is used for clearing the canvas.

A function named `clearCanvasBackground()` is called when the bucket is clicked. It fills the entire canvas with white color.

### Undo button

The app allows users to undo their last drawn thing on the canvas. The undo function checks if there are previous canvas states to restore. If so, it decrements an index, removes the last state from `restoreArray` (it contains different states of the canvas), and restores the canvas to the previous state using `putImageData`. 

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