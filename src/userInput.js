import toDoList from "./toDoList";
const userInput = () => {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value
    const dueDate = document.querySelector('#dueDate').value
    const priority = document.querySelector('#priority').value
    
   return {
    title,description,dueDate,priority,completed:false
   }
   
}

export default userInput;