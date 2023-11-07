    import item from "./item";

    const toDoList = (() => {
        let toDoList = [];
        let idCounter = 1;
        function getToDoList(){
            return toDoList;
        }
        function addTotoDoList(object){
            const newItem = item(idCounter,object.title,object.description,object.dueDate,object.priority,object.completed);
            idCounter++;
            toDoList.push(newItem);
            return newItem;
        }
        
        function removeItemById(id){
        
            toDoList = toDoList.filter((todo) => todo.id !== parseInt(id));
            console.log("removeitembyİd works");

        }

        function editItem(id,newTitle,newDescription,newDueDate,newPriority,newCompleted){
            const index = toDoList.findIndex((todo) => todo.id == id);
            if(index !== -1){
                toDoList[index].title = newTitle;
                toDoList[index].description = newDescription;
                toDoList[index].dueDate = newDueDate;
                toDoList[index].priority = newPriority;
                toDolist[index].completed = newCompleted;
            }
        }
        function print(){
            
            for(let i = 0;i<toDoList.length;i++){
                console.log(toDoList[i]);
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
            getToDoList,
            addTotoDoList, 
            removeItemById,
            editItem,
            filterItemsByPriority,
            print,
            saveToLocalStorage,
            loadFromLocalStorage
            
        }
    })();
    export default toDoList;
