import item from "./item";

const Projects = (() => {
    const projects = [];
    let idCounter = 1;
    
    function addToProjects(title,description,dueDate,priority){
        const newItem = item(idCounter,title,description,dueDate,priority,idCounter);
        idCounter++;
        projects.push(newItem);
    }
    

    return{
        addToProjects, projects
    }
})();
export default Projects;
