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
        text="Horsemosegaard er for dig som ønsker nogle hyggelige lokaler i en moderne rustik stil i skønne landlige omgivelser. Det er et sted hvor man kan være aktiv sammen med sine gæster inde og ude."
        backgroundSecondary={true}
        offers={[
          {
            title: "Fester",
            text: "Vi tilbyder vores lokaler til fester som konfirmationer, fødselsdage eller andre arrangementer.",
          },
          {
            title: "Firmaarrangement",
            text: "Vi har 10 værelser med plads til 30 personer. Der er fælles køkken, bad og toiletter.",
          },
          {
            title: "Klubhus",
            text: "Vi har store udearealer med mulighed for boldspil, bålplads, grill og meget mere.",
          },
          {
            title: "Hundetræning",
            text: "Vi har forskellige aktiviteter som f.eks. hestevognskørsel, ridning, mountainbike og meget mere.",
          },
          {
            title: "Og meget mere",
            text: "Står du og mangler et lokale til noget som ikke er på listen, og tror du vi har de helt rigtige faciliteter? Så skriv en besked eller giv os et opkald.",
          },
        ]}
      />
      <TextCalender
        title={"Hvornår er vi ledige?"}
        text={
          "Thaaats insane her på gården stiller vi mange forskellige ting til rådighed bare rolig der er styr på alt for dig. mange forskellige facilititerlt for dig. mange forskellige facilititer"
        }
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

export default HomePage;
