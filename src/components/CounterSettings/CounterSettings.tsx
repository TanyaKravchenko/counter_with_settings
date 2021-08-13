import React, {useCallback, useEffect } from 'react';
import s from './CounterSettings.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../Redux/store';
import { InitialStateType } from '../Redux/counter-reduser';
import { actions } from '../Redux/actions';
import { Button } from '../common/Button/Button';
import {SettingsDisplay} from './SettingsDisplay/SettingsDisplay';

export const CounterSettings = React.memo(() => {
    const dispatch = useDispatch()

    const counter = useSelector<rootState, InitialStateType>(state => state.counter)

    type StateType = {
        min: number
        max: number
    }
    let state: StateType = {
        min: counter.minValue,
        max: counter.maxValue
    }

    useEffect(() => {
        function saveState<T>(key: string, state: T) {
            const stateAsString = JSON.stringify(state);
            localStorage.setItem(key, stateAsString)
        }

        saveState<StateType>('start value', {min: state.min, max: state.max})
    }, [counter.minValue, counter.maxValue])

    let setValue = useCallback(() => dispatch(actions.SetValueAC()), [dispatch]);
    let setMaxValue = useCallback((inputValue: number) => dispatch(actions.SetMaxValueAC(inputValue)), [dispatch]);
    let setMinValue = useCallback((inputValue: number) => dispatch(actions.SetMinValueAC(inputValue)), [dispatch]);
    return (
        <div className={s.counterSettingsWrapper}>
            <div className={s.main_container}>
                <SettingsDisplay maxNum={counter.maxValue}
                                 minNum={counter.minValue}
                                 helpMessage={counter.helpMessage.includes('incorrect')}
                                 changeMaxValue={setMaxValue}
                                 changeMinValue={setMinValue}
                />
                <div className={s.button_wrapper}>
                    <Button counter={setValue}
                            title={'set'}
                            disabled={counter.helpMessage.length === 0
                            || counter.helpMessage.includes('incorrect')}
                    />
                </div>
            </div>
        </div>
    )

});