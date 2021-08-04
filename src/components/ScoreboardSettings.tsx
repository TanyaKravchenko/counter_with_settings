import React from 'react';
import {ScoreboardButtons} from './ScoreboardButtons';

type ScoreboardType = {
    count: number
    maxValue: number
}

export function ScoreboardSettings(props: ScoreboardType) {


    function setCount() {
        alert('hi')
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