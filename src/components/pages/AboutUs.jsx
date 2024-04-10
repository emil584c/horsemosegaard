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
      <TextImage
        title={"Gården i dag"}
        text={
          "På gården bor i dag Per og Tove som begge er i midt 50’erne og elsker at være i gang og kreative herude. Per bygger og laver selv alt herude. Toves store interesse er hunde og hundetræning primært agility. Vi har anlagt en agility bane, hvor der trænes og undervises i agility. På gården bor også 2 hunde og 4 alpacaer."
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
