import React from "react";
import image from "../img/cross-mark.png";

export const Todo = ({ todo, onDelete }) => {
    return (
        <div className="Todo">
            <p>{todo}</p>
            <div className="cross-mark">
                <button className="btn-image" onClick={onDelete}>
                    <img className="image" src={image} alt="cross-mark" />
                </button>
            </div>
        </div>
    );
}