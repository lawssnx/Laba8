import React from "react";
import styles from "./modal.module.css";
import image from "../../img/cross-mark.png";
import { DeletedTodos } from "./RemoveTodo/removeTodo";

export const Modal = ({ toggleModal, deletedTodos, ReturnFromDeleted }) => {
    return (
        <>
            <div className={styles["modal"]}>
                <div onClick={toggleModal} className={styles["overlay"]}></div>
                <div className={styles["modal-content"]}>
                    <h2>Deleted todos</h2>
                    <DeletedTodos deletedTodo={deletedTodos} ReturnFromDeleted={ReturnFromDeleted} />
                    <button className={styles["close-modal"]} onClick={toggleModal}>
                        <img className="image" src={image} alt="cross-mark" />
                    </button>
                </div>
            </div>
        </>
    )
}