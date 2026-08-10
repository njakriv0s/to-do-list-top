import "./styles.css"
import { currentDate } from "./currentDate.js";
import { Reminder } from "./reminderModule.js";
import { AddNewReminder } from "./addNewReminder.js";
import { getNumberOfDays } from "./differenceInDays.js"



const wrapper = document.querySelector(".wrapper");
const main = document.querySelector(".main");
const mainWrapper = document.querySelector(".main-wrapper")
const addButton = document.getElementById("icon-add");




const reminderArr = [];


const newReminder = Reminder()
newReminder.name = "Catch Flight";
newReminder.description = "Catch flight to Venice"
newReminder.dueDate = new Date(2026, 7, 31, 23, 0)
newReminder.complete = false
reminderArr.push(newReminder);

const newReminder2 = Reminder()
newReminder2.name = "Pay Bills"
newReminder2.description = "Pay phone and electricity"
newReminder2.dueDate = new Date(2026, 7, 14, 5, 0)
newReminder2.complete = true;
reminderArr.push(newReminder2);


console.log(reminderArr);

AddNewReminder(addButton, reminderArr);

console.log(getNumberOfDays(currentDate(), reminderArr[0].dueDate));
console.log(getNumberOfDays(currentDate(), reminderArr[1].dueDate));

export {reminderArr,  addButton};


