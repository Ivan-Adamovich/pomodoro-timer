import tomatoWork from '../images/tomato-work.png';

function WorkButton(props) {
    return (
      <button {...props}>
        <img src={tomatoWork} alt="tomato" width='64px'/>
      </button>
    );
  }
  
  export default WorkButton;