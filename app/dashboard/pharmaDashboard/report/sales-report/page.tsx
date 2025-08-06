"use client";
import TableCardHeader from "@/components/common/TableCardHeader/TableCardHeader";
import UniversalTable from "@/components/common/UniversalTable/UniversalTable";
import { Card } from "@/components/ui/card";
import React from "react";

const data = [
  {
    sl: "01",
    drugName: "Napa",
    companyName: "Beximco",
    prescriptionNo: "PCN-00000001",
    doctorName: "Dr. Soheluzzaman",
    hospital: "Labaid",
    address: "Dhanmondi",
    zone: "Uttara",
    territory: "Mohammad Pur",
    salesQty: 20,
    unitPrice: 0.8,
    totalPrice: 16,
  },
  {
    sl: "02",
    drugName: "ACE",
    companyName: "Squire",
    prescriptionNo: "PCN-00000002",
    doctorName: "Dr. Wahiduzzaman",
    hospital: "Dhaka Shesu Hospital",
    address: "Sher-E-Bangla",
    zone: "Dhanmondi",
    territory: "Sector-12",
    salesQty: 10,
    unitPrice: 0.8,
    totalPrice: 8,
  },
];

const SalesReportPage = () => {
  const columns = [
    {
      header: `SL `,
      type: "text",
      value: (item: any) => item.sl,
    },
    {
      header: "Name of Drug",
      type: "text",
      value: (item: any) => item.drugName,
    },
    {
      header: "Name of Company",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.companyName,
    },
    {
      header: "Prescription No",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.prescriptionNo,
    },
    {
      header: "Name of Doctor",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.doctorName,
    },
    {
      header: "Hospital/Digonastic Center",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.hospital,
    },
    {
      header: "Address",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.address,
    },
    {
      header: "Zone",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.zone,
    },
    {
      header: "Terirory",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.territory,
    },
    {
      header: "Sales Qty",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.salesQty,
    },
    {
      header: "Unit Price",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.unitPrice,
    },
    {
      header: "Total Price",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.totalPrice,
    },
  ];

  return (
    <div className="space-y-6 max-w-[95%] mx-auto mt-5">
      <Card className="font-inter">
        <TableCardHeader title="Sales Report" />
        <UniversalTable
          data={data}
          columns={columns}
          className="text-[14px]"
          classNameHeader="font-syne"
        />
      </Card>
    </div>
  );
};

export default SalesReportPage;
