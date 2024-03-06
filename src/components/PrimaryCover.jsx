import PrimaryButton from "./PrimaryButton";

function PrimaryCover() {
  return (
    <>
      <section className="primary-cover">
        <div className="primary-cover__text-container page-container">
          <h1 className="primary-cover__title">
            Samsamsam med fokus på den oplevelse
          </h1>
          <p className="primary-cover__text">
            Horsemosegaard er gården stiller vi mangle forskellige ting til
            rådighed bare rolig der er styr på alt for dig. mange forskellige
            facilititer
          </p>
          <PrimaryButton text={"Læs mere"} />
        </div>
        <div className="primary-cover__image-container object-fit">
          <img
            src="/img/cover-image.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default PrimaryCover;
