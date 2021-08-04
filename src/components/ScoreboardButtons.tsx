import React from 'react';

type ScoreboardButtonsType = {
    counter: () => void
    title: string
}

export function ScoreboardButtons(props: ScoreboardButtonsType) {
    return (
        <div className="Buttons">
            <button
                onClick={() => props.counter()}>
                {props.title}
            </button>
        </div>
    )

}