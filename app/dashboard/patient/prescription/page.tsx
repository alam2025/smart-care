"use client";
import FloatingCallButton from "@/components/FloatingCallButton";
import Image from "next/image";
import React, { useState } from "react";

const prescriptions = [
  {
    id: 1,
    patient: "John Doe",
    date: "2025-06-15",
    notes: "Take 1 tablet daily.",
  },
  {
    id: 2,
    patient: "Jane Smith",
    date: "2025-06-12",
    notes: "Apply cream twice daily.",
  },
  {
    id: 3,
    patient: "Alice Johnson",
    date: "2025-06-10",
    notes: "Inhale 2 puffs every 6 hours.",
  },
];

const MedicineTable = () => {
  const medicines = [
    { name: "Napa", days: "3 days", dose: "1+1+1+1" },
    { name: "Azyth 500", days: "7 days", dose: "1+0+1" },
  ];

  return (
    <div className="w-full mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-cyan-200 text-[#000]">
            <th className="px-4 py-2 rounded-tl-md">Name Of Medicine</th>
            <th className="px-4 py-2">Days</th>
            <th className="px-4 py-2 rounded-tr-md">Dose</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {medicines.map((med, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">{med.name}</td>
              <td className="px-4 py-2">{med.days}</td>
              <td className="px-4 py-2">{med.dose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Prescription = () => {
  const [search, setSearch] = useState("");
  //   const filtered = prescriptions.filter((p) =>
  //     p.patient.toLowerCase().includes(search.toLowerCase())
  //   );
  return (
    <div className="min-h-screen flex bg-[#e6f6f6]">
      <main className="flex-1 p-6">
        <div className="flex justify-center pb-[130px]">
          <div className="w-full max-w-[1200px]">
            <div className="flex justify-center gap-6">
              <div className="w-full lg:w-3/4">
                <div className="bg-white rounded-xl shadow-md px-6 pt-6 pb-6 text-center h-full flex flex-col relative">
                  <div className="flex flex-row justify-between items-start">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={100}
                      height={100}
                      priority
                    />
                    {/* <img
                      src="/Group.png"
                      alt="Logo"
                      className="w-[70px] h-[56px] sm:w-[154px] sm:h-[124.17px]"
                    /> */}
                    <div className="block sm:hidden w-[220px] overflow-hidden">
                      <div
                        className="bg-[#42B3CE] text-white px-4 py-2"
                        style={{
                          clipPath:
                            "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        }}
                      >
                        <div className="text-right">
                          <h2 className="text-sm font-bold uppercase tracking-wide">
                            Dr. Alexis Wolves
                          </h2>
                          <p className="text-xs">Cardiologist</p>
                          <p className="text-[10px] mt-1">
                            MBBS, Diploma, FCPS (UK)
                          </p>
                          <p className="text-[10px]">BMDC Reg. No: 20536</p>
                        </div>
                      </div>
                      <div className=" flex items-center  py-3 space-x-1">
                        <div
                          className="w-4 h-4 bg-[#06688E]"
                          style={{
                            clipPath:
                              "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                          }}
                        ></div>
                        <div
                          className="w-4 h-4 bg-[#06688E]"
                          style={{
                            clipPath:
                              "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                          }}
                        ></div>
                        <div
                          className="w-4 h-4 bg-[#06688E]"
                          style={{
                            clipPath:
                              "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                          }}
                        ></div>
                        <div
                          className="flex-1 h-4 bg-[#06688E]"
                          style={{
                            clipPath:
                              "polygon(3% 0, 100% 0%, 100% 100%, 0% 100%)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="hidden sm:block w-80 overflow-hidden absolute top-0 right-0 z-10">
                      <div
                        className="bg-[#42B3CE] text-white px-6 py-4"
                        style={{
                          clipPath:
                            "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        }}
                      >
                        <div className="text-right">
                          <h2 className="text-lg font-bold uppercase tracking-wide">
                            Dr. Alexis Wolves
                          </h2>
                          <p className="text-sm">Cardiologist</p>
                          <p className="text-xs mt-1">
                            MBBS, Diploma, FCPS (UK)
                          </p>
                          <p className="text-xs">BMDC Reg. No: 20536</p>
                        </div>
                      </div>
                      <div className="flex items-center py-3 space-x-1">
                        <div
                          className="w-4 h-6 bg-[#06688E]"
                          style={{
                            clipPath:
                              "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                          }}
                        ></div>
                        <div
                          className="w-4 h-6 bg-[#06688E]"
                          style={{
                            clipPath:
                              "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                          }}
                        ></div>
                        <div
                          className="w-4 h-6 bg-[#06688E]"
                          style={{
                            clipPath:
                              "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                          }}
                        ></div>
                        <div
                          className="flex-1 h-6 bg-[#06688E]"
                          style={{
                            clipPath:
                              "polygon(1.5% 0, 100% 0%, 100% 100%, 0% 100%)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="block sm:hidden mt-4 text-left">
                    <div className="grid grid-cols-1 gap-2 text-[16px] text-[#5B5F5F]">
                      <p>
                        <strong>Full Name: Refat Al Rahim</strong>
                      </p>
                      <p>
                        <strong>Patient Age: 25</strong>
                      </p>
                      <p>
                        <strong>Sex: Male</strong>
                      </p>
                      <p>
                        <strong>Phone Number: 0170000000</strong>
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:grid grid-cols-2 gap-4 text-[18px] text-left mb-4 mt-20 text-[#5B5F5F]">
                    <p>
                      <strong>Patient Name: Refat Al Rahim</strong>
                    </p>
                    <p>
                      <strong className="pl-[88px]">
                        Phone Number: 0170000000
                      </strong>
                    </p>
                    <p>
                      <strong>Patient Age: 25</strong>
                    </p>
                    <p className="pl-[88px]">
                      <strong>Sex: Male</strong>
                    </p>
                    <p>
                      <strong>Select Patient Disease: Fiver</strong>
                    </p>
                  </div>

                  <hr className="border-dashed border-3 border-[#06688E] my-4" />
                  <div className="block sm:hidden">
                    <div className="w-full relative min-h-[80px]">
                      <p className="text-2xl font-serif mb-2 text-left">℞</p>
                      <MedicineTable />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6 border-2 border-[#06688E] rounded-lg p-4">
                      <div className="border-r-2 border-dashed border-[#06688E] pr-4">
                        <p className="text-[18px]  text-[#06688E] mb-3 border-dashed border-b-1 border-[#06688E] inline pb-1">
                          Risk Factors
                        </p>
                        <ul className="list-none text-[14px] text-[#000] list-inside pt-2">
                          <li className="pb-1">O/E -</li>
                          <li className="pb-1">Pulse -</li>
                          <li className="pb-1">Bp -</li>
                          <li className="pb-1">Heart -</li>
                          <li className="pb-1">Lung -</li>
                          <li className="pb-1">Others -</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[18px] text-[#06688E] mb-3 border-dashed border-b-1 border-[#06688E] inline pb-1">
                          Risk Factory
                        </p>
                        <ul className="list-none text-[14px] text-[#000] list-inside pt-2">
                          <li className="pb-1">ECG, CXR (P/A), RBS</li>
                          <li className="pb-1">Echo 2D/Doppler</li>
                          <li className="pb-1">S. TSH, S. Creatine</li>
                          <li className="pb-1">CBC, FBS, 2hABF, HbA1C</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex gap-4 text-left text-sm flex-grow">
                    <div className="w-1/3 mt-10 mb-14">
                      <p className="text-[18px] text-[#06688E] font-bold mb-5 border-dashed border-b-1 border-[#06688E] inline pb-1">
                        Risk Factors
                      </p>
                      <ul className="list-none text-[14px] text-[#000] list-inside pt-4 mb-4">
                        <li className="pb-1">O/E -</li>
                        <li className="pb-1">Pulse -</li>
                        <li className="pb-1">Bp -</li>
                        <li className="pb-1">Heart -</li>
                        <li className="pb-1">Lung -</li>
                        <li className="pb-1">Others -</li>
                      </ul>
                      <p className="text-[18px] text-[#06688E] font-bold mb-5 border-dashed border-b-1 border-[#06688E] inline pb-1 pt-3">
                        Risk Factory
                      </p>
                      <ul className="list-inside pt-4 list-none text-[14px] text-[#000]">
                        <li className="pb-1">ECG, CXR (P/A), RBS</li>
                        <li className="pb-1">Echo 2D/Doppler</li>
                        <li className="pb-1">S. TSH, S. Creatine</li>
                        <li className="pb-1">CBC, FBS, 2hABF, HbA1C</li>
                      </ul>
                    </div>
                    <div className="border-l-3 border-dashed border-[#06688E] pl-4"></div>
                    <div className="w-2/3 relative">
                      <p className="text-2xl font-serif mb-2">℞</p>
                      <MedicineTable />
                    </div>
                  </div>

                  <div className="mt-6 text-sm text-left">
                    <p className="text-[18px] text-[#06688E] mb-5 border-dashed border-b-1 border-[#06688E] inline mb-2 pb-0.5">
                      General Advice
                    </p>
                    <ul className="list-decimal list-inside space-y-1 pt-1.5 text-[14px] text-[#000]">
                      <li>
                        Always keep learning – Medicine never stops evolving,
                        and neither should you.
                      </li>
                      <li>
                        Really listen to patients – They'll often tell you the
                        diagnosis if you let them talk.
                      </li>
                      <li>
                        Protect your own health – You can't care for others if
                        you're running on empty.
                      </li>
                      <li>
                        Document clearly and timely – Good notes help everyone
                        clinically and legally.
                      </li>
                      <li>
                        Treat the whole team with respect – You're not an
                        island.
                      </li>
                      <li>Explain things simply – Clear words build trust.</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <img src="/qr.jpg" alt="qr" className="w-[80px] h-[80px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <FloatingCallButton />
        </div> */}
      </main>
    </div>
  );
};

export default Prescription;
