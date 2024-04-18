import { Link } from "react-router-dom";

function SecondaryButton(props) {
  return (
    <Link
      to={props.link}
      className="secondary-button"
      onClick={() => scrollToTop()}
    >
      <p className="secondary-button__text">{props.text}</p>
      <img
        className="secondary-button__arrow"
        src="./img/icons/arrow.svg"
        alt="arrow icon"
      />
    </Link>
  );
}

export default SecondaryButton;
