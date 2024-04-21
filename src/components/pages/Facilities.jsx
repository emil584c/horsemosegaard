import HeaderSection from "../HeaderSection";
import SecondaryCover from "../SecondaryCover";
import TextImage from "../TextImage";
import FooterSection from "../FooterSection.jsx";
import ContactSection from "../ContactSection.jsx";

export default function Facilities() {
  return (
    <>
      <HeaderSection />
      <SecondaryCover title="Vores faciliteter" />
      <TextImage
        title={"Vores lokaler"}
        text={
          "Lokalerne er hyggelige og rustikke. Dét ene med bjælker i lofter, lys som kan dæmpes, store plankeborde og anretter borde i samme stil. I det andet lokale kan du slå dig løs på dansegulvet eller dyste i diverse spil, tage en hyggelig snak i loungeområdet eller i baren."
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
        listItems={[
          "2 Anretter køkkener med service til 50",
          "1 toilet",
          "Varmes op med elradiator",
          "Mindre udendørs terasse",
        ]}
        // primaryButtonText={"Download plantegning"}
        // primaryButtonHref={"./img/room.png"}
        // primaryButtonTargetBlank={true}
      />
      <TextImage
        title={"Aktiviter"}
        text={
          "Vi har mange sjove aktiviteter for både voksne og børn. Alle aktiviterne følger med ved leje af lokalerne."
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
        listItems={[
          "Poolbord",
          "Dart",
          "Bordfodbold",
          "Bordtennis",
          "Diskotek med lys mv.",
        ]}
        reverse={true}
        backgroundSecondary={true}
      />
      <TextImage
        title={"Elektronik"}
        text={
          "Vi stiller forskelligt elektronik og hvidevarer til rådighed. Følgende er til rådighed, men vi anbefaler at i tager kontakt for at høre om specifikke behov."
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
        listItems={[
          "3 Køleskabe",
          "Fryser",
          "Mikrobølgeovn",
          "Opvaskemaskine",
          "Kaffemaskine og elkedel",
          "Komfur",
          "Wifi",
        ]}
      />
      <ContactSection
        title="Kontakt os"
        text="Har i spørgsmål til vores faciliteter eller om lokalerne, eller har i lyst til at tage en snak om vi er det rette sted for jer, så send en mail eller giv os et kald, og så tager vi en snak."
        image={{ url: "./img/room.png", alt: "alttag" }}
        backgroundSecondary={true}
      />
      <FooterSection />
    </>
  );
}
