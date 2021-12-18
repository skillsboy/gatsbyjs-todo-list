import * as React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = React.useState([]);

    function saveLocalTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function getLocalTodos() {
        if (!localStorage.getItem("todos")) {
            localStorage.setItem("todos", JSON.stringify(
                [
                    {
                        id: -2,
                        value: "Sample 1",
                        done: true
                    },
                    {
                        id: -1,
                        value: "Sample 2",
                        done: false
                    }
                ]
            ));
        }

        const todosLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todosLocal);
    }

    React.useEffect(() => {
        // if (typeof window !== 'undefined') {
        getLocalTodos();
    }, []);

    React.useEffect(() => {
        // if (typeof window !== 'undefined') {
        saveLocalTodos();
    }, [todos]);

    return (
        <div className="todoApp">
            <TodoForm setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default TodoApp;