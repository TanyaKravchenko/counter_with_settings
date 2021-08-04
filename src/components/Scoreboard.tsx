import React, {useState} from 'react';
import {ScoreboardButtons} from './ScoreboardButtons';


export const Scoreboard = () => {
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
        <div>
            <div className={count === maxValue ? "red" : ""}>
                {count}
            </div>
            <div>
                <ScoreboardButtons
                    counter={addCount}
                    title={'inc'}
                />
            </div>
            <div>
                <ScoreboardButtons
                    counter={resetCount}
                    title={'reset'}
                />
            </div>
        </div>
    )
}