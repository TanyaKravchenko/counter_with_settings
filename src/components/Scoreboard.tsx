import React from 'react';
import {ScoreboardButtons} from './ScoreboardButtons';

type ScoreboardType = {
    addCount: () => void
    count: number
    //maxValue: number
}

export function Scoreboard(props: ScoreboardType) {
    return (
        <div>
            <div>
                {props.count}
            </div>
            <div>
                <ScoreboardButtons addCount={props.addCount}/>
            </div>
            <div>
                <ScoreboardButtons addCount={props.addCount}/>
            </div>
        </div>
    )
}