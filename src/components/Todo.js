import React from "react";

function Todo({ todo, setTodos }) {
    const [editable, setEditable] = React.useState(false);
    const [editing, setEditing] = React.useState(false);
    const input = React.useRef(null);

    React.useEffect(() => {
        if (editable) input.current.focus();
    }, [editable]);

    function handleDelete() {
        setTodos(function (todos) {
            return todos.filter(function (el) {
                return el.id !== todo.id;
            });
        }
        );
    }

    function handleChange(e) {
        setTodos(todos => {
            return todos.map(item => item.id === todo.id ? { ...item, value: e.target.value } : item);
        });
    }

    function handleEdit() {
        setEditable(!editable);
        setEditing(!editing);
    }

    function handleClick() {
        setTodos(todos => {
            return todos.map(item => item.id === todo.id ? { ...item, done: !todo.done } : item);
        });
    }

    return (
        <li className="todoList__item">
            <div onClick={handleClick} tabIndex="0" className={`todoList__content ${editable ? "todoList__hidden" : ""} ${todo.done ? "todoList__done" : ""}`} role="button">{todo.value}</div>
            <input ref={input} className={`todoList__content ${!editable ? "todoList__hidden" : ""}`} value={todo.value} type="text" onChange={handleChange} />
            <button className={`todoList__editBtn ${editing ? "todoList__editBtn--editing" : ""}`} type="button" onClick={handleEdit}><i className="far fa-edit"></i></button>
            <button className="todoList__delBtn" type="button" onClick={handleDelete}><i className="far fa-trash-alt"></i></button>
        </li>
    );
}

export default Todo;