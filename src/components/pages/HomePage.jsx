import HeaderSection from "../HeaderSection.jsx";
import PrimaryCover from "../PrimaryCover.jsx";
import TextImage from "../TextImage.jsx";
import TextCalender from "../TextCalender.jsx";
import Offers from "../Offers.jsx";
import FooterSection from "../FooterSection.jsx";
import SecondaryButton from "../SecondaryButton.jsx";
import ContactSection from "../ContactSection.jsx";

function HomePage() {
  return (
    <>
      <HeaderSection />
      <PrimaryCover />
      <TextImage
        title={"Vores faciliteter"}
        text={
          "Horsemosegaard består af to større lokaler, det ene med bar, loungeområde, poolbord, dart, bordfodbold og diskotek med mulighed for “lysshow” på dansegulvet. I det andet lokale er der plankeborde, stort buffetbord, kaffebar, en sofagruppe og stort tv. Alt herinde kan rykkes rundt på efter behov. I mellem de to lokaler er et anretterkøkken, med vask, opvaskemaskine, kogeplade, ovn, mikroovn, køleskabe, mindre fryser og garderobeplads. Der er 1 toilet. Der er plankeborde, stole og service til 50 personer. Der er mulighed for at låne et græs areal til fx rundbold eller andre aktiviteter og hilse på vores alpacer."
        }
        images={[
          {
            url: "./img/room.png",
            alt: "A room",
          },
          {
            url: "./img/kitchensink.jpg",
            alt: "A kitchen area",
          },
          {
            url: "./img/longtable-tv.jpg",
            alt: "A longtable with tv in background",
          },
          {
            url: "./img/electronics.jpg",
            alt: "A room with electronics",
          },
          {
            url: "./img/bar.jpg",
            alt: "A bar",
          },
        ]}
        id={"faciliteter"}
      >
        <SecondaryButton
          text="Læs mere om vores faciliteter"
          link="/faciliteter"
        />
      </TextImage>
      <Offers
        title="Hvad tilbyder vi"
        text="På Horsemosegaard tilbyder vi vores lokaler til et bredt udvalg af arrangementer, både til private samt firmaer."
        backgroundSecondary={true}
        offers={[
          {
            title: "Fester",
            text: "Hold en livets store fester herude, såsom konfirmation, barnedåb, bryllup, runde fødselsdage mm.",
          },
          {
            title: "Firmaarrangement",
            text: "Book lokaler og evt udendørs arealer til dit næste firma arrangement. Det kan være til teambuilding, møder, sommerfest, julefrokost eller andet.",
          },
          {
            title: "Hundetræning",
            text: "Vi har en indhegnet bane på 1200 kvm som kan lejes pr time eller hele dage. På banen er agility udstyr. Der vil i perioder blive tilbudt agility træning.",
          },
          {
            title: "Hobby",
            text: "Har du brug for et sted hvor du kan undervise, holde det næste bestyrelsesmøde eller generalforsamling. Dette kan være kombination med træningsbanen udenfor.",
          },
          {
            title: "Og meget mere",
            text: "Står du og mangler et lokale til noget som ikke er på listen, og tror du vi har de helt rigtige faciliteter? Så skriv en besked eller giv os et opkald.",
          },
        ]}
      />

      <ContactSection
        title="Kontakt os"
        text="Har i spørgsmål til vores faciliteter eller om lokalerne, eller har i lyst til at tage en snak om vi er det rette sted for jer, så send en mail eller giv os et kald, og så tager vi en snak."
        image={{ url: "./img/sunset2.jpg", alt: "A sunset" }}
        backgroundSecondary={true}
      />
      <FooterSection />
    </>
  );
}

export default HomePage;
