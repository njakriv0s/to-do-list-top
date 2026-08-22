import { reminderArr, sortArr } from "./index.js";
import { gridContainer } from "./grid.js";
import { projectArr } from "./projects.js";


const projectHeader = document.getElementById("project-button");

projectHeader.addEventListener("click", (event) => {
    gridContainer.innerHTML = "";

    const gridProjectContainer = document.createElement("div");
    gridProjectContainer.classList.add("grid-project-continer");
    gridContainer.appendChild(gridProjectContainer);

    projectArr.forEach((e) => {
        
        const gridProjectCard = document.createElement("div");
        gridProjectCard.classList.add("grid-project-card");
        gridProjectContainer.appendChild(gridProjectCard);

        const obj = findByID(e, gridProjectCard);
        sortArr(obj, "dueDate");

        console.log(obj);
        
        obj.forEach((item) => {
        const gridProjectReminderName = document.createElement("span");    
        gridProjectReminderName.textContent = item.name;
        gridProjectCard.appendChild(gridProjectReminderName);
        })  
    })
})

function findByID(element, projCard) {
    const result = element.remindersID.map((number) => {
        return reminderArr.find(item => item.id === number)
    })
    return result;
};
