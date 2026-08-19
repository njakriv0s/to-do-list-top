import addIcon from "./icons/plus-thick.svg"

const projectArr = [];

const projectMenu = document.querySelector(".menu-projects");
const projectMenuList = document.querySelector(".menu-project-list");



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
        addProject()
    }
})

addProjectIcon.addEventListener("click", (event) => {
    addProject();
})

// function addProject() {
//     if (addProjectInput.value.length >= 5) {
//         projectArr.push(addProjectInput.value);
        
//         const newProject = document.createElement("li");
//         newProject.textContent = addProjectInput.value;
//         // projectMenuList.appendChild(newProject);

//         addProjectInput.value = ""
//         console.log(projectArr);
        

        
//     }
//     else if (addProjectInput.value.length < 5) {
//         console.log("Project name too short.Min lenght 5 characters.")
//     }
// }

// function appendProject(input) {
//     const project = document.createElement("li");
//     project.textContent = input.value;
//     projectMenuList.appendChild(project);

// }


export { projectArr };