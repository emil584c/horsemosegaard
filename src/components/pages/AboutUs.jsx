import HeaderSection from "../HeaderSection";
import SecondaryCover from "../SecondaryCover";
import TextImage from "../TextImage";

export default function AboutUs() {
  return (
    <>
      <HeaderSection />
      <SecondaryCover title="Hvem er vi" />
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
      />
    </>
  );
}
