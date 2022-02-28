import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.Alexander Trunzo.<br></br> Hello World.
                </p>
                <h1>This is header text</h1>
                <div>
                    Ordered List:
                    <ol>
                        <li>First thing</li>
                        <li>Another thing</li>
                        <li>A third item</li>
                    </ol>
                    <img
                        src="../assets/images/pet-ada.jpg"
                        alt="A picture of my dog Ada"
                    />
                </div>
                <p>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </p>
                <Container>
                    <Row>
                        <Col>
                            <div className="App-rect"> hi </div>
                        </Col>
                        <Col>
                            <div className="App-rect"> hi u</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
