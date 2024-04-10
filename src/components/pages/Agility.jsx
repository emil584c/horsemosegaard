import HeaderSection from "../HeaderSection";
import SecondaryCover from "../SecondaryCover";
import FooterSection from "../FooterSection.jsx";
import ContactSection from "../ContactSection.jsx";

export default function Agility() {
  return (
    <>
      <HeaderSection />
      <SecondaryCover title="Agility" />
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
