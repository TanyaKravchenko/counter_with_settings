import React from 'react';
import './App.css';
import {CounterDisplay} from './components/CounterDisplay/CounterDisplay';
import {CounterSettings} from './components/CounterSettings/CounterSettings';

function App() {
    return (
        <div className="App">
            <CounterDisplay/>
            <CounterSettings/>
        </div>
    );
}

export default App;
