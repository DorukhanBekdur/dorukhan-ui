import "./Checkbox.css";

const Checkbox = ({ label, checked, onChange, disabled = false, error }) => {
  const id = `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`checkbox-wrapper ${disabled ? "disabled" : ""}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`checkbox-input ${error ? "checkbox-error" : ""}`}
      />
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
      {error && <p className="checkbox-error-message">{error}</p>}
    </div>
  );
};

export default Checkbox;
