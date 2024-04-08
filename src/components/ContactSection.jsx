export default function ContactSection(props, backgroundSecondary) {
  return (
    <section
      className={`contact-section ${
        backgroundSecondary ? "background-secondary" : ""
      }`}
    >
      <div className="contact-section__inner page-container">
        <div className="contact-section__text-container">
          <h2 className="contact-section__title">{props.title}</h2>
          <p className="contact-section__text">{props.text}</p>
          <div className="contact-section__info">
            <div className="contact-section__phone">
              <a href="tel:+21564229">+45 21 67 42 29</a>
            </div>
            <div className="contact-section__mail">
              <a href="mailto:emilwaellind@gmail.com">emilwaellind@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="contact-section__image-container object-fit">
          <img
            src={props.image.url}
            alt={props.image.alt}
          />
        </div>
      </div>
    </section>
  );
}
