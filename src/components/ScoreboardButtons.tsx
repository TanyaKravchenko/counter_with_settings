import React from 'react';

type ScoreboardButtonsType = {
    addCount: () => void
}

export function ScoreboardButtons(props: ScoreboardButtonsType) {
    return (
        <div className="Buttons">
            <button
                onClick={() => props.addCount()}>
            </button>
        </div>
    )

}