import './App.css';
import Todos from "./components/Todos";
import {Todo} from "./models/todo";
import NewTodoItem from "./components/NewTodoItem";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos(prevState => [newTodo, ...prevState])
    }
    const removeItemHandler = (id: string) => {
        setTodos(prevState => prevState.filter(it => it.id !== id))
    }
    return (
        <div>
            <NewTodoItem onAddTodo={addTodoHandler}/>
            <Todos items={todos} onItemRemovedById={removeItemHandler}/>
        </div>
    );
}

export default App;
