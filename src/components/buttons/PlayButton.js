// import tomatoPlay from '../images/tomato-play.png';

function PlayButton(props){
    return(
      <button {...props}>
        <img src="images/tomato-play.png" alt="tomato" width='64px' height='64px'/>
      </button>  
    );
}

export default PlayButton;