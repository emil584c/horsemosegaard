const PrimaryButton = ({ text, className, href }) => {
  return (
    <a
      href={href}
      className={`primary-button ${className ? className : ""}`}
    >
      <p>{text}</p>
    </a>
  );
};

export default PrimaryButton;
