import React from "react";
import {Todo} from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onItemRemovedById: (id: string) => void }> = props => {
    const itemClickedHandler = (id: string, text: string) => {
        props.onItemRemovedById(id);
    }
    return (
        <ul className={classes.todos}>
            {props.items.map(it => <TodoItem key={it.id} text={it.todoText}
                                             onItemClicked={itemClickedHandler.bind(null, it.id)}/>)}
        </ul>
    )

}
export default Todos;