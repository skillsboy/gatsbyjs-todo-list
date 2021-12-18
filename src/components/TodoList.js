import * as React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
    return (
        <div className="todoList">
            <ul>
                {todos.map(todo => <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />)}
            </ul>
        </div>
    );
}

export default TodoList;