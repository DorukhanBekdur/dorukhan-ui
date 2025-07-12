import "./Textarea.css";

const Textarea = ({
  label,
  placeholder = "",
  value,
  onChange,
  error,
  disabled = false,
  rows = 4,
  ...props
}) => {
  return (
    <div className={`textarea-wrapper ${disabled ? "disabled" : ""}`}>
      {label && <label className="textarea-label">{label}</label>}
      <textarea
        className={`textarea-field ${error ? "textarea-error" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        {...props}
      />
      {error && <p className="textarea-error-message">{error}</p>}
    </div>
  );
};

export default Textarea;
