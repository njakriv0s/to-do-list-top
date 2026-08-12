import { gridContainer, reminderArr } from "./index.js";
import { currentDate } from "./currentDate.js";
import { getNumberOfDays } from "./differenceInDays.js";

function createGrid() {
    reminderArr.forEach((e) => {

        const gridCard = document.createElement("div");
        gridCard.classList.add("grid-card");
        gridCardColor(e, currentDate(), gridCard)
        gridContainer.appendChild(gridCard);

        const gridCardContent = document.createElement("div");
        gridCardContent.classList.add("grid-card-content");
        gridCard.appendChild(gridCardContent);

        const gridCardContentBoxTitle = document.createElement("div")
        gridCardContentBoxTitle.classList.add("grid-card-content-box")
        gridCardContent.appendChild(gridCardContentBoxTitle);

        const gridCardContentTitle = document.createElement("span")
        gridCardContentTitle.classList.add("card-text");
        gridCardContentTitle.textContent = e.name;
        gridCardContentBoxTitle.appendChild(gridCardContentTitle);

        const gridCardContentBoxDescription = document.createElement("div")
        gridCardContentBoxDescription.classList.add("grid-card-content-box")
        gridCardContentBoxDescription.classList.add("description")
        gridCardContent.appendChild(gridCardContentBoxDescription);

        const gridCardContentDescription = document.createElement("span")
        gridCardContentDescription.classList.add("card-text");
        gridCardContentDescription.textContent = e.description;
        gridCardContentBoxDescription.appendChild(gridCardContentDescription);

    })
}

function gridCardColor(element, dateToday, elementDiv) {

    if (getNumberOfDays(dateToday, element.dueDate) <=1 && getNumberOfDays(dateToday, element.dueDate) >= 0) {
            elementDiv.classList.add("today");
    }
    if (getNumberOfDays(dateToday, element.dueDate) <=7 && getNumberOfDays(dateToday, element.dueDate) > 1) {
            elementDiv.classList.add("weekly");
    }
    if (getNumberOfDays(dateToday, element.dueDate) < 31 && getNumberOfDays(dateToday, element.dueDate) > 7) {
            elementDiv.classList.add("monthly");
    }
}


export { createGrid, gridCardColor };