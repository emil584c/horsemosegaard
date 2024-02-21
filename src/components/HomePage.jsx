import PrimaryCover from "./PrimaryCover.jsx";
import TextImage from "./TextImage.jsx";

function HomePage() {
  return (
    <>
      <PrimaryCover />
      <TextImage
        title={"bar og musik"}
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
            alt: "alttag",
          },
        ]}
      />
    </>
  );
}

export default HomePage;
