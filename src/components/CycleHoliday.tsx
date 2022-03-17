import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
Holidays -
Chirstmas 🎄, Easter 🐰, Halloween 🎃, Thanksgiving 🦃, Valentines Day 💝
(By Date)
💝, 🐰, 🎃, 🦃, 🎄
(By First Letter)
🎄, 🐰, 🎃, 🦃, 💝
*/

const holidayByLetter: Record<string, string> = {
    "🎄": "🐰",
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "💝",
    "💝": "🎄"
};
const holidayByDate: Record<string, string> = {
    "💝": "🐰",
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "💝"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");

    function nextByDate(): void {
        setHoliday(holidayByDate[holiday]);
    }

    function nextByLetter(): void {
        setHoliday(holidayByLetter[holiday]);
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={nextByLetter}>Advance by Alphabet</Button>
            <Button onClick={nextByDate}>Advance by Year</Button>
        </div>
    );
}
