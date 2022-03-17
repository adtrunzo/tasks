import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizProgress, setQuizProgress] = useState<boolean>(false);
    const [quizAttempts, setAttempts] = useState<number>(4);

    function start(): void {
        setAttempts((quizAttempts) => quizAttempts - 1);
        setQuizProgress(true);
    }

    function stop(): void {
        setQuizProgress(false);
    }
    function increase(): void {
        setAttempts(quizAttempts + 1);
    }

    return (
        <div>
            <p>Attempts: {quizAttempts}</p>
            <Button
                onClick={start}
                disabled={quizProgress || quizAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!quizProgress}>
                Stop Quiz
            </Button>
            <Button onClick={increase} disabled={quizProgress}>
                Mulligan
            </Button>
        </div>
    );
}
