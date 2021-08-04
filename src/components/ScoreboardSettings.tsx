import React, {useState} from 'react';
import {ScoreboardButtons} from './ScoreboardButtons';

type ScoreboardType = {
    count: number
    maxValue: number
}

export function ScoreboardSettings(props: ScoreboardType) {
    let [count, setCount] = useState(0);

    let maxValue = 5;

    function setCount() {

        }
    }

    return (
        <div>
            <div className={props.count === props.maxValue ? 'red' : ''}>
                {props.count}
            </div>
            <div className={props.count === props.maxValue ? 'red' : ''}>
                {props.count}
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