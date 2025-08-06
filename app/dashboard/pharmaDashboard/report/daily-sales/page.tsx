"use client";
import TableCardHeader from "@/components/common/TableCardHeader/TableCardHeader";
import UniversalTable from "@/components/common/UniversalTable/UniversalTable";
import { Card } from "@/components/ui/card";
import React from "react";

const data = [
  {
    date: "01/12/2025",
    salesRepName: "Smart Care",
    routeType: "Doctor",
    routeName: "Dr. Rahim Clinic",
    medicine: "Paracetamol 500mg",
    unitsSold: 120,
    revenue: 2400,
    customerFeedback: "Requested faster delivery",
    notes: "Visited at 10:00 AM",
  },
  {
    date: "01/12/2025",
    salesRepName: "Smart Care",
    routeType: "Pharmacy",
    routeName: "MedPlus Pharmacy",
    medicine: "Ciprofloxacin 250mg",
    unitsSold: 90,
    revenue: 1800,
    customerFeedback: "Satisfied with pricing",
    notes: "Restocked items",
  },
];

const DailySalesPage = () => {
  const columns = [
    {
      header: `Date `,
      type: "text",
      value: (item: any) => item.date,
    },
    {
      header: "Sales Rep Name",
      type: "text",
      value: (item: any) => item.salesRepName,
    },
    {
      header: "Route Type",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.routeType,
    },
    {
      header: "Route Name",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.routeName,
    },
    {
      header: "Medicine",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.medicine,
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
      header: "Customer Feedback",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.customerFeedback,
    },
    {
      header: "Notes",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.notes,
    },
  ];
  return (
    <div className="space-y-6 max-w-[95%] mx-auto mt-5">
      <Card className="font-inter">
        <TableCardHeader title="Daily Sales" />
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

export default DailySalesPage;
