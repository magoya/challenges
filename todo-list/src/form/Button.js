const Button = ({ onClick, label }) => (
  <button onClick={(e) => onClick(e)}>{label}</button>
);

export default Button;
