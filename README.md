# Todo Web App

A small browser-based to-do list built with plain HTML, CSS, and JavaScript.

## Features

- Add tasks using the input field and `Add Task` button
- Submit a new task by pressing `Enter` in the input field
- Mark tasks complete with a click (line-through styling)
- Edit existing tasks via an inline prompt
- Delete single tasks
- Clear all tasks with a dedicated button
- Tasks are saved to `localStorage` so the list persists across reloads

## Files

- `index.html` — page structure and UI elements
- `style.css` — basic styling for the to-do app
- `script.js` — task logic, localStorage persistence, and UI behavior

## Usage

1. Open `index.html` in a browser.
2. Enter a task description in the text field.
3. Click `Add Task` or press `Enter` to add the task.
4. Click a task to mark it complete.
5. Use `Edit` to modify a task and `Delete` to remove it.
6. Click `Clear All` to remove every task from the list.

## Notes

This app uses browser `localStorage`, so tasks remain available after refreshing the page.
