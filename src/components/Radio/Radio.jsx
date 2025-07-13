import "./Radio.css";

const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  error,
}) => {
  const id = `radio-${name}-${value}`;

  return (
    <div className={`radio-wrapper ${disabled ? "disabled" : ""}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`radio-input ${error ? "radio-error" : ""}`}
      />
      <label htmlFor={id} className="radio-label">
        {label}
      </label>
      {error && <p className="radio-error-message">{error}</p>}
    </div>
  );
};

export default Radio;
