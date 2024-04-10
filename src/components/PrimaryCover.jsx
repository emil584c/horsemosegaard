import PrimaryButton from "./PrimaryButton";
import ImageSlider from "./ImageSlider";

function PrimaryCover() {
  return (
    <>
      <section className="primary-cover">
        <div className="primary-cover__text-container page-container">
          <h1 className="primary-cover__title">
            Lokaler til fest, arrangementer og meget mere
          </h1>
          <p className="primary-cover__text">
            Horsemosegaard er for dig som ønsker nogle hyggelige lokaler i en
            moderne rustik stil i skønne landlige omgivelser. Det er et sted
            hvor man kan være aktiv sammen med sine gæster inde og ude.
          </p>
          <div className="primary-cover__button-container">
            <PrimaryButton
              text={"Kontakt"}
              href={"#kontakt"}
            />
            <PrimaryButton
              transparent={true}
              text={"Læs mere"}
              href={"#faciliteter"}
            />
          </div>
        </div>
        <ImageSlider
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
            {
              url: "./img/room.png",
              alt: "7",
            },
            {
              url: "./img/room.png",
              alt: "8",
            },
          ]}
        />
      </section>
    </>
  );
}

export default PrimaryCover;
