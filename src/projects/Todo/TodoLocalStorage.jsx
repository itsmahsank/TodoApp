const TodoKey = "ReactTodo";

// Get Todos from LocalStorage, fallback to empty array if there's nothing
export const getLocalStorageTodoData = () => {
        const rawTodos = localStorage.getItem(TodoKey);
        if (!rawTodos) return [];
        return JSON.parse(rawTodos);
};

// Set Todos to LocalStorage
export const SetLocalStorageTodoData = (Task) => {
  
 return localStorage.setItem(TodoKey, JSON.stringify(Task));
  
};
