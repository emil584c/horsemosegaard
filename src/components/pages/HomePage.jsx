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
          "Stedet består af to større lokaler, det ene med bar, loungeområde, poolbord, dart, bordfodbold og diskotek med mulighed for “lysshow” på dansegulvet. I det andet lokale er der plankeborde, stort buffetbord, kaffebar, en sofagruppe og stort tv. Alt herinde kan rykkes rundt på efter behov. I mellem de to lokaler er et anretterkøkken, med vask, kogeplade, ovn, køleskabe, mindre fryser og garderobeplads. Der er 1 toilet. Der er plankeborde, stole og service til 50 personer. Der er mulighed for at låne et græs areal til fx rundbold eller andre aktiviteter."
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
        id={"faciliteter"}
      >
        <SecondaryButton
          text="Læs mere om vores faciliteter"
          link="/faciliteter"
        />
      </TextImage>
      <Offers
        title="Hvad tilbyder vi"
        text="På Horsemosegaard tilbyder vi hyggelige lokaler i en moderne rustik stil i skønne landlige omgivelser. Det er et sted hvor man kan være aktiv sammen med sine gæster inde og ude."
        backgroundSecondary={true}
        offers={[
          {
            title: "Fester",
            text: "Hold en livets store fester herude. Konfirmation, barnedåb, bryllup, runde fødselsdage mm.",
          },
          {
            title: "Firmaarrangement",
            text: "Book lokaler og evt udendørs arealer til dit næste firma arrangement. Det kan være til teambuilding. Møder. Sommerfest eller andet. Som udgangspunkt står man selv for det hele, men vi kan også tilbyde at stå for dele af arrangementet.",
          },
          {
            title: "Hundetræning",
            text: "Vi har en indhegnet bane på 1200 kvm som kan lejes pr time eller hele dage. På banen er agility udstyr. Der vil i perioder blive tilbudt agility træning.",
          },
          {
            title: "Hobby",
            text: "Har du brug for et sted hvor du kan undervise evt i kombination med træningsbanen udenfor Eller et sted at holde det næste bestyrelsesmøde eller generalforsamling.",
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
        image={{ url: "./img/room.png", alt: "alttag" }}
        backgroundSecondary={true}
      />
      <FooterSection />
    </>
  );
}

export default HomePage;
