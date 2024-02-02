import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                className="Todo-Input"
                type="text"
                placeholder="Type your task here..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="Todo-Button" type="submit">Add task</button>
        </form>
    );
}
