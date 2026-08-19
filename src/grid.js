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

function createGrid(arr) {

    sortArr(arr, "dueDate");

    arr.forEach((e) => {

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

        // DELETE ICON
        const gridCardContentDeleteButton = document.createElement("div")
        gridCardContentDeleteButton.classList.add("delete-button")
        gridCardContentDeleteButton.classList.add("card-icon")
        gridCardContentDeleteButton.style.webkitMaskImage = `url(${deleteIcon})`
        gridCardContentDeleteButton.style.maskImage = `url(${deleteIcon})`
        gridCardContentBoxButtons.appendChild(gridCardContentDeleteButton);

        gridCardContentDeleteButton.addEventListener("click", (e) => {
            deleteCard(arr, e, gridCard);
            console.log(arr);
        })

        // EDIT ICON
        const gridCardContentEditButton = document.createElement("div")
        gridCardContentEditButton.classList.add("edit-button")
        gridCardContentEditButton.classList.add("card-icon")
        gridCardContentEditButton.style.webkitMaskImage = `url(${editIcon})`
        gridCardContentEditButton.style.maskImage = `url(${editIcon})`
        gridCardContentBoxButtons.appendChild(gridCardContentEditButton);

        // EDIT
        gridCardContentEditButton.addEventListener("click", (event) => {
            
            const {submitButton, nameInput, descriptionInput, dateInput} = editCard(e, 
                gridCardContentTitle, 
                gridCardContentDescription, 
                gridCardContentDate, 
                gridCardContentBoxButtons, 
                gridCardContentBoxTitle, 
                gridCardContentBoxDescription, 
                gridCardContentBoxDate, 
                gridCard)

            submitButton.addEventListener("click", (event) => {

                submitEdit(e, nameInput, descriptionInput, dateInput);

                // DELETE EDIT CARD HERE
                gridContainer.innerHTML = ""
                // createCard(e);
                // sortArr(arr, "dueDate")
                createGrid(arr);

                console.log(arr);

            })

        })

        // COMPLETE ICON
        const gridCardContentCompleteButton = document.createElement("div")
        gridCardContentCompleteButton.classList.add("complete-button")
        gridCardContentCompleteButton.classList.add("card-icon")
        gridCardContentBoxButtons.appendChild(gridCardContentCompleteButton);

        const gridCardCompleteButtonActive = document.createElement("img")
        gridCardCompleteButtonActive.classList.add("complete-svg")
        gridCardCompleteButtonActive.src = completeIcon;

        if (e.complete === true) {
            gridCardContentCompleteButton.classList.add("active")

            changeClasses(gridCard);
            changeClasses(gridCardContentBoxTitle);
            changeClasses(gridCardContentBoxDescription);
            changeClasses(gridCardContentBoxDate);
            changeClasses(gridCardContentBoxButtons);

        
            gridCardContentCompleteButton.appendChild(gridCardCompleteButtonActive);
        }

        gridCardContentCompleteButton.addEventListener("click", (event) => {
            
            completeCard(e, 
                gridCard, 
                gridCardContentBoxTitle, 
                gridCardContentBoxDescription, 
                gridCardContentBoxDate, 
                gridCardContentBoxButtons,
                gridCardContentCompleteButton, 
                gridCardCompleteButtonActive
            )
            
        })

        // FLAG ICON
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
            flag(e, gridCardContentFlagButton, gridCard);
        })

        gridCardContentBoxButtons.appendChild(gridCardContentFlagButton);

        

    })
}

function createCard(element) {

    const gridCard = document.createElement("div");
        gridCard.classList.add("grid-card");

        gridCardColor(element, currentDate(), gridCard)

        gridContainer.appendChild(gridCard);

        const gridCardContent = document.createElement("div");
        gridCardContent.classList.add("grid-card-content");
        gridCard.appendChild(gridCardContent);

        const gridCardContentBoxTitle = document.createElement("div")
        gridCardContentBoxTitle.classList.add("grid-card-content-box")
        gridCardColor(element, currentDate(), gridCardContentBoxTitle)
        gridCardContent.appendChild(gridCardContentBoxTitle);

        const gridCardContentTitle = document.createElement("span")
        gridCardContentTitle.classList.add("card-text");
        gridCardContentTitle.textContent = element.name;
        gridCardContentBoxTitle.appendChild(gridCardContentTitle);

        const gridCardContentBoxDescription = document.createElement("div")
        gridCardContentBoxDescription.classList.add("grid-card-content-box")
        gridCardContentBoxDescription.classList.add("description")
        gridCardColor(element, currentDate(), gridCardContentBoxDescription)
        gridCardContent.appendChild(gridCardContentBoxDescription);

        const gridCardContentDescription = document.createElement("span")
        gridCardContentDescription.classList.add("card-text");
        gridCardContentDescription.textContent = element.description;
        gridCardContentBoxDescription.appendChild(gridCardContentDescription);

        const gridCardContentBoxDate = document.createElement("div")
        gridCardContentBoxDate.classList.add("grid-card-content-box")
        gridCardContentBoxDate.classList.add("description")
        gridCardColor(element, currentDate(), gridCardContentBoxDate)
        gridCardContent.appendChild(gridCardContentBoxDate);

        const gridCardContentDate = document.createElement("span")
        gridCardContentDate.classList.add("card-text");
        gridCardContentDate.textContent = formatDate(element.dueDate);
        gridCardContentBoxDate.appendChild(gridCardContentDate);

        const gridCardContentBoxButtons = document.createElement("div")
        gridCardContentBoxButtons.classList.add("grid-card-content-box")
        gridCardContentBoxButtons.classList.add("description")
        gridCardColor(element, currentDate(), gridCardContentBoxButtons)
        gridCardContent.appendChild(gridCardContentBoxButtons);

        // DELETE ICON
        const gridCardContentDeleteButton = document.createElement("div")
        gridCardContentDeleteButton.classList.add("delete-button")
        gridCardContentDeleteButton.classList.add("card-icon")
        gridCardContentDeleteButton.style.webkitMaskImage = `url(${deleteIcon})`
        gridCardContentDeleteButton.style.maskImage = `url(${deleteIcon})`
        gridCardContentBoxButtons.appendChild(gridCardContentDeleteButton);

        gridCardContentDeleteButton.addEventListener("click", (e) => {
            deleteCard(arr, e, gridCard);
            console.log(arr);
        })

        // EDIT ICON
        const gridCardContentEditButton = document.createElement("div")
        gridCardContentEditButton.classList.add("edit-button")
        gridCardContentEditButton.classList.add("card-icon")
        gridCardContentEditButton.style.webkitMaskImage = `url(${editIcon})`
        gridCardContentEditButton.style.maskImage = `url(${editIcon})`
        gridCardContentBoxButtons.appendChild(gridCardContentEditButton);

        // EDIT
        gridCardContentEditButton.addEventListener("click", (event) => {
            
            const {submitButton, nameInput, descriptionInput, dateInput} = editCard(element, 
                gridCardContentTitle, 
                gridCardContentDescription, 
                gridCardContentDate, 
                gridCardContentBoxButtons, 
                gridCardContentBoxTitle, 
                gridCardContentBoxDescription, 
                gridCardContentBoxDate, 
                gridCard)

            submitButton.addEventListener("click", (event) => {

                submitEdit(element, nameInput, descriptionInput, dateInput);
                console.log(arr);

            })

        })

        


        // COMPLETE ICON
        const gridCardContentCompleteButton = document.createElement("div")
        gridCardContentCompleteButton.classList.add("complete-button")
        gridCardContentCompleteButton.classList.add("card-icon")
        gridCardContentBoxButtons.appendChild(gridCardContentCompleteButton);

        const gridCardCompleteButtonActive = document.createElement("img")
        gridCardCompleteButtonActive.classList.add("complete-svg")
        gridCardCompleteButtonActive.src = completeIcon;

        if (element.complete === true) {
            gridCardContentCompleteButton.classList.add("active")

            changeClasses(gridCard);
            changeClasses(gridCardContentBoxTitle);
            changeClasses(gridCardContentBoxDescription);
            changeClasses(gridCardContentBoxDate);
            changeClasses(gridCardContentBoxButtons);

        
            gridCardContentCompleteButton.appendChild(gridCardCompleteButtonActive);
        }

        gridCardContentCompleteButton.addEventListener("click", (event) => {
            
            completeCard(element, 
                gridCard, 
                gridCardContentBoxTitle, 
                gridCardContentBoxDescription, 
                gridCardContentBoxDate, 
                gridCardContentBoxButtons,
                gridCardContentCompleteButton, 
                gridCardCompleteButtonActive
            )
            
        })

        // FLAG ICON
        const gridCardContentFlagButton = document.createElement("div")
        gridCardContentFlagButton.classList.add("flag-button")
        gridCardContentFlagButton.classList.add("card-icon")
        gridCardContentFlagButton.style.webkitMaskImage = `url(${flagIcon})`
        gridCardContentFlagButton.style.maskImage = `url(${flagIcon})`

        if (element.flagged === true) {
            gridCardContentFlagButton.classList.add("active")
            gridCard.classList.add("flag")
        }

        gridCardContentFlagButton.addEventListener("click", (element) => {
            flag(element, gridCardContentFlagButton, gridCard);
        })

        gridCardContentBoxButtons.appendChild(gridCardContentFlagButton);

}

function gridCardColor(element, dateToday, elementDiv) {

    if (getNumberOfDays(dateToday, element.dueDate) <=1 && getNumberOfDays(dateToday, element.dueDate) >= 0) {
            elementDiv.classList.add("today");
    }
    if (getNumberOfDays(dateToday, element.dueDate) <=7 && getNumberOfDays(dateToday, element.dueDate) > 1) {
            elementDiv.classList.add("weekly");
    }
    if (getNumberOfDays(dateToday, element.dueDate) <= 31 && getNumberOfDays(dateToday, element.dueDate) > 7) {
            elementDiv.classList.add("monthly");
    }
    if (getNumberOfDays(dateToday, element.dueDate) >= 32) {
            elementDiv.classList.add("later");
    }
}

function completeCard(element, 
                eCard, 
                eCardContentBoxTitle, 
                eCardContentBoxDescription, 
                eCardContentBoxDate, 
                eCardContentBoxButtons,
                eCardContentCompleteButton,
                eCardCompleteButtonActive) {

    if (eCard.classList.contains("complete")) {

        eCard.classList.remove("complete")
        eCardContentBoxTitle.classList.remove("complete")
        eCardContentBoxDescription.classList.remove("complete")
        eCardContentBoxDate.classList.remove("complete")
        eCardContentBoxButtons.classList.remove("complete")

        eCardContentCompleteButton.classList.remove("active");

        gridCardColor(element, currentDate(), eCard)
        gridCardColor(element, currentDate(), eCardContentBoxTitle)
        gridCardColor(element, currentDate(), eCardContentBoxDescription)
        gridCardColor(element, currentDate(), eCardContentBoxDate)
        gridCardColor(element, currentDate(), eCardContentBoxButtons)

        eCardCompleteButtonActive.remove();
        element.complete = false;

        return ;
    }

    if (!eCardContentCompleteButton.classList.contains("active")) {

        eCardContentCompleteButton.classList.add("active")

        changeClasses(eCard);
        changeClasses(eCardContentBoxTitle);
        changeClasses(eCardContentBoxDescription);
        changeClasses(eCardContentBoxDate);
        changeClasses(eCardContentBoxButtons);

        
        eCardContentCompleteButton.appendChild(eCardCompleteButtonActive);
        element.complete = true;
        console.log(reminderArr);

    }

};

function flag(element, element2, element3) {
    if (element2.classList.contains("active")) {
        element2.classList.remove("active")
        element3.classList.remove("flag")
        element.flagged = false
    }
    else if (!element2.classList.contains("active")) {
        element2.classList.add("active")
        element3.classList.add("flag")
        element.flagged = true
    }
}

function deleteCard(array, element, cardElement) {
    const item = array.indexOf(element);
    array.splice(item, 1);
    cardElement.remove()
};

function editCard(element, oldTitle,oldDesc, oldDate, oldButt, boxTitle, boxDes, boxDat, card) {

    oldTitle.remove();
    oldDesc.remove();
    oldDate.remove();
    oldButt.remove();

    const form = document.createElement("form");
    form.classList.add("edit-form");
    
    const nameInput = document.createElement("input");
    nameInput.classList.add("form-input")
    nameInput.type = "text";
    nameInput.id = "name-input";
    nameInput.name = "name";
    nameInput.value = element.name;
    nameInput.required = true;
    boxTitle.appendChild(nameInput);

    const descriptionInput = document.createElement("textarea");
    descriptionInput.classList.add("form-input")
    // descriptionInput.type = "text";
    descriptionInput.maxLength = 200;
    descriptionInput.id = "description-input";
    descriptionInput.name = "description";
    descriptionInput.value = element.description;
    descriptionInput.required = true;
    boxDes.appendChild(descriptionInput);
    
    const dateInput = document.createElement("input");
    dateInput.classList.add("form-input")
    dateInput.type = "datetime-local";
    dateInput.id = "date-input";
    dateInput.name = "date";
    dateInput.value = element.dueDate;
    dateInput.required = true;
    boxDat.appendChild(dateInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "submit-button"
    submitButton.textContent = "Save"
    card.appendChild(submitButton);

    return {submitButton, nameInput, descriptionInput, dateInput};

};

function submitEdit(element, nam, des, dat) {
    element.name = nam.value;
    element.description = des.value;
    element.dueDate = new Date (dat.value);
}

export { createGrid, gridCardColor, gridContainer };