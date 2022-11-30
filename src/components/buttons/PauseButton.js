import tomatoPause from '../images/tomato-pause.png';

function PauseButton(props) {
    return (
      <button {...props}>
        <img src={tomatoPause} alt="tomato" width='64px' height='64px'/>
      </button>
    );
  }
  
  export default PauseButton;