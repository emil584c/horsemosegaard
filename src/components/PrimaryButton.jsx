const PrimaryButton = ({ text, className, href, transparent }) => {
  return (
    <a
      href={href}
      className={`primary-button ${className ? className : ""} ${
        transparent ? "primary-button--transparent" : ""
      }`}
    >
      <p>{text}</p>
    </a>
  );
};

export default PrimaryButton;
