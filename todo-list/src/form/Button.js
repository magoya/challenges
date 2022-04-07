import './Button.css'

function Button(props) {
  return (
    <button onClick={(e) => props.onClick(e)}>{props.label}</button>
  );
}

export default Button