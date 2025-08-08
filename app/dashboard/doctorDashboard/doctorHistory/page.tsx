// 'use client';
// import { useState } from 'react';
// import { Eye, Star } from 'lucide-react';
// import FloatingCallButton from '@/components/FloatingCallButton';
// import EmailIcon from '@/components/svg/emailIcon';
// import PhoneIcon from '@/components/svg/phoneIcon';
// import GenderIcon from '@/components/svg/genderIcon';
// import AgeIcon from '@/components/svg/ageIcon';
// import LocationIcon from '@/components/svg/locationIcon';
// import HospitalIcon from '@/components/svg/hospitalIcon';

// const patients = [
//   {
//     name: 'Karar Mahmud',
//     id: 'ID:202545',
//     email: 'kararmahmud@gmail.com',
//     phone: '01601524797',
//     gender: 'Male',
//     age: 26,
//     address: '47 W 13th St, New York, NY 10011, USA',
//     hospital: 'Apollo Hospitals',
//     img: '/patient.png',
//   },
//   ...Array(8)
//     .fill(1)
//     .map((_, i) => ({
//       name: ` ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Taylor'][i]}`,
//       id: `ID:${202545 + i + 1}`,
//       email: `patient${i + 2}@gmail.com`,
//       phone: `016${Math.floor(10000000 + Math.random() * 90000000)}`,
//       gender: i % 2 === 0 ? 'Male' : 'Female',
//       age: 30 + i,
//       address: `${i + 100} W ${i + 10}th St, New York, NY 10011, USA`,
//       hospital: ['Apollo Hospitals', 'City Medical', 'General Hospital'][i % 3],
//       img: '/patient.png',
//     })),
// ];

// export default function DoctorChatInterface() {
//   const [selectedDoctor, setSelectedDoctor] = useState(patients[0]);

//   const PatientList = () => (
//     <div className="space-y-2">
//       <h2 className="text-[18px] font-semibold mb-4 text-[#06688E]">
//         All History doctor
//       </h2>
//       {patients.map((doc, index) => (
//         <div
//           key={index}
//           className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[#E3F7FF] transition-colors ${
//             selectedDoctor.id === doc.id ? "bg-[#E3F7FF]" : ""
//           }`}
//           onClick={() => setSelectedDoctor(doc)}
//         >
//           <img
//             src={doc.img}
//             alt={doc.name}
//             className="w-[40px] h-[40px] rounded-full object-cover"
//           />
//           <div className="flex-1 min-w-0">
//             <p className="font-semibold text-[16px] truncate text-[#455468]">
//               {doc.name}
//             </p>
//             <p className="text-[16px] text-[#455468] truncate">{doc.id}</p>
//           </div>
//           <button className="flex items-center gap-1 text-[14px] cursor-pointer text-[#2B6F71] bg-[#2B6F714D] bg-opacity-30 px-2 py-[4px] rounded-md hover:bg-opacity-40 transition-colors">
//             <Eye className="w-3 h-3" />
//             <span>Profile</span>
//           </button>
//         </div>
//       ))}
//     </div>
//   );

//   const PatientInfo = () => (
//     <>
//       <h2 className='text-[18px] font-semibold mb-4 text-[#06688E]'>About Patient</h2>
//       <div className='mb-6 border-b border-[#E9EFF6] pb-4'>
//         <div className='flex items-center gap-3'>
//           <img src={selectedDoctor.img} alt={selectedDoctor.name} className='w-[62px] h-[62px] rounded-full object-cover' />
//           <div>
//             <p className='font-semibold text-[20px] text-black'>{selectedDoctor.name}</p>
//             <p className='text-[18px] text-[#455468]'>{selectedDoctor.id}</p>
//           </div>
//         </div>
//       </div>
//       <ul className='space-y-4 mb-6'>
//         <li className='flex items-start gap-3'>
//           <EmailIcon />
//           <div>
//             <p className='text-xs text-gray-500'>Email</p>
//             <p className='text-sm'>{selectedDoctor.email}</p>
//           </div>
//         </li>
//         <li className='flex items-start gap-3'>
//           <PhoneIcon />
//           <div>
//             <p className='text-xs text-gray-500'>Phone</p>
//             <p className='text-sm'>{selectedDoctor.phone}</p>
//           </div>
//         </li>
//         <li className='flex items-start gap-3'>
//           <GenderIcon />
//           <div>
//             <p className='text-xs text-gray-500'>Gender</p>
//             <p className='text-sm'>{selectedDoctor.gender}</p>
//           </div>
//         </li>
//         <li className='flex items-start gap-3'>
//           <AgeIcon />
//           <div>
//             <p className='text-xs text-gray-500'>Age</p>
//             <p className='text-sm'>{selectedDoctor.age} years</p>
//           </div>
//         </li>
//         <li className='flex items-start gap-3'>
//           <LocationIcon />
//           <div>
//             <p className='text-xs text-gray-500'>Address</p>
//             <p className='text-sm'>{selectedDoctor.address}</p>
//           </div>
//         </li>
//         <li className='flex items-start gap-3'>
//           <HospitalIcon />
//           <div>
//             <p className='text-xs text-gray-500'>Hospital</p>
//             <p className='text-sm'>{selectedDoctor.hospital}</p>
//           </div>
//         </li>
//       </ul>
//       <div className='text-center'>
//         <button className='bg-[#06688E] text-white cursor-pointer py-2 px-4 rounded-md text-sm font-medium mb-5'>Download Prescriptions</button>
//         <button className='bg-[#42B3CE] text-white cursor-pointer py-2 px-4 rounded-md text-sm font-medium'>View Prescriptions</button>
//       </div>
//     </>
//   );

//   const ChatSection = () => (
//     <div className='space-y-6'>
//       <div className='flex justify-end gap-3'>
//         <div className='bg-[#005A8D] text-white px-4 py-2 rounded-xl max-w-[70%]'>
//           Write your message
//           <p className='text-xs text-gray-200 text-right mt-1'>3:23 PM</p>
//         </div>
//         <img src={selectedDoctor.img} alt='User' className='w-10 h-10 rounded-full object-cover flex-shrink-0' />
//       </div>
//       <div className='flex gap-3'>
//         <img src={selectedDoctor.img} alt={selectedDoctor.name} className='w-10 h-10 rounded-full object-cover flex-shrink-0' />
//         <div className='bg-[#F9FAFB] border border-[#E9EFF6] px-4 py-2 rounded-xl max-w-[70%] text-gray-800'>
//           Write your message
//           <p className='text-xs text-gray-400 text-right mt-1'>3:23 PM</p>
//         </div>
//       </div>
//     </div>
//   );

//   const PrescriptionSection = () => (
//     <div className='mt-4'>
//       <div className='flex items-center gap-4 mb-4'>
//         <div className='text-2xl font-serif'>℞</div>
//       </div>
//       <div className='text-center mb-4'>
//         <h2 className='text-[#8E9397] text-[14px]'>Suggested Prescription</h2>
//       </div>
//       <div className='space-y-2'>
//         {[1, 2].map((_, rowIndex) => (
//           <div key={rowIndex} className='grid grid-cols-12 gap-2'>
//             <div className='relative col-span-5'>
//               <select className='appearance-none border border-[#E9EFF6] px-3 py-1 pr-8 rounded text-sm w-full focus:outline-none'>
//                 <option>{rowIndex === 0 ? 'Napa' : 'Azyth 500'}</option>
//                 <option>{rowIndex === 0 ? 'Paracetamol' : 'Antibiotic'}</option>
//               </select>
//               <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center'>
//                 <svg className='h-4 w-4 text-[#42B3CE]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
//                 </svg>
//               </div>
//             </div>
//             <div className='relative col-span-2'>
//               <select className='appearance-none border border-[#E9EFF6] px-2 py-1 pr-6 rounded text-sm w-full text-center focus:outline-none'>
//                 <option>{rowIndex === 0 ? '3' : '7'}</option>
//                 <option>{rowIndex === 0 ? '5' : '10'}</option>
//               </select>
//               <div className='pointer-events-none absolute inset-y-0 right-1 flex items-center'>
//                 <svg className='h-4 w-4 text-[#42B3CE]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
//                 </svg>
//               </div>
//             </div>
//             <div className='relative col-span-5'>
//               <select className='appearance-none border border-[#E9EFF6] px-3 py-1 pr-8 rounded text-sm w-full focus:outline-none'>
//                 <option>{rowIndex === 0 ? '1+1+1' : '1+0+1'}</option>
//                 <option>{rowIndex === 0 ? '1+0+1' : '0+1+1'}</option>
//               </select>
//               <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center'>
//                 <svg className='h-4 w-4 text-[#42B3CE]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Responsive card layout */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-1 pb-6 mt-6'>
//         {[1, 2, 3].map((_, i) => (
//           <div key={i} className='bg-white rounded-xl shadow-md p-3 relative'>
//             <div className='absolute top-3 right-0 bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-l-full flex items-center gap-1'>
//               <Star className='w-3 h-3' />
//               <span>4.2</span>
//             </div>
//             <img src='/image 2.png' alt='Medicine' className='w-[74px] h-[55px] mx-auto mb-2' />
//             <h3 className='text-[12px] text-[#0C0C0C] font-semibold leading-tight mb-1 text-center'>NATURE’S PLUS B COMPLEX 60</h3>
//             <p className='text-[12px] text-[#7C7C7C] leading-tight text-center'>Lorem ipsum dolor sitamet,consectetur adipiscing elit,</p>
//           </div>
//         ))}
//       </div>

//       <div className='text-center mt-4'>
//         <button className='bg-[#005A8D] text-white px-6 py-2 rounded-md text-sm mb-8'>Generate</button>
//       </div>
//     </div>
//   );

//   const RiskFactorsSection = () => (
//     <div className='grid grid-cols-2 gap-6 mb-6'>
//       <div>
//         <h4 className='text-[18px] text-[#06688E] pb-[5px] mb-3 inline-block border-b-2 border-dotted border-[#06688E]'>Risk Factors</h4>
//         <ul className='text-sm space-y-2 mt-2'>
//           <li>O/E:</li>
//           <li>Pulse-</li>
//           <li>Bp-</li>
//           <li>Heart-</li>
//           <li>Lung-</li>
//           <li>Others-</li>
//         </ul>
//       </div>
//       <div>
//         <h4 className='text-[18px] text-[#06688E] pb-[5px] mb-3 inline-block border-b-2 border-dotted border-[#06688E]'>Risk Factors</h4>
//         <ul className='text-sm space-y-2 mt-2'>
//           <li>ECG, CXR (P/A), RBS</li>
//           <li>Echo 2D/Doppler</li>
//           <li>S. TSH, S. Creatine</li>
//           <li>CBC, FBS, 2HABF</li>
//           <li>HbA1C</li>
//         </ul>
//       </div>
//     </div>
//   );

//   return (
//     <div className='p-4'>
//     <div className='flex flex-col h-[100%] bg-white text-gray-800 m-3'>
//       <div className='flex flex-col md:hidden'>
//         <div className='w-full bg-white p-4 border-b border-[#E9EFF6]'>
//           <PatientList />
//         </div>
//         <div className='w-full bg-white p-4 border-b border-[#E9EFF6]'>
//           <ChatSection />
//           <PrescriptionSection />
//           <RiskFactorsSection />
//         </div>
//         <div className='w-full bg-white p-4'>
//           <PatientInfo />
//         </div>
//       </div>
//       <div className='hidden md:flex lg:hidden flex-col w-full h-full'>
//         <div className='flex flex-row w-full'>
//           <div className='w-1/2 bg-white p-4 border-r border-[#E9EFF6]'>
//             <PatientList />
//           </div>
//           <div className='w-1/2 bg-white p-4'>
//             <PatientInfo />
//           </div>
//         </div>
//         <div className='flex-1 border-t border-[#E9EFF6] p-6 bg-white'>
//           <ChatSection />
//           <PrescriptionSection />
//           <RiskFactorsSection />
//         </div>
//       </div>
//       <div className='p-4 hidden lg:flex w-full h-full'>
//         <div className='w-[344px] bg-white p-4 border-r border-[#E9EFF6]'>
//           <PatientList />
//         </div>
//         <div className='flex-1 border-l border-r border-[#E9EFF6] p-6'>
//           <ChatSection />
//           <PrescriptionSection />
//           <RiskFactorsSection />
//         </div>
//         <div className='w-[278px] bg-white p-6 border-l border-[#E9EFF6]'>
//           <PatientInfo />
//         </div>
//       </div>
//       {/* <FloatingCallButton /> */}
//       </div>
//     </div>
//   );
// }

"use client";
import UniversalTable from "@/components/common/UniversalTable/UniversalTable";
import TableCardHeader from "@/components/common/TableCardHeader/TableCardHeader";
import { Card } from "@/components/ui/card";
import React from "react";
import UniversalTableDoctor from "@/components/common/UniversalTable/UniversalTableDoctor";

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

const DoctorHistoryPage = () => {
  const transformedCourseData = React.useMemo(() => {
    // if (!allCourses || allCourses.length === 0) {
    //   return [];
    // }

    return data.map((d) => ({
      avatar: {
        name: d.name,
        type: d.type,
        image: d.image,
        link: "/dashboard/patient/doctor",
      },
      date: d.date,
      time: d.time,
      phone: d.phone,
      image: d.image,
    }));
  }, [data]);

  const columns = [
    {
      header: `Name `,
      type: "avatar",
      value: (item: any) => item.avatar,
    },
    {
      header: "Date",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.date,
    },
    {
      header: "Time",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.time,
    },
    {
      header: "Phone",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.phone,
    },
    {
      header: "Prescription / Report",
      type: "action-pres-report",
      value: (item: any) => item.prescription,
    },
  ];

  return (
    <div className="space-y-6 max-w-[95%] mx-auto mt-5">
      <Card className="font-inter">
        <TableCardHeader title="Medical History" />
        <UniversalTableDoctor data={transformedCourseData} columns={columns} />
      </Card>
    </div>
  );
};

export default DoctorHistoryPage;
