import Image from "next/image";
import logo from "@/assets/logo/fLogo.png"; // Replace with your updated logo path
import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:container pt-[60px] md:pt-[120px]">
      <div className="  bg-[#D1EBF6]  text-gray-800 rounded-t-lg mb-2">
        <div className="w-full px-2 py-3 border-t border-b border-gray-200">
          <div className="mx-auto grid md:grid-cols-12 gap-8  md:text-left pt-7">
            {/* Logo Section */}
            <div className="md:col-span-4 col-span-12 mb-6 md:mb-0 mx-auto">
              <Link href="/">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-md  w-[208px] h-[210px]"
                />
              </Link>
              <div className="text-center mt-1">
                <h2 className="text-lg font-semibold">MST & ASSOCIATES</h2>
                <h1>Your medical equipment <br /> specialists</h1>
              </div>
            </div>

            {/* About Section */}
            <div className="md:col-span-2 col-span-6">
              <h3 className="font-semibold text-xl mb-4">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about-us" className="hover:text-gray-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-600">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-gray-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="md:col-span-2 col-span-6">
              <h3 className="font-semibold text-xl mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms-condition"
                    className="hover:text-gray-600"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seller-agreement"
                    className="hover:text-gray-600"
                  >
                    Seller Agreement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="md:col-span-4 col-span-12 mx-auto">
              <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
              <div className="flex flex-col gap-4 justify-start">
                {/* Address */}
                <div className="flex items-start">
                  <div>
                    <p className=" text-sm">MedAuctionHub</p>
                    <p className="text-sm">123 HealthTech Street,</p>
                    <p className="text-sm">New York, NY 10001, USA</p>
                  </div>
                </div>
                {/* Phone */}
                <h1 className="flex flex-col items-start">
                  Phone: +1 (800) 456-7890
                </h1>
                <h1 className="">(Mon-Fri, 9 AM - 6 PM EST)</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links and Social Media */}
        <div className="w-full bg-[#48B1DB] text-center py-3">
          <p className="text-sm md:text-[18px] text-white">
            © 2025 MedAuctionHub. All rights reserved. | Powered by
            MedAuctionHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
