import item from "./item";

const toDoList = (() => {
    const toDoList = [];
    let idCounter = 1;
    
    function addTotoDoList(title,description,dueDate,priority){
        const newItem = item(idCounter,title,description,dueDate,priority,idCounter);
        idCounter++;
        toDoList.push(newItem);
    }
    function removeItemById(id){
        toDoList = toDoList.filter((todo) => todo.id !== id);
    }

    function editItem(id,newTitle,newDescription,newDueDate,newPriority){
        const index = toDoList.findIndex((todo) => todo.id == id);
        if(index !== -1){
            toDoList[index].title = newTitle;
            toDoList[index].description = newDescription;
            toDoList[index].dueDate = newDueDate;
            toDoList[index].priority = newPriority;
        }
    }

    function filterItemsByPriority(priority){
        return toDoList.filter((todo) => todo.priority == priority);
    }

    function saveToLocalStorage(){
        localStorage.setItem('toDoList',JSON.stringify(toDoList));
    }
    function loadFromLocalStorage(){
        const storedtoDoList = localStorage.getItem('toDoList');

        if(storedtoDoList){
            toDoList = JSON.parse(storedtoDoList);
        }
    }

    return{
        addTotoDoList, 
        removeItemById,
        editItem,
        filterItemsByPriority,
        saveToLocalStorage,
        loadFromLocalStorage
    }
})();
export default toDoList;
