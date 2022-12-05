import { useState } from 'react';

import Timer from '../timer/Timer';
import Settings from '../settings/Settings';
import SettingsContext from '../settings/SettingsContext';

import './App.css';

function App() {
  const [workMinutes, setWorkMinutes] = useState(25); 
  const [breakMinutes, setBreakMinutes] = useState(5); 

  function workMinPlus () {
    setWorkMinutes(prev => prev + 1);
  }

  function workMinMinus () {
    if(workMinutes <= 1){
      return
    }
    setWorkMinutes(prev => prev - 1);
  }

  function breakMinPlus () {
    setBreakMinutes(prev => prev + 1);
  }

  function breakMinMinus () {
    if(breakMinutes <= 1){
      return
    }
    setBreakMinutes(prev => prev - 1);
  }

  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes,
        workMinPlus,
        workMinMinus, 
        breakMinutes,
        breakMinPlus,
        breakMinMinus
      }}>
        <Timer/>
        <Settings/>
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
