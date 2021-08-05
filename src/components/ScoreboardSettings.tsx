import React from 'react';
import {ScoreboardButtons} from './ScoreboardButtons';

type ScoreboardType = {
    count: number
    maxValue: number
}

export const ScoreboardSettings: React.FC<ScoreboardType> = (props) => {


    function setCount() {
        alert('hi')
    }

    return (
        <div>
            <div>
                <span>max value: </span>
                <input/>
            </div>
            <div>
                <span>start value: </span>
                <input/>
            </div>
            <div>
                <ScoreboardButtons
                    counter={setCount}
                    title={'set'}
                />
            </div>
        </div>
    )
}