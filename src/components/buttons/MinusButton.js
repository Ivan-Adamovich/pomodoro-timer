import tomatoMinus from '../images/tomato-minus.png';

function MinusButton(props) {
    return (
      <button {...props}>
        <img src={tomatoMinus} alt="tomato" width='32px' height='32px'/>
      </button>
    );
  }
  
  export default MinusButton;