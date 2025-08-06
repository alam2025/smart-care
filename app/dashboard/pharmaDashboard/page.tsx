"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import DocumentIcon from "@/components/svg/document";
import GrowthIcon from "@/components/svg/growth";
import DollarSalesIcon from "@/components/svg/dolarSales";
import TableCardHeader from "@/components/common/TableCardHeader/TableCardHeader";
import UniversalTable from "@/components/common/UniversalTable/UniversalTable";

const percent = 75;
const columns = [
  {
    header: "Date",
    type: "text",
    isFilterable: true,
    value: (item: any) => item.date,
  },
  {
    header: "Source",
    type: "text",
    isFilterable: true,
    value: (item: any) => item.source,
  },
  {
    header: "Amount",
    type: "text",
    isFilterable: true,
    value: (item: any) => item.amount,
  },
  {
    header: "Type",
    type: "text",
    isFilterable: true,
    value: (item: any) => item.type,
  },
  {
    header: "Zone",
    type: "text",
    isFilterable: true,
    value: (item: any) => item.zone,
  },
];

const salesData = [
  {
    date: "May 19, 2025",
    source: "Hospital name",
    amount: 500000,
    type: "System",
    zone: "North",
  },
  {
    date: "May 19, 2025",
    source: "Amdeac",
    amount: 5000,
    type: "System",
    zone: "South",
  },
  {
    date: "May 19, 2025",
    source: "Brack",
    amount: 5000,
    type: "Loan",
    zone: "Earth",
  },
  // Additional demo entries
  {
    date: "May 20, 2025",
    source: "MediCorp",
    amount: 75000,
    type: "Equipment",
    zone: "East",
  },
];
// ----------------> this chart datas <------------

const incomeExpenseData = [
  { month: "Jan", revenue: 4000, cost: 2000 },
  { month: "Feb", revenue: 4200, cost: 2100 },
  { month: "Mar", revenue: 4500, cost: 2300 },
  { month: "Apr", revenue: 5200, cost: 2800 },
  { month: "May", revenue: 6800, cost: 4200 },
  { month: "Jun", revenue: 7500, cost: 5000 },
];

const branchPerformanceData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const doctorsRatingData = [
  { month: "Jan", rating: 0 },
  { month: "Feb", rating: 0 },
  { month: "Mar", rating: 0 },
  { month: "Apr", rating: 0 },
  { month: "May", rating: 4.8 },
  { month: "Jun", rating: 0 },
  { month: "Jun", rating: 4.9 },
  { month: "May", rating: 4.8 },
  { month: "Jun", rating: 0 },
  { month: "Jun", rating: 4.9 },
  { month: "May", rating: 4.8 },
  { month: "Jun", rating: 0 },
  { month: "Jun", rating: 4.9 },
];

const patentGrowthData = [
  { month: "", growth: 0 },
  { month: "Jan", growth: 100 },
  { month: "Feb", growth: 2200 },
  { month: "Mar", growth: 2800 },
  { month: "Apr", growth: 2600 },
  { month: "May", growth: 3200 },
  { month: "Jun", growth: 3800 },
];

const pieData = [
  { name: "Achieved", value: 60, color: "#54C2B8" },
  { name: "Remaining", value: 20, color: "#1DB1B0" },
  { name: "Segment 1", value: 20, color: "#0690BF" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Only show label for segments that are not the main 75%
  if (percent < 0.1) return null; // Don't show labels for very small segments

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="12"
      fontWeight="600"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#1EACA8",
  },
  cost: {
    label: "Cost",
    color: "#6366f1",
  },
  performance: {
    label: "Branch Performance",
    color: "#14b8a6",
  },
  rating: {
    label: "Average Rating",
    color: "#14b8a6",
  },
  growth: {
    label: "Patent Growth",
    color: "#14b8a6",
  },
};

const PharmaDashboardPage = () => {
  return (
    <div className="p-6  min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 grid grid-cols-1 h-fit gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* -----------> KPI Cards <------------*/}
            <Card className="bg-white h-fit py-0">
              <CardContent className="py-4 px-3">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-500 rounded-lg">
                    <DollarSalesIcon />
                  </div>
                  <div>
                    <p className="text-neutral-800 text-base font-semibold font-syne">
                      Today Sales
                    </p>
                    <p className="text-neutral-800 text-xl font-semibold">
                      $200005.00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white h-fit py-0">
              <CardContent className="py-4 px-3">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-500 rounded-lg">
                    <DocumentIcon />
                  </div>
                  <div>
                    <p className="text-neutral-800 text-base font-semibold font-syne">
                      Today Prescrip
                    </p>
                    <p className="text-neutral-800 text-xl font-semibold">
                      $21.00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white h-fit py-0">
              <CardContent className="py-4 px-3">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-500 rounded-lg">
                    <GrowthIcon />
                  </div>
                  <div>
                    <p className="text-neutral-800 text-base font-semibold font-syne">
                      Today Product
                    </p>
                    <p className="text-neutral-800 text-xl font-semibold">
                      $25.00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* -----------> Income & Expense Chart <------------*/}
            <Card className="bg-white overflow-x-auto">
              <CardHeader>
                <CardTitle className="font-syne text-lg font-bold">
                  Income & Expense
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ChartContainer
                  config={chartConfig}
                  className="h-64 w-full relative -left-2 pr-2"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={incomeExpenseData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        strokeWidth={2}
                        name="Revenue"
                      />
                      <Line
                        type="monotone"
                        dataKey="cost"
                        stroke="var(--color-cost)"
                        strokeWidth={2}
                        name="Cost"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* -----------> Branch Performance Chart <------------*/}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="font-syne text-lg font-bold">
                  Branch Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ChartContainer
                  config={chartConfig}
                  className="h-64  w-full relative px-5"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={branchPerformanceData}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      {/* <YAxis /> */}
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="pv"
                        fill="#00769E"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                      />
                      <Bar
                        dataKey="uv"
                        fill="#009689"
                        activeBar={<Rectangle fill="gold" stroke="purple" />}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 ">
          {/* Doctors History Card */}
          <Card className="bg-white gap-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-black text-2xl font-semibold font-syne">
                Doctors History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="">
                <div className="flex justify-between">
                  <div>
                    <p className="text-neutral-800 text-xl font-semibold ">
                      2500
                    </p>
                    <p className="text-neutral-800 text-base font-medium font-syne">
                      All Doctor
                    </p>
                  </div>
                  <div>
                    <p className="text-neutral-800 text-xl font-semibold ">
                      2500
                    </p>
                    <p className="text-neutral-800 text-base font-medium font-syne">
                      A Rating
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between relative -bottom-5 items-center my-2">
                    <p className="text-sm font-medium">Average Rating</p>
                    <p className="text-lg font-bold">4.9</p>
                  </div>
                  <div className="h-16">
                    <ChartContainer
                      config={chartConfig}
                      className="h-full w-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={doctorsRatingData}>
                          <Line
                            type="monotone"
                            dataKey="rating"
                            stroke="#1EACA8"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* National Sales */}
          <Card className="bg-white grid  grid-cols-5 gap-0 ">
            <div className="col-span-3 border-r border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-2xl font-semibold font-syne">
                  National Sales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <p className="text-neutral-800 text-xl font-semibold">
                      2500
                    </p>
                    <p className="text-neutral-800 text-base font-bold font-syne">
                      Prescription
                    </p>
                  </div>
                  <div>
                    <p className="text-neutral-800 text-xl font-semibold">
                      2500
                    </p>
                    <p className="text-neutral-800 text-base font-medium font-syne">
                      Product
                    </p>
                  </div>
                </div>
                <div className="w-full mt-8 mx-auto">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base font-medium text-gray-800">
                      Achievement
                    </span>
                    <span className="text-base font-semibold text-gray-900">
                      {percent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-teal-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </div>

            {/* right side part */}
            <Card className="w-full col-span-2 border-none py-0 gap-0 shadow-none">
              <CardHeader className="text-center px-0">
                <CardTitle className="text-black text-lg font-semibold">
                  National Target
                </CardTitle>
              </CardHeader>
              <CardContent className="flex px-0 justify-center">
                <div className="relative w-30 h-30">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={60}
                        innerRadius={35}
                        fill="#8884d8"
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Center text */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-black text-xl font-bold">75%</div>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </Card>
        </div>
      </div>

      {/* ----------------->  bottom income part < ---------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Today Sales Table */}
        <div className="col-span-2 ">
          <Card className="font-inter">
            <TableCardHeader title="Today Sales" isSearchable={false} />
            <UniversalTable data={salesData} columns={columns} />
          </Card>
        </div>

        {/* Income & Expense Growth Chart */}
        <Card className="bg-white pt-6 pb-3">
          <CardHeader>
            <CardTitle className="font-syne text-lg font-bold">
              Income & Expense
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={patentGrowthData}>
                  <XAxis dataKey="month" />
                  {/* <YAxis /> */}
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="growth"
                    stroke="#1EACA8"
                    strokeWidth={2}
                    name="Patent Growth"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PharmaDashboardPage;
