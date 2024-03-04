import HeaderSection from "./HeaderSection.jsx";
import PrimaryCover from "./PrimaryCover.jsx";
import TextImage from "./TextImage.jsx";
import TextCalender from "./TextCalender.jsx";
import ImageGallery from "./ImageGallery.jsx";

function HomePage() {
  return (
    <>
      <HeaderSection />
      <PrimaryCover />
      <ImageGallery
        title={"Billeder yay"}
        text={
          "wow der er mange billeder her, ow der er mange billeder herow der er mange billeder her"
        }
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
      <TextImage
        title={"Vores faciliteter"}
        text={
          "Thaaats insane her på gården stiller vi mange forskellige ting til rådighed bare rolig der er styr på alt for dig. mange forskellige facilititerlt for dig. mange forskellige facilititer"
        }
        images={[
          {
            url: "./img/speakers.png",
            alt: "alttag",
          },
          {
            url: "./img/room.png",
            alt: "alttags",
          },
        ]}
        background={"baam"}
      />
      <TextCalender
        title={"Hvornår er vi ledige?"}
        text={
          "Thaaats insane her på gården stiller vi mange forskellige ting til rådighed bare rolig der er styr på alt for dig. mange forskellige facilititerlt for dig. mange forskellige facilititer"
        }
      />
    </>
  );
}

export default HomePage;
