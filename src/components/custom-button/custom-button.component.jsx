import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => {
  let buttonClass = "custom-button";
  if (inverted) buttonClass += " inverted";
  else if (isGoogleSignIn) buttonClass += " google-sign-in";

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
