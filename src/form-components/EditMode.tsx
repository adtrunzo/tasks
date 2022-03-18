import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [editState, setEditState] = useState<boolean>(false);
    const [studentState, setStudentState] = useState<boolean>(true);

    function updateEditState(event: React.ChangeEvent<HTMLInputElement>) {
        setEditState(event.target.checked);
    }
    function updateStudentState(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentState(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="check-edit"
                    label="Change Edit Mode?"
                    checked={editState}
                    onChange={updateEditState}
                />
            </div>
            <div>
                {editState && (
                    <Form.Check
                        type="switch"
                        id="check-student"
                        label="Is a Student?"
                        checked={studentState}
                        onChange={updateStudentState}
                    />
                )}
            </div>
            {name}{" "}
            {studentState
                ? !editState && "is a student"
                : !editState && "is not a student"}
            <div>
                {editState && (
                    <Form.Group controlId="changeTextBox">
                        <Form.Label>Change Name:</Form.Label>
                        <Form.Control
                            type="string"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                )}
            </div>
        </div>
    );
}
