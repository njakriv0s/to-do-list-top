import { Reminder } from "./reminderModule.js"
import { modalOverlay } from "./index.js";
import closeIcon from "./icons/close.svg"
import flagIcon from "./icons/flag.svg"
import { currentDate } from "./currentDate.js";
import { gridContainer, createGrid } from "./grid.js";

const addButton = document.getElementById("icon-add");

const modal = document.createElement("div");
modal.classList.add("modal");

function AddNewReminder(addButton, reminderArr) {
    addButton.addEventListener("click", (e) => {
        createModal();
        let isComplete = false;
        let isFlagged = false;

        // CREATE REMINDER FORM
        const form = document.createElement("form");
        form.classList.add("add-form");

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("add-form-div");
        modal.appendChild(nameDiv);

        const nameLabel = document.createElement("label");
        nameLabel.classList.add("add-form-label");
        nameLabel.textContent = "Name";
        nameDiv.appendChild(nameLabel)

        const nameInput = document.createElement("input")
        nameInput.type = "text"
        nameInput.placeholder = "Reminder Name"
        nameInput.classList.add("add-form-input");
        nameDiv.appendChild(nameInput);



        const desDiv = document.createElement("div");
        desDiv.classList.add("add-form-div");
        modal.appendChild(desDiv);

        const desLabel = document.createElement("label");
        desLabel.classList.add("add-form-label");
        desLabel.textContent = "Description";
        desDiv.appendChild(desLabel)

        const desInput = document.createElement("textarea")
        // desInput.type = "text"
        desInput.maxLength = 200;
        desInput.placeholder = "Reminder Description"
        desInput.classList.add("add-form-input");
        desInput.classList.add("add-form-description");
        desDiv.appendChild(desInput);


        
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("add-form-div");
        modal.appendChild(dateDiv);

        const dateLabel = document.createElement("label");
        dateLabel.classList.add("add-form-label");
        dateLabel.textContent = "Date";
        dateDiv.appendChild(dateLabel);

        const dateInput = document.createElement("input")
        dateInput.type = "datetime-local"
        // dateInput.placeholder = "Reminder Description"
        // dateInput.classList.add("add-form-input");
        dateDiv.appendChild(dateInput);
        
        
        const flaggedDiv = document.createElement("div");
        flaggedDiv.classList.add("add-form-div");
        modal.appendChild(flaggedDiv);

        const flaggedLabel = document.createElement("label");
        flaggedLabel.classList.add("add-form-label");
        flaggedLabel.textContent = "Flagged";
        flaggedDiv.appendChild(flaggedLabel);

        const flaggedDivInput = document.createElement("div");
        flaggedDivInput.id = "flagged-div-input";
        flaggedDiv.appendChild(flaggedDivInput);

        const flagButton = document.createElement("div")
        flagButton.id = "flag-button"
        flagButton.style.webkitMaskImage = `url(${flagIcon})`
        flagButton.style.maskImage = `url(${flagIcon})`
        flaggedDivInput.appendChild(flagButton);

        flagButton.addEventListener("click", (event) => {
            if (isFlagged === false) {
                isFlagged = true;
                flagButton.classList.add("active");
                console.log(isFlagged);
            }
            else if (isFlagged === true) {
                isFlagged = false;
                flagButton.classList.remove("active");
                console.log(isFlagged);
            }
        })

        

        const addSubmitButton = document.createElement("button");
        addSubmitButton.type = "submit";
        addSubmitButton.id = "add-submit-button"
        addSubmitButton.textContent = "Save"
        modal.appendChild(addSubmitButton);

        addSubmitButton.addEventListener("click", (event) => {
            const addReminder = Reminder()
            addReminder.name = nameInput.value;
            addReminder.description = desInput.value;
            addReminder.dueDate = new Date(dateInput.value);
            addReminder.complete = isComplete;
            addReminder.flagged = isFlagged;
            reminderArr.push(addReminder);
            modalOverlay.remove();
            gridContainer.innerHTML = "";
            createGrid(reminderArr);
            


            console.log(reminderArr);
        })


})
}


function createModal() {
    modalOverlay.classList.add("active");
        
        const closeButton = document.createElement("div")
        closeButton.id = "close-button"
        closeButton.style.webkitMaskImage = `url(${closeIcon})`
        closeButton.style.maskImage = `url(${closeIcon})`
        modalOverlay.appendChild(closeButton);

        closeButton.addEventListener("click", (event) => {
            modalOverlay.classList.remove("active");
        })

        modalOverlay.appendChild(modal);
}

function submitAdd() {};

export { addButton, modal, AddNewReminder }