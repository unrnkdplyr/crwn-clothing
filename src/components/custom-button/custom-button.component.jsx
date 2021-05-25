import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  let buttonClass = "custom-button";
  if (isGoogleSignIn) buttonClass += " google-sign-in";

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
