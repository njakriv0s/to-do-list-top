import "./styles.css"
import "./modal.css"
import "./grid.css"
import "./menu.js"
import "./projects.js"
import "./projects.css"
import "./projectGrid.js"
import "./projectGrid.css"



import { currentDate } from "./currentDate.js";
import { Reminder } from "./reminderModule.js";
import { getNumberOfDays, formatDate } from "./differenceInDays.js"
import { isComplete, isFlagged, isMonthly, isWeekly, isToday } from "./reminderFilter.js";
import { createGrid, gridCardColor } from "./grid.js";
import { createReminderID } from "./modal.js"


import { addButton, modal, AddNewReminder } from "./modal.js"
import { loadPlaceholdersReminders } from "./placeholderReminders.js"


const wrapper = document.querySelector(".wrapper");
const main = document.querySelector(".main");
const mainWrapper = document.querySelector(".main-wrapper")
const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay")
mainWrapper.appendChild(modalOverlay);
const gridContainer = document.querySelector(".grid-container")




const reminderArr = [];

function sortArr(array,key) {
    array.sort((a, b) => a[key] - b[key])
};

loadPlaceholdersReminders();


// PLACEHOLDER REMINDERS

// const newReminder = Reminder()
// newReminder.name = "Catch Flight";
// newReminder.description = "Catch flight to Venice by 21:00. Remember to take the passports"
// newReminder.dueDate = new Date(2026, 7, 31, 23, 0)
// newReminder.complete = false
// newReminder.flagged = false
// newReminder.id = createReminderID()
// reminderArr.push(newReminder);

// const newReminder2 = Reminder()
// newReminder2.name = "Pay Bills"
// newReminder2.description = "Pay phone and electricity to make sure that they won' cut it"
// newReminder2.dueDate = new Date(2026, 7, 22, 5, 0)
// newReminder2.complete = false;
// newReminder2.flagged = false;
// newReminder2.id = createReminderID()
// reminderArr.push(newReminder2);

// const newReminder3 = Reminder()
// newReminder3.name = "Study";
// newReminder3.description  ="Study for exam. Make sure to be ready because it is very important";
// newReminder3.dueDate = new Date(2026, 7, 24, 11, 0);
// newReminder3.complete = false;
// newReminder3.flagged = true;
// newReminder3.id = createReminderID()
// reminderArr.push(newReminder3)

// const newReminder4 = Reminder()
// newReminder4.name = "Catch Second Flight";
// newReminder4.description = "Catch flight to Rome. I haven't gone there since decades."
// newReminder4.dueDate = new Date(2026, 7, 28, 23, 0)
// newReminder4.complete = false
// newReminder4.flagged = true
// newReminder4.id = createReminderID()
// reminderArr.push(newReminder4);

// const newReminder5 = Reminder()
// newReminder5.name = "Olympiakos Match";
// newReminder5.description = "Leave early to go see the match with my son at the stadium"
// newReminder5.dueDate = new Date(2026, 10, 28, 20, 0)
// newReminder5.complete = false
// newReminder5.flagged = false
// newReminder5.id = createReminderID()
// reminderArr.push(newReminder5);

AddNewReminder(addButton, reminderArr);



createGrid(reminderArr);

export {reminderArr, modalOverlay, gridContainer, sortArr };



