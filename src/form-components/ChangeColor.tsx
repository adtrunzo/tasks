import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "lightblue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "hotpink",
    "black"
];
export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <span>
                    The current color is
                    <span
                        style={{ backgroundColor: chosen, color: "white" }}
                        data-testid="colored-box"
                    >
                        {chosen}
                    </span>
                </span>
            </div>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(Event: React.ChangeEvent<HTMLInputElement>) =>
                        setChosen(Event.target.value)
                    }
                    id={"colors-choice-" + color}
                    label={color}
                    style={{ backgroundColor: color, color: "white" }}
                    value={color}
                    checked={chosen === color}
                />
            ))}
        </div>
    );
}
