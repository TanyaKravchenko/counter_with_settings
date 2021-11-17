import React from 'react';
import s from './SettingsDisplay.module.css';
import {Input} from '../../common/Input/Input';

type SettingsDisplayPropsType = {
    maxNum: number
    minNum: number
    helpMessage: boolean
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

export const SettingsDisplay: React.FC<SettingsDisplayPropsType> = ({maxNum, minNum,helpMessage, changeMaxValue, changeMinValue}) => {
    return (
        <div className={s.CounterDisplayWrapper}>
            <div className={s.counter_wrapper}>
                <Input value={maxNum}
                       callback={changeMaxValue}
                       className={helpMessage}
                       label={'max value:'}
                />
                <Input value={minNum}
                       callback={changeMinValue}
                       className={helpMessage}
                       label={'min value:'}
                />
            </div>
        </div>
    )
}