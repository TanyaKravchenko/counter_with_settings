import React from 'react';
import s from './Input.module.css';

type InputPropsType = {

}

export const Input: React.FC<InputPropsType> = React.memo((props) => {
    return (
        <div className={s.inputWrapper}>
            <input>

            </input>
        </div>
    )

});