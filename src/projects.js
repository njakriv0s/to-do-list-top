import addIcon from "./icons/plus-thick.svg"
import { gridContainer, reminderArr } from "./index.js";
import { loadPlaceholdersProjects } from "./placeholderReminders.js";

const projectArr = [];

function Project(name, id, remindersID) {
    const project = {name, id, remindersID};
    return project;
}

function createProjectID() {
    return`pro-${crypto.randomUUID()}`;
}

loadPlaceholdersProjects();


const projectMenu = document.querySelector(".menu-projects");
const projectMenuList = document.querySelector(".menu-projects-list");

renderProject(projectArr);


const addProjectDiv = document.createElement("div");
addProjectDiv.classList.add("add-project-div");
projectMenu.appendChild(addProjectDiv);

const addProjectIcon = document.createElement("div");
addProjectIcon.id = "add-project-icon";
addProjectIcon.style.webkitMaskImage = `url(${addIcon})`
addProjectIcon.style.maskImage = `url(${addIcon})`
addProjectDiv.appendChild(addProjectIcon);

const addProjectInput = document.createElement("input");
addProjectInput.type = "text"
addProjectInput.classList.add("add-project-input");
addProjectInput.placeholder = "Add Project Here";
addProjectInput.minLength = 5;
addProjectInput.maxLength = 20;
addProjectInput.required = true;
addProjectDiv.appendChild(addProjectInput);


addProjectInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addNewProject(addProjectInput.value);
        renderProject(projectArr);  
    }
})

addProjectIcon.addEventListener("click", (event) => {
    addNewProject(addProjectInput.value);
    renderProject(projectArr);  
})

function addNewProject(value) {
    const newProject = Project();
    newProject.name = value;
    newProject.id = createProjectID();
    newProject.remindersID = [];
    projectArr.push(newProject);
    addProjectInput.value = "";
}

function renderProject(arr) {
    projectMenuList.innerHTML = "";
    arr.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element.name;
        li.dataset.id = element.id
        projectMenuList.appendChild(li);
    })
    
    
}


export { projectArr, createProjectID, Project };