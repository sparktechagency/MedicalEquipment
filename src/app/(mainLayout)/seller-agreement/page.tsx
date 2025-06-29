/* eslint-disable react/no-unescaped-entities */
"use client"
import { useGetSellerAgreementQuery } from "@/redux/features/Agreement/Agreement";
import decodeHtmlEntities from "@/utils/decodeHtmlEntities";

const Page = () => {
  const { data,  isLoading } = useGetSellerAgreementQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  return (
    <div>
      <div className="w-full bg-[linear-gradient(91.26deg,_#48B1DB_3.55%,_#C4E6F3_99.57%)]">
        <h1 className="text-center text-[40px] font-bold pt-10  text-white">
          Seller Agreement
        </h1>
        <h1 className="text-center text-[16px] pt-7 pb-12">
          Have questions or need assistance? We're here to help. Reach out to us
          anytime — whether it's <br /> about product inquiries, support, or
          partnership opportunities.
        </h1>
      </div>
      <div className="md:container mx-auto px-5 md:px-36">
        <div className="bg-[#EEF9FE] rounded-lg p-5 -mt-7">
          <h1 className="text-[16px] font-bold py-2">Seller Agreement</h1>
          <p>
            {data?.data?.attributes?.content ? (
            <span
              dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(data?.data?.attributes?.content) }}
            />
          ) : (
            ""
          )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
