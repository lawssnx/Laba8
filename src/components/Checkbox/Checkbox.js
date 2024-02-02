import React from "react";
import styles from "./Checkbox.module.css"

export const Checkbox = ({ todo, handleCheckbox, isChecked }) => {

    const HandleCheckboxState = () => {
        handleCheckbox(isChecked)
    }
    return (
        <label className={styles.checkboxWrapper}>
            <input
                className={styles.checkboxElement}
                type="checkbox"
                checked={isChecked}
                onChange={HandleCheckboxState} />
            <span>{todo}</span>
        </label>
    )
}