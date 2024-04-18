import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-section__inner page-container">
          <div className="footer-section__row">
            <Link className="footer-section__logo">
              <img
                src="./img/icons/farm-white.svg"
                alt="farm icon"
              />
              <p className="header-section__logo-text">Horsemosegaard</p>
            </Link>
            <p className="footer-section__text">
              Har i spørgsmål til vores faciliteter, eller har i lyst til at
              tage en snak om vi er det rette sted for jer.
            </p>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Genveje</h3>
            <ul>
              <li>
                <Link
                  onClick={() => scrollToTop()}
                  to={"/hvem-er-vi"}
                >
                  Hvem er vi
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollToTop()}
                  to={"/priser"}
                >
                  Priser
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollToTop()}
                  to={"/faciliteter"}
                >
                  Faciliter
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Her finder ud os</h3>
            <ul>
              <li>
                <a href="tel:+4542544888">
                  Gummersmarkvej 23
                  <br />
                  4632 Bjæverskov
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Kontakt os</h3>
            <ul>
              <a
                href="tel:+21564229"
                className="footer-section__phone"
              >
                +45 21 67 42 29
              </a>
              <a
                href="mailto:info@horsemosegaard.com"
                className="footer-section__mail"
              >
                info@horsemosegaard.com
              </a>
            </ul>
          </div>
        </div>
        <p className="footer-section__copyright">
          © 2024 Horsemosegaard. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default FooterSection;
