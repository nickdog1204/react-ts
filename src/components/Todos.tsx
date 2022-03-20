import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import {TodosContext} from "../store/todos-context";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const itemClickedHandler = (id: string, text: string) => {
        todosCtx.removeTodo(id);
    }
    return (
        <ul className={classes.todos}>
            {todosCtx.todos.map(it => <TodoItem key={it.id} text={it.todoText}
                                                onItemClicked={itemClickedHandler.bind(null, it.id)}/>)}
        </ul>
    )

}
export default Todos;