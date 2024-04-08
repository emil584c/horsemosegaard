import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import PrimaryButton from "./PrimaryButton";

function HeaderSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const scrollToAnchor = (anchorId) => {
    const element = document.getElementById(anchorId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrolltopdata, setscrolltopdata] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setscrolltopdata("");
      } else {
        setscrolltopdata("scrolled");
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`header-section ${show ? "show " : ""}${scrolltopdata}`}
      >
        <nav className="header-section__inner">
          <Link
            to={"/"}
            className="header-section__logo"
          >
            <img
              src="./img/icons/farm.svg"
              alt="farm icon"
            />
            <p className="header-section__logo-text">Horsemosegaard</p>
          </Link>
          <ul>
            <li>
              <Link
                to={"/#tilbyder"}
                onClick={() => scrollToAnchor("tilbyder")}
              >
                Vi tilbyder
              </Link>
            </li>
            <li>
              <Link
                to={"/hvem-er-vi"}
                onClick={() => scrollToTop()}
              >
                Hvem er vi
              </Link>
            </li>
            <li>
              <Link
                to={"/priser"}
                onClick={() => scrollToTop()}
              >
                Priser
              </Link>
            </li>
            <li>
              <Link
                to={"/faciliteter"}
                onClick={() => scrollToTop()}
              >
                Faciliter
              </Link>
            </li>
          </ul>
          <div className="header-section__button-container">
            <PrimaryButton
              className={"primary-button--navigation"}
              text={"Kontakt"}
              href={"#kontakt"}
            />
          </div>
          <div
            onClick={() => setShow(!show)}
            className="header-section__hamburger-menu"
          >
            <div></div>
            <div></div>
          </div>
        </nav>
        <div className="header-section__mobile-menu">
          <ul>
            <li onClick={() => setShow(!show)}>
              <Link
                to={"/#tilbyder"}
                onClick={() => scrollToAnchor("tilbyder")}
              >
                Vi tilbyder
              </Link>
            </li>
            <li onClick={() => setShow(!show)}>
              <Link
                onClick={() => scrollToTop()}
                to={"/hvem-er-vi"}
              >
                Hvem er vi
              </Link>
            </li>
            <li onClick={() => setShow(!show)}>
              <Link
                onClick={() => scrollToTop()}
                to={"/priser"}
              >
                Priser
              </Link>
            </li>
            <li onClick={() => setShow(!show)}>
              <Link
                onClick={() => scrollToTop()}
                to={"/faciliter"}
              >
                Faciliter
              </Link>
            </li>
            <div
              style={{ display: "flex" }}
              onClick={() => setShow(!show)}
            >
              <PrimaryButton
                text={"Kontakt"}
                href={"#kontakt"}
              />
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}

export default HeaderSection;
