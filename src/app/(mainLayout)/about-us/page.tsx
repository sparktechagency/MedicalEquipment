import WhyChooseUs from "@/components/Pages/About/WhyChoose"
import TrustedbyProfessionalsWorldwide from "@/components/Pages/coomon/TrustedbyProfessionalsWorldwide"

const AboutUsPage = () => {
  return (
    <section>
       <div className="pt-[60px] md:pt-[120px]">
        <TrustedbyProfessionalsWorldwide />
      </div>  
       <div className="pt-[60px] md:pt-[120px]">
        <WhyChooseUs />
      </div>  
    </section>
  )
}

export default AboutUsPage