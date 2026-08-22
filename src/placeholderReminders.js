import { reminderArr } from "./index.js";
import { createGrid } from "./grid.js";
import { Reminder } from "./reminderModule.js";
import { createReminderID } from "./modal.js";
import { Project } from "./projects.js";
import { projectArr } from "./projects.js";
import { createProjectID } from "./projects.js";

function loadPlaceholdersProjects() {

    const project1 = Project();
    project1.name = "Flights";
    project1.id = createProjectID();
    project1.remindersID = [];
    projectArr.push(project1);
    
    const project2 = Project();
    project2.name = "Match";
    project2.id = createProjectID();
    project2.remindersID = [];
    projectArr.push(project2);

    return { project1, project2 };

}

function loadPlaceholdersReminders() {

    const project1 = projectArr.find(p => p.name === "Flights");
    const project2 = projectArr.find(p => p.name === "Match");

    const newReminder = Reminder()
    newReminder.name = "Catch Second Flight";
    newReminder.description = "Catch flight to Venice by 21:00. Remember to take the passports"
    newReminder.dueDate = new Date(2026, 7, 31, 23, 0)
    newReminder.complete = false
    newReminder.flagged = false
    newReminder.id = createReminderID()
    project1.remindersID.push(newReminder.id)
    reminderArr.push(newReminder);

    const newReminder2 = Reminder()
    newReminder2.name = "Pay Bills"
    newReminder2.description = "Pay phone and electricity to make sure that they won' cut it"
    newReminder2.dueDate = new Date(2026, 7, 22, 5, 0)
    newReminder2.complete = false;
    newReminder2.flagged = false;
    newReminder2.id = createReminderID()
    reminderArr.push(newReminder2);

    const newReminder3 = Reminder()
    newReminder3.name = "Study";
    newReminder3.description  ="Study for exam. Make sure to be ready because it is very important";
    newReminder3.dueDate = new Date(2026, 7, 24, 11, 0);
    newReminder3.complete = false;
    newReminder3.flagged = true;
    newReminder3.id = createReminderID()
    reminderArr.push(newReminder3)

    const newReminder4 = Reminder()
    newReminder4.name = "Catch Flight";
    newReminder4.description = "Catch flight to Rome. I haven't gone there since decades."
    newReminder4.dueDate = new Date(2026, 7, 28, 23, 0)
    newReminder4.complete = false
    newReminder4.flagged = true
    newReminder4.id = createReminderID()
    project1.remindersID.push(newReminder4.id)
    reminderArr.push(newReminder4);

    const newReminder5 = Reminder()
    newReminder5.name = "Olympiakos Match";
    newReminder5.description = "Leave early to go see the match with my son at the stadium"
    newReminder5.dueDate = new Date(2026, 10, 28, 20, 0)
    newReminder5.complete = false
    newReminder5.flagged = false
    newReminder5.id = createReminderID()
    project2.remindersID.push(newReminder5.id);
    reminderArr.push(newReminder5);

}

export { loadPlaceholdersReminders, loadPlaceholdersProjects };

