import { reminderArr } from "./index.js";
import { currentDate } from "./currentDate.js";

function getNumberOfDays(start, end) {

    const oneDay = 24 * 60 * 60 * 1000;
    let date1 = start; 
    let date2 = end;

    let diffInTime = date2 - date1
    let diffInDays = Math.round(diffInTime/oneDay)

    return diffInDays
}

export { getNumberOfDays };