import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userSelection, setUserSelection] = useState<string>(options[0]);

    const setAnswer = (Event: ChangeEvent) => {
        setUserSelection(Event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="choiceDropdown">
                <Form.Label>Choose an answer</Form.Label>
                <Form.Select value={userSelection} onChange={setAnswer}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{userSelection === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
