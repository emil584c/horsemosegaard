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
            deposit: "500 kr",
            text: "En enkelt dag/aften i en af hverdagene fra mandag-torsdag.",
            listItems: [
              "El-forbrug måles før og efter",
              "Depositum indbetales ved bookning",
              "Depositum tilbage betales ved annullering 90 dage før",
              "Restbeløb indbetales 30 dage før",
            ],
          },
          {
            title: "Weekend",
            price: "7000 kr",
            deposit: "3000 kr",
            text: "Book lokalet i en hel weekend fra fredag til og med søndag",
            listItems: ["Liste punkt 1", "Liste punkt 2"],
          },
        ]}
      />

      <SecondaryPriceSection
        title="Andre tilkøb"
        text="Brødtekst til priser. vores forskellige priseleje, er der ikke det helt rigtige til dig? Så tag kontakt og så tager vi en snak."
        prices={[
          {
            title: "Hverdag",
            price: "3000 kr",
            text: "En enkelt dag/aften i en af hverdagene fra mandag-torsdag.",
          },
          {
            title: "Weekend",
            price: "7000 kr",
            text: "Book lokalet i en hel weekend fra fredag til og med søndag",
          },
          {
            title: "Hverdag",
            price: "3000 kr",
            text: "En enkelt dag/aften i en af hverdagene fra mandag-torsdag.",
          },
          {
            title: "Weekend",
            price: "7000 kr",
            text: "Book lokalet i en hel weekend fra fredag til og med søndag",
          },
          {
            title: "Hverdag",
            price: "3000 kr",
            text: "En enkelt dag/aften i en af hverdagene fra mandag-torsdag.",
          },
          {
            title: "Weekend",
            price: "7000 kr",
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
