import { gridContainer, reminderArr } from "./index.js";
import { createGrid } from "./grid.js";
import { isToday, isWeekly, isMonthly, isComplete, isFlagged } from "./reminderFilter.js";


const allButton = document.getElementById("button-all");
const todayButton = document.getElementById("button-today");
const weeklyButton = document.getElementById("button-weekly");
const monthlyButton = document.getElementById("button-monthly");
const flagButton = document.getElementById("button-flagged");
const completeButton = document.getElementById("button-complete");

allButton.addEventListener("click", (event) => {
    gridContainer.innerHTML = '';
    createGrid(reminderArr);
})

todayButton.addEventListener("click", (event) => {
    gridContainer.innerHTML = '';
    createGrid(isToday(reminderArr));
})

weeklyButton.addEventListener("click", (event) => {
    gridContainer.innerHTML = '';
    createGrid(isWeekly(reminderArr));
})

monthlyButton.addEventListener("click", (event) => {
    gridContainer.innerHTML = '';
    createGrid(isMonthly(reminderArr));
})

flagButton.addEventListener("click", (event) => {
    gridContainer.innerHTML = '';
    createGrid(isFlagged(reminderArr));
    console.log(reminderArr);
})

completeButton.addEventListener("click", (event) => {
    gridContainer.innerHTML = '';
    createGrid(isComplete(reminderArr));
})