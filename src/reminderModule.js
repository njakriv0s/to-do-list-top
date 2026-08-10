function Reminder(name, description, dueDate, complete, flagged ) {
    const reminder = {name, description, dueDate, complete, flagged}
    return reminder;
}

export { Reminder };