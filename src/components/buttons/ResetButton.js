import tomatoReset from '../images/tomato-reset.png';

function ResetButton(props) {
    return (
      <button {...props}>
        <img src={tomatoReset} alt="tomato" width='64px' height='64px'/>
      </button>
    );
  }
  
  export default ResetButton;