"use client";
import AiAssistantButton from "@/components/AIAssistantButton";
import FloatingCallButton from "@/components/FloatingCallButton";
import DnaIcon from "@/components/svg/dnaIcon";
import SkinIcon from "@/components/svg/skinIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import InputField from "@/components/ui/InputField";
import { ArrowUpDown, PhoneOff, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const data = [
  {
    name: "Karar Mahmud",
    type: "Pending",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Karar Mahmud",
    type: "Cancel",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Karar Mahmud",
    type: "Present",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Karar Mahmud",
    type: "With Doctor",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Karar Mahmud",
    type: "pending",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export default function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await fetch("/api/booking");
        // if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        console.log("🚀 ~ fetchBooking ~ json:", json.data);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, []);

  // if (loading) return <div>Loading...</div>;

  function formatDateToDDMMYYYY(isoDateString: string): string {
    const date = new Date(isoDateString);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="min-h-screen flex bg-[#e6f6f6]">
      <main className="flex-1 pt-4">
        <div className="space-y-6 max-w-[95%] mx-auto">
          {/* top banner */}
          <div className="lg:hidden bg-white rounded-2xl p-4 shadow flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl text-[#2B6F71] font-semibold mb-2">
                Good Morning
              </h2>
              <h1 className="text-3xl font-bold text-[#000000] mb-1">
                Dr. Reyan Anis
              </h1>
              <p className="text-base text-[#616060]">
                Have a nice day at work
              </p>
            </div>
            <div>
              <Image
                src="/docter-group2.svg"
                alt="Doctors"
                width={250}
                height={120}
                className="object-contain h-[100px] w-auto"
                priority
              />
            </div>
            <div>
              <div className="fixed bottom-6 left-1/2 md:left-[57%] transform -translate-x-1/2 z-50 w-full max-w-[261px] h-[82px] px-4">
                {/* <button className="flex items-center bg-[#33ABAE] border-2 border-[#2B6F71] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#2B9A9D] transition w-full cursor-pointer">
                  <div className="mr-3 flex items-center justify-center bg-white rounded-full p-1.5">
                    <PhoneOff
                      className="h-[36px] w-[36px]"
                      style={{ color: "#33ABAE" }}
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-semibold text-[22px] sm:text-base">
                      IN Call
                    </div>
                    <div className="text-[14px] text-white/80">
                      Click To End Call.
                    </div>
                  </div>
                </button> */}
                <h1>test</h1>
              </div>
            </div>
          </div>

          {/* ------------->  top banner desktop < ----------------------- */}
          <div className="hidden lg:block bg-white rounded-2xl font-syne shadow">
            <div className="flex items-center justify-between">
              <div className="pl-8 py-8">
                <h2 className="text-[34px] text-[#2B6F71] font-semibold">
                  Good Morning
                </h2>
                <h1 className="text-[38px] font-bold text-[#000000] mb-1">
                  Dr. Reyan Anis
                </h1>
                <p className="text-[16px] text-[#616060]">
                  Have a nice day at work
                </p>
              </div>

              <Image
                src="/docter-group2.svg"
                alt="Doctors"
                width={414}
                height={190}
                className="object-contain h-[200px] w-auto"
                priority
              />

              <div className="mr-8">
                <div className=" w-full max-w-[261px]  px-4 ">
                  {/* <button className="flex items-center bg-[#33ABAE] border-2 border-[#2B6F71] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#2B9A9D] transition w-full cursor-pointer">
                    <div className="mr-3 flex items-center justify-center bg-white rounded-full p-1.5">
                      <PhoneOff
                        className="h-[36px] w-[36px]"
                        style={{ color: "#33ABAE" }}
                      />
                    </div>
                    <div className="text-left leading-tight">
                      <div className="font-semibold text-[22px] sm:text-base">
                        IN Call
                      </div>
                      <div className="text-[14px] text-white/80">
                        Click To End Call.
                      </div>
                    </div>
                  </button> */}
                  <AiAssistantButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* start table  */}
        {/* <div className='min-h-screen p-4 lg:p-6 text-gray-800 overflow-x-hidden'> */}
        <div className="space-y-6 max-w-[95%] mx-auto mt-5">
          <Card className="font-inter">
            <CardHeader className="pt-4 px-4 lg:px-[45px]">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <span className="text-lg lg:text-[22px] font-inter font-bold text-[#455468]">
                  Today Appointment
                </span>
                <div className="relative w-full md:w-[500px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search" className="pl-10 w-full" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              {/* Mobile Patient List */}
              <div className="lg:hidden space-y-3 px-4">
                {data?.map((item: any, i: any) => (
                  <div key={i} className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src={item?.image} alt={item?.name} />
                        <AvatarFallback>{item?.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-base text-[#455468] font-medium">
                          {item?.name}
                        </p>
                        <p className="text-xs text-[#5E718D]">{item?.type}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Date</p>
                        <p className="text-gray-700">{item?.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Time</p>
                        <p className="text-gray-700">{item?.time}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Phone</p>
                        <p className="text-gray-700">{item?.phone}</p>
                      </div>
                      <div>
                        <div className="flex">
                          <button className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium mt-2">
                            Prescription/Report
                          </button>
                          <button className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium mt-2">
                            Prescription/Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Patient Table */}
              <div className="hidden lg:block">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#F9FAFB] text-[#8897AE]">
                    <tr className="uppercase text-[12px]">
                      <th className="pl-[45px] pr-4 py-3">Name</th>
                      <th className="pl-[45px] pr-4 py-3">
                        <div className="flex items-center gap-1">
                          Date <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      {/* <th className="pl-[45px] pr-4 py-3">
                        <div className="flex items-center gap-1">
                          Time <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th> */}
                      <th className="pl-[45px] pr-4 py-3">
                        <div className="flex items-center gap-1">
                          Phone <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="pl-[45px] pr-4 py-3">
                        <div className="flex items-center gap-1">
                          Prescription / Report{" "}
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data?.map((item: any, i: any) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="pl-[45px] pr-4 py-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={item?.image} alt={item?.name} />
                              <AvatarFallback>{item?.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-[16px] text-[#455468]">
                                {item?.name}
                              </p>
                              <p className="text-[12px] text-[#5E718D]">
                                {item?.type}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="pl-[45px] pr-4 py-3 text-gray-700">
                          {formatDateToDDMMYYYY(item?.date)}
                        </td>
                        {/* <td className="pl-[45px] pr-4 py-3 text-gray-700"> TODO: must be uncomment
                          {item.time}
                        </td> */}
                        <td className="pl-[45px] pr-4 py-3 text-gray-700">
                          {item?.phone}
                        </td>
                        <td className="pl-[95px] pr-4 py-3 gap-2">
                          <button className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium mr-4">
                            Vist
                          </button>
                          {/* <Link
                            href="/"
                            className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium"
                          >
                            Report
                          </Link> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* </div> */}

        {/* end table  */}

        {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] pb-[130px] mt-6'>
          {[1, 2, 3].map((_, i) => (
            <div key={i} className='flex justify-center'>
              <div className='w-full max-w-[400px]'>
                <div className='relative pb-[115px]'>
                  <img src='/doctor.jpg' alt='Doctor' className='w-full h-[300px] object-cover rounded-xl shadow-sm' />
                  <div className='absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[93%]'>
                    <div className='bg-white rounded-xl shadow-sm px-4 pt-5 pb-4 text-center'>
                      <h3 className='text-[16px] font-semibold text-[#2F3131] leading-snug'>Dr. M. Moniruzzaman Khan</h3>
                      <p className='text-[14px] text-[#5B5F5F] mt-1 leading-snug'>
                        MBBS, DDV (DU), MSc (SUB), DCPD (UK)
                        <br />
                        Assistant Professor (Dermatology)
                      </p>
                      <div className='mt-2 text-[14px] text-[#5B5F5F] flex flex-col pl-0 sm:pl-12 space-y-1'>
                        <div className='flex items-center gap-2'>
                          <SkinIcon />
                          <span>Skin, Hair, Nail Specialist</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <DnaIcon />
                          <span>Sexual Diseases & Laser Surgeon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div>
          <FloatingCallButton />
        </div> */}
      </main>
    </div>
  );
}
