import "./Input.css";

const Input = ({
  label,
  placeholder = "",
  value,
  onChange,
  error,
  disabled = false,
  type = "text",
  ...props
}) => {
  return (
    <div className={`input-wrapper ${disabled ? "disabled" : ""}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        className={`input-field ${error ? "input-error" : ""}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
};

export default Input;
