"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent } from "@/components/ui/card";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const UniversalTable = ({ columns, data, className, classNameHeader }: any) => {
  const renderCell = (item: any, column: any) => {
    switch (column.type) {
      case "avatar":
        const avatar = column.value(item);
        console.log("avatar", avatar, column);
        return (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={avatar?.image} alt={avatar?.name} />
              <AvatarFallback>{avatar?.name}</AvatarFallback>
            </Avatar>
            {avatar?.link ? (
              <Link href="/dashboard/patient/doctor">
                <p className="text-[16px] text-[#455468]">{avatar?.name}</p>
                <p className="text-[12px] text-[#5E718D]">{avatar?.type}</p>
              </Link>
            ) : (
              <div>
                <p className="text-[16px] text-[#455468]">{avatar?.name}</p>
                <p className="text-[12px] text-[#5E718D]">{avatar?.type}</p>
              </div>
            )}
          </div>
        );
      case "text":
        return <p className=" text-[#455468]">{column.value(item)}</p>;
      case "action-pres-report":
        return (
          <>
            <Link
              href="/dashboard/patient/prescription"
              className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium mr-4"
            >
              Prescription
            </Link>
            <Link
              href="/"
              className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium"
            >
              Report
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <CardContent className="px-0">
      {/* Desktop Patient Table */}
      <div className={`overflow-x-auto  ${className}`}>
        <table className="w-full text-sm text-left">
          <thead className={`bg-[#F9FAFB] text-[#8897AE] ${classNameHeader}`}>
            <tr className=" text-[12px]">
              {columns.map((column: any, index: number) => (
                <th
                  key={index}
                  className={`${column?.className} ${column?.headClassName} pl-[26px]  py-3`}
                >
                  <span className="flex items-center gap-2">
                    {column.header}
                    {column.isFilterable && (
                      <ArrowUpDown className="w-3 h-3 relative right-" />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data &&
              data?.map((item: any, i: any) => (
                <tr key={i} className="hover:bg-gray-50">
                  {columns.map((column: any, colIndex: number) => (
                    <td key={colIndex} className="pl-[26px]  py-3">
                      {renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  );
};

export default UniversalTable;
