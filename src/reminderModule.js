function Reminder(name, description, dueDate, complete, flagged, id ) {
    const reminder = {name, description, dueDate, complete, flagged, id}
    return reminder;
}

export { Reminder };