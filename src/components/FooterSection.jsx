import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-section__inner page-container">
          <div className="footer-section__row">
            <Link className="footer-section__logo">
              <img
                src="./img/icons/farm.svg"
                alt="farm icon"
              />
              <p className="header-section__logo-text">Horsemosegaard</p>
            </Link>
            <p className="footer-section__text">
              Har i spørgsmål til vores faciliteter, eller har i lyst til at
              tage en snak om vi er det rette sted for jer, så send en besked
              over messenger osv osv.
            </p>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Genveje</h3>
            <ul>
              <li>
                <Link>Hvem er vi</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Her finder ud os</h3>
            <ul>
              <li>
                <a href="tel:+4542544888">+45 42 54 48 88</a>
              </li>
              <li>
                <a href="mailto:emilwaellind@gmail.com">
                  emilwaellind@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Genveje</h3>
            <ul>
              <li>
                <Link>Hvem er vi</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
