import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue } from "./DoubleHalfState";
import { setDhValue } from "./DoubleHalfState";

interface DubHalf {
    setDhValue: (value: number) => void;
    dhValue: number;
}
function Doubler({ setDhValue, dhValue }: DubHalf): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDhValue, dhValue }: DubHalf): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
