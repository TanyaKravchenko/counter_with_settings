import React, {useState} from 'react';
import classes from './Counter.module.css'
import {Scoreboard} from './Scoreboard';
import {ScoreboardSettings} from './ScoreboardSettings';

function Counter() {
    let [count, setCount] = useState(0);

    let maxValue = 5;

    function addCount() {
        if (count < maxValue) {
            return setCount(count + 1);
        }
    }

    let resetCount = () => {
        setCount(0);
    }
    return (
        <div className={classes.counterWrapper}>
            <div className={classes.scoreboardSettingsWrapper}>
                <ScoreboardSettings count={count} maxValue={maxValue}/>
            </div>
            <div className={classes.scoreboardWrapper}>
                <Scoreboard />
            </div>
        </div>
    );
}

export default Counter;