import React, {useState} from "react";
import {Todo} from "../models/todo";

type TodosContextObj = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    todos: [],
    addTodo: (text: string) => {
    },
    removeTodo: (id: string) => {
    }
});
const TodosContextProvider: React.FC = props => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos(prevState => [newTodo, ...prevState])
    }
    const removeItemHandler = (id: string) => {
        setTodos(prevState => prevState.filter(it => it.id !== id))
    }

    const contextVal: TodosContextObj = {
        todos,
        addTodo: addTodoHandler,
        removeTodo: removeItemHandler
    }

    return (
        <TodosContext.Provider value={contextVal}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;

