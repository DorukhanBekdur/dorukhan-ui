import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${
        disabled ? "btn-disabled" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
