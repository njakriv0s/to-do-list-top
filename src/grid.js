import { gridContainer, reminderArr } from "./index.js";
import { currentDate } from "./currentDate.js";
import { getNumberOfDays, formatDate } from "./differenceInDays.js";
import completeIcon from "./icons/complete-2.png";

function changeClasses(element) {
    element.classList.remove("today")
    element.classList.remove("weekly")
    element.classList.remove("monthly")
    element.classList.add("complete")
}

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
        gridCardColor(e, currentDate(), gridCardContentBoxTitle)
        gridCardContent.appendChild(gridCardContentBoxTitle);

        const gridCardContentTitle = document.createElement("span")
        gridCardContentTitle.classList.add("card-text");
        gridCardContentTitle.textContent = e.name;
        gridCardContentBoxTitle.appendChild(gridCardContentTitle);

        const gridCardContentBoxDescription = document.createElement("div")
        gridCardContentBoxDescription.classList.add("grid-card-content-box")
        gridCardContentBoxDescription.classList.add("description")
        gridCardColor(e, currentDate(), gridCardContentBoxDescription)
        gridCardContent.appendChild(gridCardContentBoxDescription);

        const gridCardContentDescription = document.createElement("span")
        gridCardContentDescription.classList.add("card-text");
        gridCardContentDescription.textContent = e.description;
        gridCardContentBoxDescription.appendChild(gridCardContentDescription);

        const gridCardContentBoxDate = document.createElement("div")
        gridCardContentBoxDate.classList.add("grid-card-content-box")
        gridCardContentBoxDate.classList.add("description")
        gridCardColor(e, currentDate(), gridCardContentBoxDate)
        gridCardContent.appendChild(gridCardContentBoxDate);

        const gridCardContentDate = document.createElement("span")
        gridCardContentDate.classList.add("card-text");
        gridCardContentDate.textContent = formatDate(e.dueDate);
        gridCardContentBoxDate.appendChild(gridCardContentDate);

        const gridCardContentBoxButtons = document.createElement("div")
        gridCardContentBoxButtons.classList.add("grid-card-content-box")
        gridCardContentBoxButtons.classList.add("description")
        gridCardColor(e, currentDate(), gridCardContentBoxButtons)
        gridCardContent.appendChild(gridCardContentBoxButtons);

        const gridCardContentCompleteButton = document.createElement("div")
        gridCardContentCompleteButton.classList.add("complete-button")
        gridCardContentBoxButtons.appendChild(gridCardContentCompleteButton);

        const gridCardCompleteButtonActive = document.createElement("img")
        gridCardCompleteButtonActive.classList.add("complete-svg")
        gridCardCompleteButtonActive.src = completeIcon;

        gridCardContentCompleteButton.addEventListener("click", (event) => {
            
            if (gridCard.classList.contains("complete")) {

                gridCard.classList.remove("complete")
                gridCardContentBoxTitle.classList.remove("complete")
                gridCardContentBoxDescription.classList.remove("complete")
                gridCardContentBoxDate.classList.remove("complete")
                gridCardContentBoxButtons.classList.remove("complete")

                gridCardContentCompleteButton.classList.remove("active");

                gridCardColor(e, currentDate(), gridCard)
                gridCardColor(e, currentDate(), gridCardContentBoxTitle)
                gridCardColor(e, currentDate(), gridCardContentBoxDescription)
                gridCardColor(e, currentDate(), gridCardContentBoxDate)
                gridCardColor(e, currentDate(), gridCardContentBoxButtons)

                gridCardCompleteButtonActive.remove();

                return;


                
                


                

            }

            if (!gridCardContentCompleteButton.classList.contains("active")) {

                gridCardContentCompleteButton.classList.add("active")

                changeClasses(gridCard);
                changeClasses(gridCardContentBoxTitle);
                changeClasses(gridCardContentBoxDescription);
                changeClasses(gridCardContentBoxDate);
                changeClasses(gridCardContentBoxButtons);

                
                gridCardContentCompleteButton.appendChild(gridCardCompleteButtonActive);

            }
            
            

        })



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