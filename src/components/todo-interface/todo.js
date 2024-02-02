import React, { useState } from "react";
import image from "../../img/cross-mark.png";
import { Checkbox } from "../Checkbox/Checkbox";

export const Todo = ({ todo, onDelete }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckbox = () => {
        setIsChecked((isChecked) => !isChecked);
    }

    return (
        <div className={`Todo ${isChecked ? 'TodoChecked' : ''}`}>
            <Checkbox
                todo={todo}
                handleCheckbox={handleCheckbox}
                isChecked={isChecked} />
            <div className="cross-mark">
                <button className="btn-image" onClick={onDelete}>
                    <img className="image" src={image} alt="cross-mark" />
                </button>
            </div>
        </div>
    );
}