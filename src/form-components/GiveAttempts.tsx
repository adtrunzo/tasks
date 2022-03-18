import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setRequested] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="ATTEMPTSid">
                <Form.Label>Input # of Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: ChangeEvent) =>
                        setRequested(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <div>{attemptsLeft}</div>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft <= 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + attemptsRequested);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
