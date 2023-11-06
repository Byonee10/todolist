import toDoList from "./toDoList";
const userInput = () => {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value
    const dueDate = document.querySelector('#dueDate').value
    const priority = pdocument.querySelector('#priority').value

    toDoList.addTotoDoList(title,description,dueDate,priority);
    toDoList.print();
}

export default userInput;