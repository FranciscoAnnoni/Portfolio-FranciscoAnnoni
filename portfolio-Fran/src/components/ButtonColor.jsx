import './ButtonColor.css'

export const ButtonColor = ({text}) => {
    return (
        <button>
        <span aria-hidden="true">{text}</span>
        <span></span>
        <span>{text}</span>
      </button>
        
    );
};