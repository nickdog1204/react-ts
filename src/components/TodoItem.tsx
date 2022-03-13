import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onItemClicked: (text: string) => void }> = props => {
    return (
        <li className={classes.item} onClick={props.onItemClicked.bind(null, props.text)}>
            {props.text}
        </li>
    )
}

export default TodoItem;
