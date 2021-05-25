import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  let Label = () => <></>;
  if (label) {
    let labelClass = "form-input-label";
    if (otherProps.value.length) labelClass += ` shrink`;

    Label = () => <label className={labelClass}>{label}</label>;
  }

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      <Label />
    </div>
  );
};

export default FormInput;
