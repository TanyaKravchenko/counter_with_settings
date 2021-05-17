import React from "react";
import {ScoreboardButtons} from './ScoreboardButtons';

// type ScoreboardType = {
//     count: number
//     maxValue: number
// }

export function ScoreboardSettings(props: any) {
    return (
        <div>
            <div className={props.count === props.maxValue ? 'red' : ''}>
                {props.count}
            </div>
            <div>
                <ScoreboardButtons addCount={props.addCount}/>
            </div>
        </div>
    )
}