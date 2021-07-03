import React, {useState} from 'react';
import classes from './Counter.module.css'
import {Scoreboard} from './Scoreboard';
import {ScoreboardSettings} from './ScoreboardSettings';

function Counter() {
    let [count, setCount] = useState<number>(0);
    let addCount = () => {
        setCount(count+1);
    }

    return (
        <div className={classes.counterWrapper}>
            <div className={classes.scoreboardWrapper}>
                <Scoreboard addCount={addCount} count={count}/>
            </div>
            <div className={classes.scoreboardSettingsWrapper}>
                <ScoreboardSettings />
            </div>
        </div>
    );
}

export default Counter;