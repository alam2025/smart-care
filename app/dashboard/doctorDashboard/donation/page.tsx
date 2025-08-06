"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal, ArrowUpDown, ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/InputField";
// import { Inter } from 'next/font/google';
import FloatingCallButton from "@/components/FloatingCallButton";

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   weight: ['400', '500', '600', '700'],
// });

const data = [
  {
    name: "Karar Mahmud",
    type: "Withdraw",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    taka: "$5000",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Karar Mahmud",
    type: "Withdraw",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    taka: "$300",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Karar Mahmud",
    type: "Withdraw",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    taka: "$566",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Karar Mahmud",
    type: "Withdraw",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    taka: "$300",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Karar Mahmud",
    type: "Withdraw",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    taka: "$566",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const barData = [
  { name: "MON", value: 1600 },
  { name: "TUE", value: 800 },
  { name: "WED", value: 1800 },
  { name: "THU", value: 1000 },
  { name: "FRI", value: 2300 },
  { name: "SAT", value: 700 },
  { name: "SUN", value: 1500 },
];

const pieData = [
  { name: "Offline", value: 24, color: "#003366" },
  { name: "Online", value: 39, color: "#999999" },
  { name: "Operation", value: 11, color: "#3CB4F0" },
  { name: "Other", value: 26, color: "#B3E5FC" },
];

export default function Donation() {
  return (
    <div className={``}>
      <div className="px-2 sm:px-6 py-4 sm:py-6 min-h-screen grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 cursor-pointer gap-3 sm:gap-4">
            {[
              {
                title: "Total Donations",
                value: "$2055683.25",
                note: '<img src="/Frame.png" alt="" />12% for the last Month',
              },
              { title: "As-Sunnah Foundation", value: "$4050.25" },
              { title: "BIRDEM Hospital", value: "$3055.25" },
              { title: "BIRDEM Hospital", value: "$3055.25" },
              { title: "BIRDEM Hospital", value: "$3055.25" },
            ].map((item, i) => (
              <Card key={i} className="p-2 sm:p-4">
                <CardHeader className="pb-2 flex flex-row justify-between items-start p-0">
                  <CardTitle className="text-[14px] text-[#717070]">
                    {item.title}
                  </CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <p className="text-sm px-2 py-1">Options</p>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="p-0 pt-2">
                  <p className="text-[22px] font-inter font-bold break-words text-[#000000]">
                    {item.value}
                  </p>
                  {item.note && (
                    <div className="flex items-center  mt-1">
                      <img src="/Frame.png" alt="" />
                      <p className="text-[16px] text-[#717070] ">
                        <span className="text-[#42B3CE] gap-2">12% </span>
                        for the last Month
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="font-inter">
            <CardHeader className="pt-4 px-[45px]">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                <span className="text-[22px] font-inter font-bold text-[#455468]">
                  Today Patient
                </span>
                <InputField placeholder="Search" width="500px" />
              </div>
            </CardHeader>
            <CardContent className="overflow-x-auto px-0">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-[#F9FAFB] text-[#8897AE]">
                  <tr className="uppercase text-[12px]">
                    <th className="pl-[45] pr-4 py-3">Name</th>
                    <th className="pl-[45] pr-4 py-3">
                      <div className="flex items-center gap-1">
                        Date <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="pl-[45] pr-4 py-3">
                      <div className="flex items-center gap-1">
                        Time <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="pl-[45] pr-4 py-3">
                      <div className="flex items-center gap-1">
                        Phone <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="pl-[45] pr-4 py-3">
                      <div className="flex items-center gap-1">
                        Taka <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="pl-[45] pr-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={item.image} alt={item.name} />
                            <AvatarFallback>{item.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-[16px] text-[#455468]">
                              {item.name}
                            </p>
                            <p className="text-[12px] text-[#5E718D]">
                              {item.type}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-[45] pr-4 py-3 text-gray-700">
                        {item.date}
                      </td>
                      <td className="pl-[45] pr-4 py-3 text-gray-700">
                        {item.time}
                      </td>
                      <td className="pl-[45] pr-4 py-3 text-gray-700">
                        {item.phone}
                      </td>
                      <td className="pl-[45] pr-4 py-3 font-semibold text-[#06688E]">
                        {item.taka}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#717070] text-[18px]">
                Statistics
              </CardTitle>
              <p className="font-semibold">Donations Statistics</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full flex justify-center">
                <PieChart width={200} height={200}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="text-sm space-y-1">
                {pieData.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: item.color }}
                      ></span>
                      {item.name}
                    </span>
                    <span>{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-[#717070] text-[18px]">
                    Activity
                  </CardTitle>
                  <p className="font-semibold">Last 7 Days</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full text-xs bg-[#E3F6F5] flex items-center gap-1 cursor-pointer"
                    >
                      Weekly <ChevronDown className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <p className="text-sm px-2 py-1">Options</p>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1890ff" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* <FloatingCallButton /> */}
    </div>
  );
}
