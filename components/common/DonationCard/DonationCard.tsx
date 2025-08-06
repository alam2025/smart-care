import Image from "next/image";
import React from "react";

const DonationCard = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md bg-gradient-to-r from-[#D5F4FB] via-[#06688E80] to-[#9DE4FF] border border-[#42B3CE] rounded-3xl p-3 shadow-lg overflow-hidden">
        {/* Main illustration area */}
        <div className="relative z-10">
          <Image
            src="/images/dashboard-patient/donation-image.svg"
            width={220}
            height={220}
            alt="Donation Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Donation button */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-12">
          <button className="w-full bg-[#06688E] text-white text-base font-medium cursor-pointer py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
            Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
