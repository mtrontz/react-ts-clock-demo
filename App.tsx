import * as React from 'react';
import { Container, ButtonGroup, Button, DropdownButton, Row } from "react-bootstrap";

import './style.css';

import { Clock, BackgroundChanger } from './clock';
import { gradients } from "./clock/gradients";

export default function App() {
  const [showClock, setShowClock] = React.useState<boolean>(true);
  const [background, setBackground] = React.useState({
    background: "linear-gradient(-225deg,#69eacb 0%,#eaccf8 48%,#6654f1 100%)",
    backgroundSize: "300% 300%",
  });

  // function to chnage the background gradient
  const changeBackground = (color: string): void => {
    console.log(color);
    setBackground({ background: color, backgroundSize: "400% 400%" });
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Container fluid className="main" style={background}>
      <BackgroundChanger
        gradients={gradients}
        changeBackground={changeBackground}
      ></BackgroundChanger>
      <div className="group">
        <ButtonGroup>
          <Button
            variant="outline-dark"
            onClick={() => {
              if (showClock === false) {
                setShowClock(true);
              }
            }}
          >
            <i className="bi bi-clock"></i>
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => {
              if (showClock === true) {
                setShowClock(false);
              }
            }}
          >
            <i className="bi bi-stopwatch"></i>
          </Button>
        </ButtonGroup>
      </div>
      <Clock show={showClock} />
    </Container>
    </div>
  );
}
