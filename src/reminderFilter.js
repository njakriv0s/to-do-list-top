import { reminderArr } from "./index.js";
import { currentDate } from "./currentDate.js";
import { getNumberOfDays } from "./differenceInDays.js";

function isComplete(arr) {
    const completeArr = []
    reminderArr.forEach((rem) => {
       if (rem.complete === true) {
            completeArr.push(rem)
       }
    })

    return completeArr;
}

function isFlagged(arr) {
    const flaggedArr = []
    reminderArr.forEach((rem) => {
       if (rem.flagged === true) {
            flaggedArr.push(rem)
       }
    })

    return flaggedArr;
}

function isMonthly(arr) {
    const monthlyArr = [];
    reminderArr.forEach((rem) => {
        if (getNumberOfDays(currentDate(), rem.dueDate) < 31 && getNumberOfDays(currentDate(), rem.dueDate) > 7) {
            monthlyArr.push(rem);
        }
    })
    return monthlyArr;
}

function isWeekly(arr) {
    const weeklyArr = [];
    reminderArr.forEach((rem) => {
        if (getNumberOfDays(currentDate(), rem.dueDate) <=7 && getNumberOfDays(currentDate(), rem.dueDate) > 1) {
            weeklyArr.push(rem);
        }
    })
    return weeklyArr;
}

function isToday(arr) {
    const todayArr = [];
    reminderArr.forEach((rem) => {
        if (getNumberOfDays(currentDate(), rem.dueDate) <=1 && getNumberOfDays(currentDate(), rem.dueDate) >= 0) {
            todayArr.push(rem);
        }
    })
    return todayArr;
}

export { isComplete, isFlagged, isMonthly, isWeekly, isToday };