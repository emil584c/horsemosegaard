import HeaderSection from "../HeaderSection";
import SecondaryCover from "../SecondaryCover";
import FooterSection from "../FooterSection.jsx";
import PriceSection from "../PriceSection";
import SecondaryPriceSection from "../SecondaryPriceSection";
import ContactSection from "../ContactSection.jsx";

export default function Prices() {
  return (
    <>
      <HeaderSection />
      <SecondaryCover title="Priser" />
      <PriceSection
        title="Udlejning af lokaler"
        text="Brødtekst til priser. vores forskellige priseleje, er der ikke det helt rigtige til dig? Så tag kontakt og så tager vi en snak."
        prices={[
          {
            title: "Hverdag",
            price: "3000 kr",
            deposit: "1000 kr",
            text: "En enkelt dag og aften i hverdagen fra mandag-torsdag.",
            listItems: [
              "Depositum indbetales ved bookning",
              "Depositum tilbage betales ved annullering 60 dage før",
              "Restbeløb indbetales 14 dage før",
            ],
          },
          {
            title: "Weekend",
            price: "7500 kr + el",
            deposit: "3000 kr",
            text: "Book lokalet i en hel weekend fra fredag til og med søndag",
            listItems: [
              "El-forbrug måles før og efter",
              "Depositum indbetales ved bookning",
              "Depositum tilbage betales ved annullering 60 dage før",
              "Restbeløb indbetales 14 dage før",
            ],
          },
        ]}
      />

      <SecondaryPriceSection
        title="Andre tilkøb"
        text="Udover leje af lokaler, tilbyder vi også en række andre services og produkter, som kan tilkøbes i forbindelse med arrangementer på gården."
        prices={[
          {
            title: "Fotografering med 1969 Corvette",
            price: "500 kr",
            text: "Tilbydes i forbindelse med arrangement på gården. Billederne tages med Nikon og leveres digitalt efterfølgende.",
          },
          {
            title: "Besøge alpacer",
            price: "20 kr pr person",
            text: "Mød vores alpacaer og hør mere om disse sjove og hyggelige dyr. Tilbydes i forbindelse med arrangement på gården.",
          },
          {
            title: "Råuld",
            price: "150 kr pr 500g",
            text: "Alpaca råuld, kun 1. sortering. Groft renset.",
          },
          {
            title: "Leje af indhegnet bane",
            price: "125 kr / timen",
            text: "Leje af indhegnet bane med agility udstyr.",
          },
          {
            title: "Udlejning af hele området",
            price: "12000 kr",
            text: "Der er mulighed for leje af hele området inkl. have med petanque bane, bålsted og gårdhave til fx teambuilding eller andet.",
          },
          {
            title: "Rengøring",
            price: "3000 kr",
            text: "Som udgangspunkt klarer man dette selv - men kan tilkøbes ved weekendleje. Dog skal alt affald, flasker og madrester fjernes forinden.",
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
