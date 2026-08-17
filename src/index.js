import "./styles.css"
import "./modal.css"
import "./grid.css"

import { currentDate } from "./currentDate.js";
import { Reminder } from "./reminderModule.js";
import { AddNewReminder } from "./addNewReminder.js";
import { getNumberOfDays, formatDate } from "./differenceInDays.js"
import { isComplete, isFlagged, isMonthly, isWeekly, isToday } from "./reminderFilter.js";
import { createGrid, gridCardColor } from "./grid.js";



const wrapper = document.querySelector(".wrapper");
const main = document.querySelector(".main");
const mainWrapper = document.querySelector(".main-wrapper")
const addButton = document.getElementById("icon-add");
const modalOverlay = document.createElement("div");
modalOverlay.classList.add(".modal-overlay")
mainWrapper.appendChild(modalOverlay);
const modal = document.createElement("div");
modal.classList.add("modal");
const gridContainer = document.querySelector(".grid-container")




const reminderArr = [];
console.log(reminderArr);

function sortArr(array,key) {
    array.sort((a, b) => a[key] - b[key])
};




const newReminder = Reminder()
newReminder.name = "Catch Flight";
newReminder.description = "Catch flight to Venice by 21:00. Remember to take the passports"
newReminder.dueDate = new Date(2026, 7, 31, 23, 0)
newReminder.complete = false
newReminder.flagged = false
reminderArr.push(newReminder);

const newReminder2 = Reminder()
newReminder2.name = "Pay Bills"
newReminder2.description = "Pay phone and electricity to make sure that they won' cut it"
newReminder2.dueDate = new Date(2026, 7, 17, 5, 0)
newReminder2.complete = true;
newReminder2.flagged = false;
reminderArr.push(newReminder2);

const newReminder3 = Reminder()
newReminder3.name = "Study";
newReminder3.description  ="Study for exam. Make sure to be ready because it is very important";
newReminder3.dueDate = new Date(2026, 7, 20, 11, 0);
newReminder3.complete = false;
newReminder3.flagged = true;
reminderArr.push(newReminder3)

const newReminder4 = Reminder()
newReminder4.name = "Catch Second Flight";
newReminder4.description = "Catch flight to Rome. I haven't gone there since decades."
newReminder4.dueDate = new Date(2026, 7, 28, 23, 0)
newReminder4.complete = false
newReminder4.flagged = true
reminderArr.push(newReminder4);


// console.log(isComplete());
// console.log(isMonthly());
// console.log(isWeekly());
// console.log(isToday());




AddNewReminder(addButton, reminderArr);

createGrid();

export {reminderArr,  addButton, modalOverlay, modal, gridContainer, sortArr};


