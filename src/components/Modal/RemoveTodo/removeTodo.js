import React from "react";
import styles from "./removeTodo.module.css";
import image from "../../../img/right-arrow.png";

export const DeletedTodos = ({ deletedTodo, ReturnFromDeleted }) => {
  return (
    <>
      {deletedTodo.map((todo, index) => (
        <div className={styles["deletedItem"]} key={index}>
          <span className={styles["deletedId"]}>{index + 1}.</span>
          <span className={styles["deletedText"]}>{todo.text}</span>
          <button onClick={() => ReturnFromDeleted(todo.id)}>
            <span>
              <img className={styles["image"]} src={image} alt="right-arrow" />
            </span>
          </button>
        </div>
      ))}
    </>
  );
};
