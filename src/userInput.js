import Projects from "./Projects";

const userInput = () => {
    const title = prompt("Title:");
    const description = prompt("Description:");
    const dueDate = prompt("Due date:");
    const priority = prompt("Priority");

    Projects.addToProjects(title,description,dueDate,priority);
    console.log(Projects.projects);
}

export default userInput;