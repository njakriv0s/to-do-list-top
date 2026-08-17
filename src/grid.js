import { gridContainer, reminderArr, sortArr } from "./index.js";
import { currentDate } from "./currentDate.js";
import { getNumberOfDays, formatDate } from "./differenceInDays.js";
import completeIcon from "./icons/complete-2.png";
import flagIcon from "./icons/flag.svg";
import deleteIcon from "./icons/delete.svg";
import editIcon from "./icons/edit.svg";


function changeClasses(element) {
    element.classList.remove("today")
    element.classList.remove("weekly")
    element.classList.remove("monthly")
    element.classList.add("complete")
}

function createGrid() {

    sortArr(reminderArr, "dueDate");

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

        const gridCardContentDeleteButton = document.createElement("div")
        gridCardContentDeleteButton.classList.add("delete-button")
        gridCardContentDeleteButton.classList.add("card-icon")
        gridCardContentDeleteButton.style.webkitMaskImage = `url(${deleteIcon})`
        gridCardContentDeleteButton.style.maskImage = `url(${deleteIcon})`
        gridCardContentBoxButtons.appendChild(gridCardContentDeleteButton);

        gridCardContentDeleteButton.addEventListener("click", (e) => {
            deleteCard(reminderArr, e, gridCard);
            console.log(reminderArr);
        })

          const gridCardContentEditButton = document.createElement("div")
        gridCardContentEditButton.classList.add("edit-button")
        gridCardContentEditButton.classList.add("card-icon")
        gridCardContentEditButton.style.webkitMaskImage = `url(${editIcon})`
        gridCardContentEditButton.style.maskImage = `url(${editIcon})`
        gridCardContentBoxButtons.appendChild(gridCardContentEditButton);

        const gridCardContentCompleteButton = document.createElement("div")
        gridCardContentCompleteButton.classList.add("complete-button")
        gridCardContentCompleteButton.classList.add("card-icon")
        gridCardContentBoxButtons.appendChild(gridCardContentCompleteButton);

        const gridCardCompleteButtonActive = document.createElement("img")
        gridCardCompleteButtonActive.classList.add("complete-svg")
        gridCardCompleteButtonActive.src = completeIcon;

        const gridCardContentFlagButton = document.createElement("div")
        gridCardContentFlagButton.classList.add("flag-button")
        gridCardContentFlagButton.classList.add("card-icon")
        gridCardContentFlagButton.style.webkitMaskImage = `url(${flagIcon})`
        gridCardContentFlagButton.style.maskImage = `url(${flagIcon})`

        if (e.flagged === true) {
            gridCardContentFlagButton.classList.add("active")
            gridCard.classList.add("flag")
        }

        gridCardContentFlagButton.addEventListener("click", (element) => {
            flag(gridCardContentFlagButton, gridCard);
        })

        gridCardContentBoxButtons.appendChild(gridCardContentFlagButton);
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

                return ;
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

function flag(element, element2) {
    if (element.classList.contains("active")) {
        element.classList.remove("active")
        element2.classList.remove("flag")
    }
    else if (!element.classList.contains("active")) {
        element.classList.add("active")
        element2.classList.add("flag")
    }
}

function deleteCard(array, element, cardElement) {
    const item = array.indexOf(element);
    array.splice(item, 1);
    cardElement.remove()
};

export { createGrid, gridCardColor };