import React from 'react';
import s from './App.module.css';
import {CounterDisplay} from './components/CounterDisplay/CounterDisplay';
import {CounterSettings} from './components/CounterSettings/CounterSettings';

function App() {
    return (
        <div className={s.app}>
            <div className={s.CounterContainer}>
                <div className={s.CounterSettingsWrapper}>
                    <CounterSettings/>
                </div>
                <div className={s.CounterDisplayWrapper}>
                    <CounterDisplay/>
                </div>
            </div>
        </div>
    );
}

export default App;
