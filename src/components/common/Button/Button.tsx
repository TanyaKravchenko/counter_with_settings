import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
    counter: () => void
    title: string
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = React.memo((props) => {
    return (
        <div className={s.buttonWrapper}>
            <button
                className={props.disabled ? `${s.disabled} ${s.button}` : s.button}
                onClick={props.counter}>
                {props.title}
            </button>
        </div>
    )

});