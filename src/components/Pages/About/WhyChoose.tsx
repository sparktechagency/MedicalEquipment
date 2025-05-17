import Image from "next/image";
import icon1 from "@/assets/WhyChooseUs/Frame 2147225860.png"; // Adjust path if needed
import icon2 from "@/assets/WhyChooseUs/2nd.png";
import icon3 from "@/assets/WhyChooseUs/3rd.png";
import icon4 from "@/assets/WhyChooseUs/Frame 2147225864.png";

const WhyChooseUs = () => {
  return (
    <div className="w-full md:container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center md:mb-16">
        Why <span className="text-[#48B1DB] font-bold">Choose</span> Us
      </h2>
      <br />
      <br />
      {/* Grid structure with responsive adjustments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Item: Trusted by medical professionals */}
        <div className="relative flex flex-col items-center">
          <div className="p-6 rounded-full mb-4">
            <Image
              src={icon1}
              alt="Trusted by medical professionals"
              width={488}
              height={100}
              className="object-contain"
            />
          </div>
          <h3 className="md:absolute -mt-10 text-xl font-semibold text-center">
            Trusted by medical <br /> professionals
          </h3>
        </div>

        {/* Second Item: Certified equipment only */}
        <div className="flex flex-col items-center">
          <div className="p-6 rounded-full mb-4">
            <Image
              src={icon2}
              alt="Certified equipment only"
              width={488}
              height={100}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-center">
            Certified <br /> equipment only
          </h3>
        </div>

        {/* Third Item: Fast and safe delivery */}
        <div className="relative flex flex-col items-center">
          <div className="p-6 rounded-full mb-4">
            <Image
              src={icon3}
              alt="Fast and safe delivery"
              width={488}
              height={100}
              className="object-contain"
            />
          </div>
          <h3 className="md:absolute -mt-10 text-xl font-semibold text-center">
            Fast and safe <br /> delivery
          </h3>
        </div>

        {/* Fourth Item: Responsive customer service */}
        <div className="flex flex-col items-center">
          <div className="p-6 rounded-full mb-4">
            <Image
              src={icon4}
              alt="Responsive customer service"
              width={488}
              height={100}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-center">
            Responsive <br /> customer service
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
