import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {
  Container,
  ButtonGroup,
  Button,
  DropdownButton,
  Row,
} from 'react-bootstrap';
import './styles.css';
import { gradients } from './gradients';

// console.log(gradients);

// A Interface for props of Clock and StopWatch Component
interface DefaultProps {
  show: boolean;
}

// Interface for BackgroundChanger Components
interface GradientObject {
  name: string;
  colors: Array<string>;
}

// const test: GradientObject = gradients;

interface Gradients {
  list: Array<GradientObject>;
  children?: React.ReactNode
  // changeBackground(color: string): void;
}

// Clock Component
export const Clock: FC<DefaultProps> = ({ show }): JSX.Element => {
  const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(
      (): void => setClock(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      {show && (
        <div className="main">
          <h1 className="display-4" style={{ fontSize: '2rem' }}>
            {new Date().toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h1>
          <h1 className="display-1" style={{ fontSize: '2rem' }}>
            {clock}
          </h1>
        </div>
      )}
    </div>
  );
};

/*
// StopWatch Component
const StopWatch: FC<DefaultProps> = ({ show }): JSX.Element => {
  const [stopwatch, setStopwatch] = useState<number>(0);
  const [stopwatchStatus, setTimerStatus] = useState(false);
  useEffect(() => {
    const timerInterval = setInterval((): void => {
      if (stopwatchStatus) {
        setStopwatch(stopwatch + 1);
      }
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [stopwatch, stopwatchStatus]);

  // function to return formatted time in HH:MM:SS when given seconds
  const returnFormattedTime = (seconds: number): string => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  };

  return (
    <>
      {!show && (
        <div>
          <h1 className="display-1" style={{ fontSize: "8rem" }}>
            {returnFormattedTime(stopwatch)}
          </h1>
          <br></br>
          <ButtonGroup>
            <Button
              style={{ border: "none" }}
              variant="outline-dark"
              onClick={() => setTimerStatus(!stopwatchStatus)}
            >
              {!stopwatchStatus ? "Start" : "Stop"}
            </Button>
            <Button
              style={{ border: "none" }}
              variant="outline-dark"
              onClick={() => {
                setTimerStatus(false);
                setStopwatch(0);
              }}
            >
              Reset
            </Button>
          </ButtonGroup>
        </div>
      )}
    </>
  );
};
*/

// Background Color Chnager Component
export const BackgroundChanger: FC<Gradients> = ({
  list,
  children,
}): JSX.Element => {
  const [bg, setBG] = React.useState({
    color: 'linear-gradient(-225deg,#69eacb 0%,#eaccf8 48%,#6654f1 100%)',
    size: '300% 300%',
  });
  return (
    <div className="background-changer-button-group">
      <DropdownButton variant="outline-dark" size="sm" title="">
        <Container>
          <Row className="color-menu">
            {list && list.map((gradient, index) => {
              const backgroundColor = `linear-gradient(-225deg , ${gradient.colors.forEach((color) => `${color}`)})`;

            return (
                <Button
                  className="col-3 color"
                  key={index}
                  onClick={() => setBG({color: backgroundColor, size: bg.size})}
                  style={{outline: '2px black'}}
                ></Button>
              );
            })}
            <Container style={{background: bg.background}}>
              {children}
            </Container>
          </Row>
        </Container>
      </DropdownButton>
    </div>
  );
};

/*
{list.map((gradient, index) => {
              const background = `linear-gradient(-225deg , ${gradient.colors})`;

              return (
                <Button
                  className="col-3 color"
                  key={index}
                  onClick={() => setBackground(background)}
                  style={{background: background}}
                ></Button>
              );
            })}



{list.map((gradient, index) => {
              const background = `linear-gradient(-225deg ,${gradient.colors.map(
                (c) => `${c}`
              )})`;
*/

/*
function MyClock() {
  const [showClock, setShowClock] = useState<boolean>(true);
  const [background, setBackground] = useState({
    background: "linear-gradient(-225deg,#69eacb 0%,#eaccf8 48%,#6654f1 100%)",
    backgroundSize: "300% 300%",
  });

  // function to chnage the background gradient
  const changeBackground = (color: string): void => {
    console.log(color);
    setBackground({ background: color, backgroundSize: "400% 400%" });
  };

  return (
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
      <StopWatch show={showClock} />
    </Container>
  );
}

// export default MyClock;
*/
