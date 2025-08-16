"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import HomeIcon from "@/components/svg/homeIcon";
import DoctorIcon from "@/components/svg/doctorIcon";
import SettingIcon from "@/components/svg/settingIcon";
import DonationIcon from "@/components/svg/donationIcon";
import HistoryIcon from "@/components/svg/historyIcon";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex items-center justify-between bg-[#EBFFFE] p-4">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        <button onClick={onClose}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-[calc(100vh-4rem)] md:h-screen w-64 bg-[#EBFFFE] p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="md:hidden flex justify-between items-center mb-4">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-red-500 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <div>
          <div className="hidden md:flex items-center mb-6">
            <Image src="/logo.png" alt="Logo" width={146} height={146} />
          </div>

          <nav className="space-y-2">
            <Link
              href="/dashboard"
              onClick={onClose}
              className="flex items-center gap-2 w-full p-2 hover:bg-[#33ABAE] hover:text-white rounded font-semibold"
            >
              <HomeIcon />
              Dashboard
            </Link>

            <Link
              href="/dashboard/doctor"
              onClick={onClose}
              className="flex items-center gap-2 w-full p-2 hover:bg-[#33ABAE] hover:text-white rounded font-semibold"
            >
              <DoctorIcon />
              Doctor
            </Link>

            <Link
              href="/dashboard/history"
              onClick={onClose}
              className="flex items-center gap-2 w-full p-2 hover:bg-[#33ABAE] hover:text-white rounded font-semibold"
            >
              <HistoryIcon />
              History
            </Link>

            <Link
              href="/dashboard/donation"
              onClick={onClose}
              className="flex items-center gap-2 w-full p-2 hover:bg-[#33ABAE] hover:text-white rounded font-semibold"
            >
              <DonationIcon />
              Donation
            </Link>

            <Link
              href="/dashboard/prescription"
              onClick={onClose}
              className="flex items-center gap-2 w-full p-2 hover:bg-[#33ABAE] hover:text-white rounded font-semibold"
            >
              <DonationIcon />
              Prescription
            </Link>

            <Link
              href="/dashboard/settings"
              onClick={onClose}
              className="flex items-center gap-2 w-full p-2 hover:bg-[#33ABAE] hover:text-white rounded font-semibold"
            >
              <SettingIcon />
              Settings
            </Link>
          </nav>
        </div>

        <Link
          href="/dashboard/profile"
          onClick={onClose}
          className="flex items-center mt-6 pt-4 hover:bg-[#33ABAE] hover:text-white rounded p-2 transition-colors font-semibold"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={42}
            height={42}
            className="rounded-full border"
            style={{ borderColor: "#24479A" }}
          />
          <span className="ml-2 text-sm">My Profile</span>
        </Link>
      </aside>
    </>
  );
}
