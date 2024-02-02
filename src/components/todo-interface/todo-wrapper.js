import React, { useState } from "react";
import image from "../../img/bin.png";
import { TodoForm } from "./todo-form";
import { Todo } from "./todo";
import { Modal } from "../Modal/modal";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [modalWindow, setModalWindow] = useState(false);
    const [deletedTodos, setDeletedTodos] = useState([]);

    const addTodo = (newTodo) => {
        if (newTodo !== "") {
            setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: newTodo }]);
        } else {
            alert("Type text")
        }
    };

    const onDelete = (todoId) => {
        setDeletedTodos(prevDeletedTodos =>
            [...prevDeletedTodos, todos.find(todo => todo.id === todoId)]);
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    };

    const toggleModal = () => {
        setModalWindow(!modalWindow);
    };

    const ReturnFromDeleted = (deletedTodoId) => {
        const todoToReturn = deletedTodos.find(todo => todo.id === deletedTodoId);
        if (todoToReturn) {
            setTodos(prevTodos => [...prevTodos, todoToReturn]);
            const updatedDeletedTodos = deletedTodos.filter(todo => todo.id !== deletedTodoId);
            setDeletedTodos(updatedDeletedTodos);
        } else {
            console.error("Todo not found in deletedTodos");
        }
    }


    return (
        <div className="Todo-Wrapper">
            <div className="button-wrapper">
                <TodoForm addTodo={addTodo} toggleModal={toggleModal} />
                <button onClick={toggleModal} className="Deleted-Tasks">
                    <img className="ImageBin" src={image} alt="bin.png" />
                </button>
            </div>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo.text}
                    onDelete={() => onDelete(todo.id)} />
            ))}
            {modalWindow && <Modal
                toggleModal={toggleModal}
                deletedTodos={deletedTodos}
                ReturnFromDeleted={ReturnFromDeleted} />}
        </div>
    );
}
