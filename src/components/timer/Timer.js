import { useContext, useState, useEffect, useRef } from "react";

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from "../helpers/RadialSeparators";
import { getPadTime } from '../helpers/getPadTime';
import SettingsContext from "../settings/SettingsContext";

import PlayButton from "../buttons/PlayButton";
import PauseButton from "../buttons/PauseButton";
import ResetButton from "../buttons/ResetButton";
import WorkButton from '../buttons/WorkButton';
import BreackButton from '../buttons/BreackButton';

const red = '#EA473B';
const green = '#3BBC56';

function Timer() {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function switchMode() {
    if (mode === 'work') {
      setMode('break');
      modeRef.current = 'break';
      reset();
    } else {
      setMode('work');
      modeRef.current = 'work';
      reset();
    }
  }

  function reset() {
    setIsPaused(true);
    isPausedRef.current = true;
    if (mode === 'work') {
      secondsLeftRef.current = settingsInfo.workMinutes * 60;
      setSecondsLeft(secondsLeftRef.current);
    } else {
      secondsLeftRef.current = settingsInfo.breakMinutes * 60;
      setSecondsLeft(secondsLeftRef.current);
    }
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;

    }

    if (mode === 'work') {
      secondsLeftRef.current = settingsInfo.workMinutes * 60;
      setSecondsLeft(secondsLeftRef.current);
    } else {
      secondsLeftRef.current = settingsInfo.breakMinutes * 60;
      setSecondsLeft(secondsLeftRef.current);
    }

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo, mode]);

  const totalSeconds = mode === 'work'
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = getPadTime(Math.floor(secondsLeft / 60));
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div>
      <div className='flex'>
        {mode === 'work' ? <h3>Work Session</h3> : <h3 className='green'>Break Session</h3>}
        {mode === 'work' ? <WorkButton onClick={switchMode} /> : <BreackButton onClick={switchMode} />}
      </div>
      <CircularProgressbarWithChildren
        value={percentage}
        text={minutes + ':' + seconds}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: mode === 'work' ? red : green,
          trailColor: 'rgba(255,255,255,0.0)',
          textColor: mode === 'work' ? red : green,
          strokeLinecap: "butt"
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: mode === 'work' ? green : red,
            width: "2px",
            height: `${10}%`
          }}
        />
      </CircularProgressbarWithChildren>
      <div style={{ marginTop: '20px' }}>
        {isPaused
          ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
          : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
        <ResetButton onClick={reset} />
      </div>
    </div>
  );
}

export default Timer;
