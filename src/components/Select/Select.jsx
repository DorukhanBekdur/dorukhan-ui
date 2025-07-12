import "./Select.css";

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  error,
  ...props
}) => {
  return (
    <div className={`select-wrapper ${disabled ? "disabled" : ""}`}>
      {label && <label className="select-label">{label}</label>}
      <select
        className={`select-field ${error ? "select-error" : ""}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="select-error-message">{error}</p>}
    </div>
  );
};

export default Select;
