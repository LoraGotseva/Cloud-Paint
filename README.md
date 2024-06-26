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

// Nasko da napishe kak tochno raboti i kakvo izpolzva
// Aleks da si napisha tam za validaciite rabotite

### Login

// Nasko da napishe kak tochno raboti i kakvo izpolzva
// Aleks da si napisha tam za validaciite rabotite

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

// Alex

## Technologies

Main used technologies for this project are HTML, CSS, JS and MongoDB.

### HTML

Our project's HTML structure defines the user interface for Cloud Paint, providing essential functionalities for drawing and interaction.

Key elements:

 - Canvas: Used for drawing operations, controlled by JavaScript for functionalities like brush, shapes, and eraser tools.

 - Buttons and Icons: Utilizes Font Awesome icons for intuitive button actions.

 - Color and Tool Options: Provides selectable options for colors, drawing tools (brush, eraser, shapes), and additional functionalities like uploading and downloading images.

//Alex da si napishe za negovite htmli kakvi sa po interesnite elementi

### CSS

Firstly, to remove all unnecessary default css values, we have included the `css-reset.css` file. Then, for every page in this project, we have created different css files with many characteristics.

The pages are responsive, which means the app is compatible with different screen sizes.

### JS

// vseki koito e izpozlval js

### MongoDB

// Nasko

## Credit
Made by:
- Lora Gotseva
- David Petrov
- Alex Slavov
- Atanas Keranov