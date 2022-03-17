import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [firstDice, setFirst] = useState<number>(1);
    const [secondDice, setSecond] = useState<number>(6);

    const roll = (die: number) => {
        if (die == 0) {
            setFirst(d6());
        } else {
            setSecond(d6());
        }
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{firstDice} </span>
                <Button onClick={() => roll(0)}>Roll Left</Button>
                <span data-testid="right-die">{secondDice}</span>
                <Button onClick={() => roll(1)}>Roll Right</Button>
            </div>
            {firstDice === secondDice && firstDice !== 1 && <div>You Win!</div>}
            {firstDice === secondDice && firstDice === 1 && (
                <div>You Lose!</div>
            )}
        </div>
    );
}
