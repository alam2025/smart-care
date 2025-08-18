"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export default function DashboardHeader() {
  const pathname = usePathname();
  const { user } = useSelector((state: RootState) => state.auth);
  // Check which dashboard we're on
  const isDoctorDashboard = pathname.includes("/dashboard/doctorDashboard");
  const isPatientDashboard = pathname.includes("/dashboard/patient");

  // Doctor dashboard titles
  const doctorTitles: Record<string, string> = {
    "/dashboard/doctorDashboard": "Welcome To Smart Care",
    "/dashboard/doctorDashboard/hospital": "Hospital Management",
    "/dashboard/doctorDashboard/history": "All Doctor History Hear",
    "/dashboard/doctorDashboard/social": "Social Media",
    "/dashboard/doctorDashboard/donation": "Donations",
    "/dashboard/doctorDashboard/income": "Income Status",
    "/dashboard/doctorDashboard/nodebook": "Clinical Notes",
    "/dashboard/doctorDashboard/prescription": "Prescriptions",
    "/dashboard/doctorDashboard/settings": "Doctor Settings",
    "/dashboard/doctorDashboard/report/sales-report": "Sales Report",
    "/dashboard/doctorDashboard/report/daily-sales": "Daily Sales",
    "/dashboard/doctorDashboard/report/daily-sales-report":
      "Daily sales report",
  };

  // Patient dashboard titles
  const patientTitles: Record<string, string> = {
    "/dashboard/patient": "Welcome To Smart Care",
    "/dashboard/patient/doctor": "Find Doctors",
    "/dashboard/patient/appointment-list": "Appointment List",
    "/dashboard/patient/history": "My Medical History",
    "/dashboard/patient/donation": "My Donations",
    "/dashboard/patient/prescription": "My Prescriptions",
    "/dashboard/patient/settings": "My Settings",
  };

  // Select the right title
  let currentTitle = "Dashboard";
  if (isDoctorDashboard) {
    currentTitle = doctorTitles[pathname] || "Doctor Dashboard";
  } else if (isPatientDashboard) {
    currentTitle = patientTitles[pathname] || "Patient Dashboard";
  }

  return (
    <header className="hidden md:block relative top-0 z-40  bg-[#EBFFFE]">
      <div className="max-w-[95%] mx-auto container-md flex items-center justify-between p-2">
        <h1 className="text-[34px] text-[#2B6F71] font-[600]">
          {currentTitle}
        </h1>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={42}
              height={42}
              className="rounded-full border"
              style={{ borderColor: "#24479A" }}
            />
            <div className="ml-2 hidden md:flex flex-col text-sm">
              <span className="text-[14px] text-[#000]">
                {user && user.firstName} {user && user.lastName}
              </span>
              <span className="text-[#717070] text-[14px]">
                ID: {isDoctorDashboard ? "DOC202503" : "PAT202503"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
