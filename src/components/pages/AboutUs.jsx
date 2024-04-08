import HeaderSection from "../HeaderSection";
import SecondaryCover from "../SecondaryCover";
import TextImage from "../TextImage";
import FooterSection from "../FooterSection.jsx";
import ContactSection from "../ContactSection.jsx";

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
      <ContactSection
        title="Kontakt os"
        text="Har i spørgsmål til vores faciliteter, eller har i lyst til at tage en snak om vi er det rette sted for jer, så send en besked over messenger osv osv."
        image={{ url: "./img/room.png", alt: "alttag" }}
        backgroundSecondary={true}
      />
      <FooterSection />
    </>
  );
}
