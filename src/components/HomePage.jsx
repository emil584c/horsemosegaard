import HeaderSection from "./HeaderSection.jsx";
import PrimaryCover from "./PrimaryCover.jsx";
import TextImage from "./TextImage.jsx";
import TextCalender from "./TextCalender.jsx";
import FooterSection from "./FooterSection.jsx";

function HomePage() {
  return (
    <>
      <HeaderSection />
      <PrimaryCover />
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
      <FooterSection />
    </>
  );
}

export default HomePage;
