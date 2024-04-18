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
        text="Brødtekst til priser. vores forskellige priseleje, er der ikke det helt rigtige til dig? Så tag kontakt og så tager vi en snak."
        prices={[
          {
            title: "Fotografering med 1969 Corvette",
            price: "500 kr",
            text: "En enkelt dag/aften i en af hverdagene fra mandag-torsdag.",
          },
          {
            title: "Besøge alpacer",
            price: "20 kr pr person",
            text: "Book lokalet i en hel weekend fra fredag til og med søndag",
          },
          {
            title: "Råuld",
            price: "100 kr pr 500g",
            text: "En enkelt dag/aften i en af hverdagene fra mandag-torsdag.",
          },
          {
            title: "Leje af indhegnet bane",
            price: "125 kr / timen",
            text: "Book lokalet i en hel weekend fra fredag til og med søndag",
          },
          {
            title: "Udlejning af hele gården",
            price: "12000 kr",
            text: "En enkelt dag/aften i en af hverdagene fra mandag-torsdag.",
          },
          {
            title: "Rengøring",
            price: "3000 kr",
            text: "Book lokalet i en hel weekend fra fredag til og med søndag",
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
