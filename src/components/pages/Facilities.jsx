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
          "Horsemosegaard er et meget velholdt landsted fra 1900. Et tidligere landbrug og slægtsgård. Vi overtog gården i sommeren 2019 og gik stille og roligt i gang med at renovere de gamle staldbygninger og laden. Vi fandt ting på gården, som vi har brugt til renovering og til dekorationer på væggene og har forsøgt at bevare en hyggelig og rustik stil hele vejen igennem."
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
        primaryButtonText={"Download plantegning"}
        primaryButtonHref={"./img/room.png"}
        primaryButtonTargetBlank={true}
      />
      <TextImage
        title={"Det sjove"}
        text={
          "Horsemosegaard er et meget velholdt landsted fra 1900. Et tidligere landbrug og slægtsgård. Vi overtog gården i sommeren 2019 og gik stille og roligt i gang med at renovere de gamle staldbygninger og laden. Vi fandt ting på gården, som vi har brugt til renovering og til dekorationer på væggene og har forsøgt at bevare en hyggelig og rustik stil hele vejen igennem."
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
        reverse={true}
        backgroundSecondary={true}
      />
      <TextImage
        title={"Service og hvidevarer"}
        text={
          "Horsemosegaard er et meget velholdt landsted fra 1900. Et tidligere landbrug og slægtsgård. Vi overtog gården i sommeren 2019 og gik stille og roligt i gang med at renovere de gamle staldbygninger og laden. Vi fandt ting på gården, som vi har brugt til renovering og til dekorationer på væggene og har forsøgt at bevare en hyggelig og rustik stil hele vejen igennem."
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
