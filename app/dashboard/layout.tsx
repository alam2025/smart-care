"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Flag, Menu, Redo, Redo2 } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import HomeIcon from "@/components/svg/homeIcon";
import DoctorIcon from "@/components/svg/doctorIcon";
import SettingIcon from "@/components/svg/settingIcon";
import DonationIcon from "@/components/svg/donationIcon";
import HistoryIcon from "@/components/svg/historyIcon";
import DoctorHomeIcon from "@/components/svg/doctorHomeIcon";
import DoctorHospitalIcon from "@/components/svg/doctorHospitalIcon";
import SocialIcon from "@/components/svg/socialIcon";
import { IncomeIcon } from "@/components/svg/incomeIcon";
import { NodebookIcon } from "@/components/svg/nodebookIcon";
import DonationCard from "@/components/common/DonationCard/DonationCard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const pathname = usePathname();
  const isDoctor = pathname.includes("/dashboard/doctorDashboard");
  const isPharmaDashboard = pathname.includes("/dashboard/pharmaDashboard");

  const toggleItem = (name: string) => {
    setOpenItems((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const menuItems = isDoctor
    ? [
        {
          name: "Dashboard",
          href: "/dashboard/doctorDashboard",
          icon: <DoctorHomeIcon />,
        },
        {
          name: "History",
          href: "/dashboard/doctorDashboard/doctorHistory",
          icon: <HistoryIcon />,
        },
        {
          name: "Hospital",
          href: "/dashboard/doctorDashboard/hospital",
          icon: <DoctorHospitalIcon />,
        },
        {
          name: "Income Status",
          href: "/dashboard/doctorDashboard/income",
          icon: <IncomeIcon />,
        },
        {
          name: "Donation",
          href: "/dashboard/doctorDashboard/donation",
          icon: <DonationIcon />,
        },
        {
          name: "Social Media",
          href: "/dashboard/doctorDashboard/social",
          icon: <SocialIcon />,
        },

        // {
        //   name: "Reports",
        //   href: "/dashboard/doctorDashboard/nodebook",
        //   icon: <NodebookIcon />,
        //   children: [
        //     {
        //       name: "Sales Report",
        //       href: "/dashboard/doctorDashboard/report/sales-report",
        //       icon: <Redo2 className="w-4" />,
        //     },
        //     {
        //       name: "Daily Sales",
        //       href: "/dashboard/doctorDashboard/report/daily-sales",
        //       icon: <Redo2 className="w-4" />,
        //     },
        //     {
        //       name: "Daily sales report",
        //       href: "/dashboard/doctorDashboard/report/daily-sales-report",
        //       icon: <Redo2 className="w-4" />,
        //     },
        //   ],
        // },
        // {
        //   name: "Nodebook",
        //   href: "/dashboard/doctorDashboard/nodebook",
        //   icon: <NodebookIcon />,
        // },
        // {
        //   name: "Prescription",
        //   href: "/dashboard/doctorDashboard/prescription",
        //   icon: <DonationIcon />,
        // },
        // {
        //   name: "Settings",
        //   href: "/dashboard/doctorDashboard/settings",
        //   icon: <SocialIcon />,
        // },
      ]
    : isPharmaDashboard
    ? [
        {
          name: "Dashboard",
          href: "/dashboard/pharmaDashboard",
          icon: <HomeIcon />,
        },
        {
          name: "Reports",
          href: "/dashboard/pharmaDashboard/nodebook",
          icon: <NodebookIcon />,
          children: [
            {
              name: "Sales Report",
              href: "/dashboard/pharmaDashboard/report/sales-report",
              icon: <Redo2 className="w-4" />,
            },
            {
              name: "Daily Sales",
              href: "/dashboard/pharmaDashboard/report/daily-sales",
              icon: <Redo2 className="w-4" />,
            },
            {
              name: "Daily sales report",
              href: "/dashboard/pharmaDashboard/report/daily-sales-report",
              icon: <Redo2 className="w-4" />,
            },
          ],
        },
      ]
    : [
        { name: "Dashboard", href: "/dashboard/patient", icon: <HomeIcon /> },
        // {
        //   name: "Appointment List",
        //   href: "/dashboard/patient/appointment-list",
        //   icon: <DoctorIcon />,
        // },
        // {
        //   name: "Doctor",
        //   href: "/dashboard/patient/doctor",
        //   icon: <DoctorIcon />,
        // },
        {
          name: "History",
          href: "/dashboard/patient/history",
          icon: <HistoryIcon />,
        },
        {
          name: "Donation",
          href: "/dashboard/patient/donation",
          icon: <DonationIcon />,
        },
        // {
        //   name: "Prescription",
        //   href: "/dashboard/patient/prescription",
        //   icon: <DonationIcon />,
        // },
        {
          name: "Settings",
          href: "/dashboard/patient/settings",
          icon: <SettingIcon />,
        },
      ];

  return (
    <div className="min-h-screen bg-[#e6f6f6] text-gray-800 flex flex-col">
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between bg-[#EBFFFE] p-4">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        <button onClick={() => setIsSidebarOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-0 left-0 min-h-screen w-64 bg-[#EBFFFE] p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out z-50 ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="md:hidden flex justify-between items-center mb-4">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
            <button
              onClick={() => setIsSidebarOpen(false)}
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
              {menuItems.map((item) => {
                const isOpen = openItems.includes(item.name);

                return (
                  <div key={item.name}>
                    {item.children ? (
                      <button
                        type="button"
                        onClick={() => toggleItem(item.name)}
                        className="flex items-center justify-between w-full p-2 hover:bg-[#33ABAE] hover:text-white rounded font-semibold transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          {item.icon}
                          {item.name}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className="flex items-center gap-2 w-full p-2 hover:bg-[#33ABAE] hover:text-white rounded font-semibold transition-colors"
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    )}

                    {/* Child menu */}
                    {item.children && isOpen && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className="flex items-center gap-2 w-full p-2 text-sm hover:bg-[#A2DDDF] hover:text-black rounded transition-colors"
                          >
                            {child.icon}
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
          {/* -------> donation card is here < ------------ */}
          <div>
            <DonationCard />

            <p className="font-semibold text-base my-8 text-[#455468]">
              Copyright © 2025{" "}
              <Link href="/">
                <span className="underline">Smart Care</span>
              </Link>
            </p>
          </div>

          {/* -------> sidebar profile is here < ------------ */}
          {/* <Link
            href="/dashboard/doctorDashboard/profile"
            onClick={() => setIsSidebarOpen(false)}
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
          </Link> */}
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-0 sm:p-2 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
