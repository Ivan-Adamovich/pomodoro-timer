// import tomatoMinus from '../images/tomato-minus.png';

function MinusButton(props) {
    return (
      <button {...props}>
        <img src="images/tomato-minus.png" alt="tomato" width='32px' height='32px'/>
      </button>
    );
  }
  
  export default MinusButton;