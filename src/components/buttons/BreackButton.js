import tomatoBreack from '../images/tomato-breack.png';

function BreackButton(props) {
    return (
      <button {...props}>
        <img src={tomatoBreack} alt="tomato" width='64px'/>
      </button>
    );
  }
  
  export default BreackButton;