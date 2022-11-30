import tomatoPlus from '../images/tomato-plus.png';

function PlusButton(props) {
    return (
      <button {...props}>
        <img src={tomatoPlus} alt="tomato" width='32px' height='32px'/>
      </button>
    );
  }
  
  export default PlusButton;