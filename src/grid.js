import { gridContainer, reminderArr, sortArr } from "./index.js";
import { currentDate } from "./currentDate.js";
import { getNumberOfDays, formatDate } from "./differenceInDays.js";
import { projectArr } from "./projects.js";
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

        createCard(e, arr);})
}

function createCard(element, arr) {

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

        gridCardContentDeleteButton.addEventListener("click", (element) => {
            deleteCard(arr, element, gridCard);
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
                gridContainer.innerHTML = ""
                createGrid(arr);
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

        const gridCardProjectButton = document.createElement("button");
        gridCardProjectButton.type = "button";
        gridCardProjectButton.classList.add("grid-card-project-button");
        gridCardProjectButton.textContent = "Add to Project";
        gridCardContent.appendChild(gridCardProjectButton);

        createDropdownMenu(element, gridCardProjectButton, gridCardContent);
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

    const editButtonDiv = document.createElement("div");
    editButtonDiv.classList.add("edit-button-div")
    card.appendChild(editButtonDiv)
    
    const cancelButton = document.createElement("button");
    cancelButton.type = "submit";
    cancelButton.id = "cancel-button"
    cancelButton.classList.add("edit-form-button")
    cancelButton.textContent = "Cancel"
    editButtonDiv.appendChild(cancelButton);

    cancelButton.addEventListener("click", (event) => {
        gridContainer.innerHTML = "";
        createGrid(reminderArr);
    })

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "submit-button"
    submitButton.classList.add("edit-form-button")
    submitButton.textContent = "Save"
    editButtonDiv.appendChild(submitButton);

    return {submitButton, nameInput, descriptionInput, dateInput};

};

function submitEdit(element, nam, des, dat) {
    element.name = nam.value;
    element.description = des.value;
    element.dueDate = new Date (dat.value);
}

function createDropdownMenu(el, butt, parent) {

    const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown")
        butt.addEventListener("click", (event) => {
            dropdown.classList.add("active");
            
            parent.appendChild(dropdown);
            gridCardColor(el, currentDate(), dropdown)
            
            projectArr.forEach((projEl) => {
                const dropdownItem = document.createElement("a");
                dropdownItem.textContent = projEl.name;
                dropdownItem.classList.add("dropdown-item");
                gridCardColor(el, currentDate(), dropdownItem)
                dropdown.appendChild(dropdownItem);

                dropdownItem.addEventListener("click", (event) => {
                    projEl.remindersID.push(el.id);
                    dropdown.classList.remove("active")
                    console.log(projectArr);
                })
            })
        })
}

export { createGrid, gridCardColor, gridContainer };