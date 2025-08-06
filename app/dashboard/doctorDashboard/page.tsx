'use client';

import React, { useEffect, useState } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import FloatingCallButton from '@/components/FloatingCallButton';
import Link from 'next/link';

const data = [
  {
    name: 'Karar Mahmud',
    type: 'Withdraw',
    date: 'May 19, 2025',
    time: '03:20 pm',
    phone: '01601528792',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Karar Mahmud',
    type: 'Withdraw',
    date: 'May 19, 2025',
    time: '03:20 pm',
    phone: '01601528792',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Karar Mahmud',
    type: 'Withdraw',
    date: 'May 19, 2025',
    time: '03:20 pm',
    phone: '01601528792',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'Karar Mahmud',
    type: 'Withdraw',
    date: 'May 19, 2025',
    time: '03:20 pm',
    phone: '01601528792',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Karar Mahmud',
    type: 'Withdraw',
    date: 'May 19, 2025',
    time: '03:20 pm',
    phone: '01601528792',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
];

function generateCalendarDays(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days = [];
  const startDay = date.getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= totalDays; d++) days.push(d);

  return days;
}

export default function DoctorDashboard() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(5);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [timePeriod, setTimePeriod] = useState('Weekly Report');
   const [data, setData] = useState<any>(null);
   const [loading, setLoading] = useState(true);

  const days = generateCalendarDays(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleDateClick = (day: number | null) => {
    if (day) {
      setSelectedDate(day);
    }
  };



 
  
     useEffect(() => {
      const fetchBooking = async () => {
        try {
          const res = await fetch('/api/booking');
          // if (!res.ok) throw new Error('Network response was not ok');
          const json = await res.json();
          console.log("🚀 ~ fetchBooking ~ json:", json.data)
          setData(json.data);
        } catch (error) {
          console.error('Error fetching booking data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBooking();
    }, []);
  
    // if (loading) return <div>Loading...</div>;
  
    function formatDateToDDMMYYYY(isoDateString: string): string {
    const date = new Date(isoDateString);
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  

  return (
    <div className='min-h-screen p-4 lg:p-6 text-gray-800 overflow-x-hidden'>
      <div className='space-y-6 max-w-7xl mx-auto'>
        <div className='lg:hidden bg-white rounded-2xl p-4 shadow flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div className='text-center sm:text-left'>
            <h2 className='text-2xl text-[#2B6F71] font-semibold mb-2'>Good Morning</h2>
            <h1 className='text-3xl font-bold text-[#000000] mb-1'>Dr. Reyan Anis</h1>
            <p className='text-base text-[#616060]'>Have a nice day at work</p>
          </div>
          <div>
            <Image src='/doctor-group.png' alt='Doctors' width={250} height={120} className='object-contain h-[100px] w-auto' priority />
          </div>
        </div>
        <div className='hidden lg:block bg-white rounded-2xl p-6 shadow'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-[34px] text-[#2B6F71] font-semibold mb-2'>Good Morning</h2>
              <h1 className='text-[38px] font-bold text-[#000000] mb-1'>Dr. Reyan Anis</h1>
              <p className='text-[16px] text-[#616060]'>Have a nice day at work</p>
            </div>
            <Image src='/doctor-group.png' alt='Doctors' width={300} height={150} className='object-contain h-[150px]' priority />
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-6'>
            <div className='lg:hidden bg-white rounded-2xl p-4 shadow'>
              <div className='flex justify-between items-center mb-4'>
                <button onClick={handlePrevMonth} className='p-2 rounded-full hover:bg-gray-100'>
                  <ChevronLeft className='w-5 h-5 text-gray-600' />
                </button>
                <h3 className='font-semibold text-gray-600 text-center'>
                  {monthName} {currentYear}
                </h3>
                <button onClick={handleNextMonth} className='p-2 rounded-full hover:bg-gray-100'>
                  <ChevronRight className='w-5 h-5 text-gray-600' />
                </button>
              </div>
              <div className='grid grid-cols-7 text-center text-xs gap-y-1'>
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                  <span key={d} className='font-medium text-gray-500'>
                    {d}
                  </span>
                ))}
                {days.map((day, i) => (
                  <button
                    key={i}
                    onClick={() => handleDateClick(day)}
                    className={`p-1 rounded-md w-6 h-6 flex items-center justify-center text-xs font-medium mx-auto ${
                      !day
                        ? 'text-transparent'
                        : day === selectedDate
                        ? 'bg-[#42B3CE] text-white'
                        : day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {day || ''}
                  </button>
                ))}
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-sm lg:text-[14px] text-[#06688E]'>Weekly Reports</h3>
              <div className='flex text-sm lg:text-[14px] text-[#06688E]'>
                Last Week <ChevronDown className='w-4 h-4' />
              </div>
            </div>
            <div className='lg:hidden grid grid-cols-2 gap-3'>
              <div className='bg-[#33ABAE] rounded-2xl p-3 shadow'>
                <p className='text-base text-white font-medium mb-2'>Total Patients</p>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-base text-white font-semibold'>250</p>
                  <img src='/Group 8860.png' alt='Total Patients' className='w-6 h-6' />
                </div>
              </div>
              <div className='bg-[#33ABAE] rounded-2xl p-3 shadow'>
                <p className='text-base text-white font-medium mb-2'>Phones Call</p>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-base text-white font-semibold'>360</p>
                  <img src='/Group 8860(1).png' alt='Total Patients' className='w-6 h-6' />
                </div>
              </div>
              <div className='bg-[#33ABAE] rounded-2xl p-3 shadow'>
                <p className='text-base text-white font-medium mb-2'>Appointment</p>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-base text-white font-semibold'>400</p>
                  <img src='/Group 8860(2).png' alt='Total Patients' className='w-6 h-6' />
                </div>
              </div>
              <div className='bg-[#33ABAE] rounded-2xl p-3 shadow'>
                <p className='text-base text-white font-medium mb-2'>Unrated Report</p>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-base text-white font-semibold'>100</p>
                  <img src='/Group 8860(3).png' alt='Total Patients' className='w-6 h-6' />
                </div>
              </div>
            </div>
            <div className='hidden lg:grid grid-cols-4 gap-4'>
              <div className='bg-white rounded-2xl p-4 shadow'>
                <p className='text-[18px] text-[#181818] font-medium mb-2'>Total Patients</p>
                <div className='flex justify-between items-center mt-5'>
                  <p className='text-[19px] text-[#181818] font-semibold'>250</p>
                  <img src='/Group 8860.png' alt='Total Patients' className='w-[35px] h-[35px]' />
                </div>
              </div>
              <div className='bg-white rounded-2xl p-4 shadow'>
                <p className='text-[18px] text-[#181818] font-medium mb-2'>Phones Call</p>
                <div className='flex justify-between items-center mt-5'>
                  <p className='text-[19px] text-[#181818] font-semibold'>360</p>
                  <img src='/Group 8860(1).png' alt='Total Patients' className='w-[35px] h-[35px]' />
                </div>
              </div>
              <div className='bg-white rounded-2xl p-4 shadow'>
                <p className='text-[18px] text-[#181818] font-medium mb-2'>Appointment</p>
                <div className='flex justify-between items-center mt-5'>
                  <p className='text-[19px] text-[#181818] font-semibold'>400</p>
                  <img src='/Group 8860(2).png' alt='Total Patients' className='w-[35px] h-[35px]' />
                </div>
              </div>
              <div className='bg-white rounded-2xl p-4 shadow'>
                <p className='text-[18px] text-[#181818] font-medium mb-2'>Unrated Report</p>
                <div className='flex justify-between items-center mt-5'>
                  <p className='text-[19px] text-[#181818] font-semibold'>100</p>
                  <img src='/Group 8860(3).png' alt='Total Patients' className='w-[35px] h-[35px]' />
                </div>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex flex-col'>
            <div className='bg-white rounded-2xl p-6 shadow'>
              <div className='flex justify-between items-center mb-4'>
                <button onClick={handlePrevMonth} className='p-2 rounded-full hover:bg-gray-100'>
                  <ChevronLeft className='w-5 h-5 text-gray-600' />
                </button>
                <h3 className='font-semibold text-gray-600 text-center'>
                  {monthName} {currentYear}
                </h3>
                <button onClick={handleNextMonth} className='p-2 rounded-full hover:bg-gray-100'>
                  <ChevronRight className='w-5 h-5 text-gray-600' />
                </button>
              </div>
              <div className='grid grid-cols-7 text-center text-sm gap-y-2'>
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                  <span key={d} className='font-medium text-gray-500'>
                    {d}
                  </span>
                ))}
                {days.map((day, i) => (
                  <button
                    key={i}
                    onClick={() => handleDateClick(day)}
                    className={`p-1 rounded-md w-8 h-8 flex items-center justify-center text-sm font-medium mx-auto ${
                      !day
                        ? 'text-transparent'
                        : day === selectedDate
                        ? 'bg-[#42B3CE] text-white'
                        : day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {day || ''}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Patients Table */}
        <Card className='font-inter'>
          <CardHeader className='pt-4 px-4 lg:px-[45px]'>
            <div className='flex flex-col md:flex-row justify-between md:items-center gap-4'>
              <span className='text-lg lg:text-[22px] font-inter font-bold text-[#455468]'>Today Patient</span>
              <div className='relative w-full md:w-[500px]'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                <Input placeholder='Search' className='pl-10 w-full' />
              </div>
            </div>
          </CardHeader>
          <CardContent className='px-0'>
            {/* Mobile Patient List */}
            <div className='lg:hidden space-y-3 px-4'>
              {data?.map((item:any, idx:any) => (
                <div key={idx} className='bg-white rounded-lg p-4 shadow'>
                  <div className='flex items-center gap-3 mb-3'>
                    <Avatar>
                      <AvatarImage src={item.image} alt={item.name} />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-base text-[#455468] font-medium'>{item.name}</p>
                      <p className='text-xs text-[#5E718D]'>{item.type}</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-2 text-sm'>
                    <div>
                      <p className='text-gray-500'>Date</p>
                      <p className='text-gray-700'>{item.date}</p>
                    </div>
                    <div>
                      <p className='text-gray-500'>Time</p>
                      <p className='text-gray-700'>{item.time}</p>
                    </div>
                    <div>
                      <p className='text-gray-500'>Phone</p>
                      <p className='text-gray-700'>{item.phone}</p>
                    </div>
                    <div>
                      <button className='bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium mt-2'>View Profile</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Patient Table */}
            <div className='hidden lg:block'>
              <table className='w-full text-sm text-left'>
                <thead className='bg-[#F9FAFB] text-[#8897AE]'>
                  <tr className='uppercase text-[12px]'>
                    <th className='pl-[45px] pr-4 py-3'>Name</th>
                    <th className='pl-[45px] pr-4 py-3'>
                      <div className='flex items-center gap-1'>
                        Date <ArrowUpDown className='w-3 h-3' />
                      </div>
                    </th>
                    {/* <th className='pl-[45px] pr-4 py-3'>
                      <div className='flex items-center gap-1'>
                        Time <ArrowUpDown className='w-3 h-3' />
                      </div>
                    </th> */}
                    <th className='pl-[45px] pr-4 py-3'>
                      <div className='flex items-center gap-1'>
                        Phone <ArrowUpDown className='w-3 h-3' />
                      </div>
                    </th>
                    <th className='pl-[45px] pr-4 py-3'>
                      <div className='flex items-center gap-1'>
                        Profile <ArrowUpDown className='w-3 h-3' />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                  {data?.map((item:any, idx:any) => (
                    <tr key={idx} className='hover:bg-gray-50'>
                      <td className='pl-[45px] pr-4 py-3'>
                        <div className='flex items-center gap-3'>
                          <Avatar>
                            <AvatarImage src={item?.image} alt={item?.name} />
                            <AvatarFallback>{item?.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className='text-[16px] text-[#455468]'>{item?.name}</p>
                            <p className='text-[12px] text-[#5E718D]'>{item?.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className='pl-[45px] pr-4 py-3 text-gray-700'>{formatDateToDDMMYYYY(item?.date)}</td>
                      {/* <td className='pl-[45px] pr-4 py-3 text-gray-700'>{item?.time}</td> */}
                      <td className='pl-[45px] pr-4 py-3 text-gray-700'>{item?.phone}</td>
                      <td className='pl-[45px] pr-4 py-3'>
                        <Link href={`/dashboard/doctorDashboard/prescription?name=${item?.name}&age=${item?.age}&problem=${item?.problem}&phone=${item?.phone}`} className='bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium'>Generate Prescription </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <FloatingCallButton /> */}
    </div>
  );
}
