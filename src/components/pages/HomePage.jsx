import HeaderSection from "../HeaderSection.jsx";
import PrimaryCover from "../PrimaryCover.jsx";
import TextImage from "../TextImage.jsx";
import TextCalender from "../TextCalender.jsx";
import Offers from "../Offers.jsx";
import FooterSection from "../FooterSection.jsx";

function HomePage() {
  return (
    <>
      <HeaderSection />
      <PrimaryCover />
      <TextImage
        title={"Vores faciliteter"}
        text={
          "Thaaats insane her på gården stiller vi mange forskellige ting til rådighed bare rolig der er styr på alt for dig. mange forskellige facilititerlt for dig. mange forskellige facilititer"
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
        background={"baam"}
      />
      <Offers
        title="Hvad tilbyder vi"
        text="Horsemosegaard er for dig som ønsker nogle hyggelige lokaler i en moderne rustik stil i skønne landlige omgivelser. Det er et sted hvor man kan være aktiv sammen med sine gæster inde og ude."
        backgroundSecondary={true}
        offers={[
          {
            title: "Festlokale",
            text: "Horsemosegaard er for dig som ønsker nogle hyggelige lokaler i en moderne rustik stil ine landlige omgivelser. lokaler i en moderne rustik stil i skønne landlige omgivelser.",
          },
          {
            title: "Overnatning",
            text: "Vi har 10 værelser med plads til 30 personer. Der er fælles køkken, bad og toiletter.",
          },
          {
            title: "Udearealer",
            text: "Vi har store udearealer med mulighed for boldspil, bålplads, grill og meget mere.",
          },
          {
            title: "Aktiviteter",
            text: "Vi har forskellige aktiviteter som f.eks. hestevognskørsel, ridning, mountainbike og meget mere.",
          },
        ]}
      />
      <TextCalender
        title={"Hvornår er vi ledige?"}
        text={
          "Thaaats insane her på gården stiller vi mange forskellige ting til rådighed bare rolig der er styr på alt for dig. mange forskellige facilititerlt for dig. mange forskellige facilititer"
        }
      />
      <FooterSection />
    </>
  );
}

export default HomePage;
