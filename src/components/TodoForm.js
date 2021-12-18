import * as React from "react";

function TodoForm({ setTodos }) {
    const [id, setId] = React.useState(0);

    function saveLocalId() {
        localStorage.setItem("id", JSON.stringify(id));
    }

    function getLocalId() {
        if (!localStorage.getItem("id")) {
            localStorage.setItem("id", JSON.stringify(id));
        }

        const idLocal = JSON.parse(localStorage.getItem("id"));
        setId(idLocal);
    }

    React.useEffect(() => {
        getLocalId();
    }, []);

    React.useEffect(() => {
        saveLocalId();
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();

        const inputValue = e.target[0].value;

        setTodos(todos => {
            return [
                ...todos,
                {
                    id: id,
                    value: inputValue,
                    done: false
                }
            ];
        });



        setId(id + 1);

        // clean input element
        e.target[0].value = "";
        // focus input element
        e.target[0].focus();
    }

    return (
        <div className="todoForm">
            <form onSubmit={handleSubmit}>
                <input type="text" autoFocus />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TodoForm;