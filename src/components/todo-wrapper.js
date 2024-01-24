import React, { useState } from "react";
import { TodoForm } from "./todo-form";
import { Todo } from "./todo";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: newTodo }]);
    };

    const onDelete = (todoId) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    };

    return (
        <div className="Todo-Wrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo.text} onDelete={() => onDelete(todo.id)} />
            ))}
        </div>
    );
}