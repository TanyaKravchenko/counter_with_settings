import React, {useState} from 'react';
import {Scoreboard} from './Scoreboard';
import {ScoreboardSettings} from './ScoreboardSettings';

function Counter() {
    let [count, setCount] = useState<number>(0);
    let addCount = () => {
        setCount(count+1);
    }

    return (
        <div className="App">
            <div>
                <Scoreboard addCount={addCount} count={count}/>
            </div>
            <div>
                <ScoreboardSettings />
            </div>
        </div>
    );
}

export default Counter;