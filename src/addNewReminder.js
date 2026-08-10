// import { addButton, reminderArr } from "./index.js"
import { Reminder } from "./reminderModule.js"

// addButton.addEventListener("click", (e) => {
//     const reminder = Reminder()
//     reminder.name = prompt("Title")
//     reminder.description = prompt("Description")
//     let year = +prompt("Enter Year")
//     let month = +prompt("Enter Month") - 1
//     let day = +prompt("Enter Day")
//     let hour = +prompt("Enter Hour")
//     let minute = +prompt("Enter Minute")
//     reminder.dueDate = new Date (year, month, day, hour, minute)
//     let completed = prompt("Complete")
//     if (completed.toLowerCase() === "true") {
//         reminder.complete = true
//     }
//     if (completed.toLowerCase() === "false") {
//         reminder.complete = false
//     }
//     reminderArr.push(reminder);
// })


function AddNewReminder(addButton, reminderArr) {
    addButton.addEventListener("click", (e) => {
    const reminder = Reminder()
    reminder.name = prompt("Title")
    reminder.description = prompt("Description")
    let year = +prompt("Enter Year")
    let month = +prompt("Enter Month") - 1
    let day = +prompt("Enter Day")
    let hour = +prompt("Enter Hour")
    let minute = +prompt("Enter Minute")
    reminder.dueDate = new Date (year, month, day, hour, minute)
    let completed = prompt("Complete")
    if (completed.toLowerCase() === "true") {
        reminder.complete = true
    }
    if (completed.toLowerCase() === "false") {
        reminder.complete = false
    }
    reminderArr.push(reminder);
})
}

export {AddNewReminder};