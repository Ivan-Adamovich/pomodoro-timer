import { useContext } from 'react';

import PlusButton from "../buttons/PlusButton";
import MinusButton from "../buttons/MinusButton";
import SettingsContext from './SettingsContext';

function Settings() {
    const settingsInfo = useContext(SettingsContext);
    return(
        <div>
            <div>
                <label>Work minutes: </label>
                <div className='flex'>
                    <PlusButton onClick={settingsInfo.workMinPlus}/>
                    {settingsInfo.workMinutes > 9 ? <label>{settingsInfo.workMinutes}:00</label> : <label>0{settingsInfo.workMinutes}:00</label>}
                    <MinusButton onClick={settingsInfo.workMinMinus}/>
                </div>
            </div>
            <div>
                <label className='green'>Break minutes: </label>
                <div className='flex'>
                    <PlusButton onClick={settingsInfo.breakMinPlus}/>
                    {settingsInfo.breakMinutes > 9 ? <label className='green'>{settingsInfo.breakMinutes}:00</label> : <label className='green'>0{settingsInfo.breakMinutes}:00</label>}
                    <MinusButton onClick={settingsInfo.breakMinMinus}/>
                </div>
            </div>
        </div>
    );
}

export default Settings;
