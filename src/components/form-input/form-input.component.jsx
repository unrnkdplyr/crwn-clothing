import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  let Label = () => null;
  if (label) {
    let labelClass = "form-input-label";
    if (otherProps.value.length) labelClass += ` shrink`;

    Label = () => (
      <FormInputLabel className={labelClass}>{label}</FormInputLabel>
    );
  }

  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      <Label />
    </GroupContainer>
  );
};

export default FormInput;
