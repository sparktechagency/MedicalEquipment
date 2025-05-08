import WhyChooseUs from "@/components/Pages/About/WhyChoose";
import AboutHero from "@/components/Pages/About/aboutHero";
import TrustedbyProfessionalsWorldwide from "@/components/Pages/coomon/TrustedbyProfessionalsWorldwide";

const AboutUsPage = () => {
  return (
    <section>
      <AboutHero />
      <div className="pt-[60px] md:pt-[120px]">
        <TrustedbyProfessionalsWorldwide />
      </div>
      <div className="pt-[60px] md:pt-[120px]">
        <WhyChooseUs />
      </div>
    </section>
  );
};

export default AboutUsPage;
