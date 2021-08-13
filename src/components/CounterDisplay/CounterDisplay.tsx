import React, { useCallback } from 'react';
import s from './CounterDisplay.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { rootState } from '../Redux/store';
import { InitialStateType } from '../Redux/counter-reduser';
import { actions } from '../Redux/actions';
import {Button} from '../common/Button/Button';
import { Display } from './Display/Display';

export const CounterDisplay = React.memo((props) => {

    const dispatch = useDispatch()

    const counter = useSelector<rootState, InitialStateType>(state => state.counter)

    let increaseNumber = useCallback(() => dispatch(actions.IncreaseNumberAC()), [dispatch]);
    let resetNumber = useCallback(() => dispatch(actions.ResetNumberAC()), [dispatch]);
    return (
        <div className={s.counterDisplayWrapper}>
            <div className={s.main_container}>
                <Display currentValue={counter.currentValue}
                         helpMessage={counter.helpMessage}
                         maxNum={counter.maxValue}
                />
                <div className={s.button_wrapper}>
                    <Button counter={increaseNumber}
                            title={'start'}
                            disabled={counter.helpMessage || counter.currentValue === counter.maxValue
                                ? true
                                : false}/>
                    <Button counter={resetNumber}
                            title={'reset'}
                            disabled={counter.helpMessage || counter.currentValue === counter.minValue
                                ? true
                                : false}/>
                </div>
            </div>
        </div>
    )

});