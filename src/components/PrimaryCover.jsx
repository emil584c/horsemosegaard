import PrimaryButton from "./PrimaryButton";
import ImageGallery from "./ImageGallery";

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
        <ImageGallery
          images={[
            {
              url: "./img/speakers.png",
              alt: "1",
            },
            {
              url: "./img/room.png",
              alt: "2",
            },
            {
              url: "./img/speakers.png",
              alt: "3",
            },
            {
              url: "./img/room.png",
              alt: "4",
            },
            {
              url: "./img/speakers.png",
              alt: "5",
            },
            {
              url: "./img/room.png",
              alt: "6",
            },
          ]}
        />
      </section>
    </>
  );
}

export default PrimaryCover;
