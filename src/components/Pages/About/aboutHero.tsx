import aboutImage from "@/assets/about/image6.png";  

const AboutHero = () => {
  return (
    <div className="w-full md:container mx-auto px-4 py-16">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] font-bold text-center mb-4">
        Empowering <span className="text-[#48B1DB] font-bold">Healthcare</span>{" "}
        Through Trusted Technology
      </h1>
      <h1 className=" md:text-xl font-semibold text-center">
        We provide reliable, cutting-edge medical equipment to empower
        healthcare professionals. Trusted technology that supports <br /> better
        care, efficiency, and outcomes.
      </h1>

      <br />
      <br />
      <br />
      <div className="lg:flex items-center justify-between">
        {/* // background image set */}
        <div
          className="w-full lg:w-[50%] p-4 h-full md:h-[50vh]"
          style={{
            backgroundImage: `url(${aboutImage.src})`,  // Accessing src properly
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
           
          }}
        >
          <h1 className="text-left text-[40px] font-semibold mb-5">
            Who <span className="text-[#48B1DB] font-semibold">We</span> Are
          </h1>
          <h1 className="md:text-[20px]">
            At Mst & Associate, we specialize in delivering high-quality,
            reliable medical equipment to healthcare professionals and
            institutions worldwide. With a strong commitment to excellence, we
            aim to support better patient care by ensuring access to trusted,
            advanced technology.
          </h1>
          <br />
          <br />
          <h1 className="md:text-[20px]">
            To empower healthcare providers with dependable medical solutions
            that enhance diagnostics, improve efficiency, and elevate patient
            outcomes.
          </h1>
        </div>
        <div className="md:flex items-center justify-between md:space-x-10">
          <div className="">
            <div className="border-b-4 border-[#48B1DB] rounded-md bg-[#EEF9FE] p-4 my-5">
              <h1 className="text-lg font-semibold text-center pb-5">Integrity</h1>
              <h1 className="text-center">
                We stand by our commitment to honesty and <br /> transparency.
              </h1>
            </div>
            <div className="border-b-4 border-[#48B1DB] rounded-md bg-[#EEF9FE] p-4 my-5">
              <h1 className="text-lg font-semibold text-center pb-5">Support</h1>
              <h1 className="text-center">
                We stand by our commitment to honesty and <br /> transparency.
              </h1>
            </div>
          </div>
          <div className="md:mt-28">
            <div className="border-b-4 border-[#48B1DB] rounded-md bg-[#EEF9FE] p-4 my-5">
              <h1 className="text-lg font-semibold text-center pb-5">Quality</h1>
              <h1 className="text-center">
                We stand by our commitment to honesty and <br /> transparency.
              </h1>
            </div>
            <div className="border-b-4 border-[#48B1DB] rounded-md bg-[#EEF9FE] p-4 my-5">
              <h1 className="text-lg font-semibold text-center pb-5">Innovation</h1>
              <h1 className="text-center">
                We embrace new technology that enhances <br /> modern healthcare.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
