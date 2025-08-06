"use client";
import TableCardHeader from "@/components/common/TableCardHeader/TableCardHeader";
import UniversalTable from "@/components/common/UniversalTable/UniversalTable";
import { Card } from "@/components/ui/card";
import React from "react";

const data = [
  {
    repId: 101,
    repName: "John Doe",
    date: "2025-07-21",
    product: "Paracetamol",
    unitsSold: 120,
    revenue: 2400,
    visited: "Pharmacy A",
    route: "Zone 1",
    feedback: "Positive",
  },
  {
    repId: 102,
    repName: "John Doe",
    date: "2025-07-21",
    product: "Paracetamol",
    unitsSold: 150,
    revenue: 2400,
    visited: "Pharmacy A",
    route: "Zone 2",
    feedback: "Positive",
  },
];

const DailySalesReportPage = () => {
  const columns = [
    {
      header: `repId `,
      type: "text",
      isFilterable: true,
      value: (item: any) => item.repId,
    },
    {
      header: "Rep Name",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.repName,
    },
    {
      header: "Date",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.date,
    },
    {
      header: "Product",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.product,
    },
    {
      header: "Units Sold",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.unitsSold,
    },
    {
      header: "Revenue ($)",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.revenue,
    },
    {
      header: "Doctor/Pharmacy Visited",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.visited,
    },
    {
      header: "Route",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.route,
    },
    {
      header: "Feedback",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.feedback,
    },
  ];

  return (
    <div className="space-y-6 max-w-[95%] mx-auto mt-5">
      <Card className="font-inter">
        <TableCardHeader title="Daily Sales Report" />
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

export default DailySalesReportPage;
