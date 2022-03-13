import React, {useRef} from "react";
import classes from "./NewTodoItem.module.css";

const NewTodoItem: React.FC<{ onAddTodo: (text: string) => void }> = props => {
    const inputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const currentValue = inputRef.current!.value;
        if (currentValue.trim().length === 0) {
            // throw an error
            console.error('VALUE CANNOT BE EMPTY')
            return;
        }
        console.log('the value:', currentValue)
        props.onAddTodo(currentValue);

    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">新的Todo</label>
            <input
                type="text"
                id="text"
                ref={inputRef}
            />
            <button>增加</button>
        </form>
    )

}
export default NewTodoItem;