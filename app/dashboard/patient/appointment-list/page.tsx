// "use client";
// import UniversalTable from "@/components/common/UniversalTable/UniversalTable";
// import TableCardHeader from "@/components/common/TableCardHeader/TableCardHeader";
// import { Card } from "@/components/ui/card";
// import React from "react";

// const data = [
//   {
//     name: "Karar Mahmud",
//     type: "Pending",
//     date: "May 19, 2025",
//     time: "03:20 pm",
//     phone: "01601528792",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Karar Mahmud",
//     type: "Cancel",
//     date: "May 19, 2025",
//     time: "03:20 pm",
//     phone: "01601528792",
//     image: "https://randomuser.me/api/portraits/men/33.jpg",
//   },
//   {
//     name: "Karar Mahmud",
//     type: "Present",
//     date: "May 19, 2025",
//     time: "03:20 pm",
//     phone: "01601528792",
//     image: "https://randomuser.me/api/portraits/women/33.jpg",
//   },
//   {
//     name: "Karar Mahmud",
//     type: "With Doctor",
//     date: "May 19, 2025",
//     time: "03:20 pm",
//     phone: "01601528792",
//     image: "https://randomuser.me/api/portraits/men/33.jpg",
//   },
//   {
//     name: "Karar Mahmud",
//     type: "pending",
//     date: "May 19, 2025",
//     time: "03:20 pm",
//     phone: "01601528792",
//     image: "https://randomuser.me/api/portraits/women/33.jpg",
//   },
// ];

// const AppointmentListPage = () => {
//   const transformedCourseData = React.useMemo(() => {
//     // if (!allCourses || allCourses.length === 0) {
//     //   return [];
//     // }

//     return data.map((d) => ({
//       avatar: {
//         name: d.name,
//         type: d.type,
//         image: d.image,
//         link: "/dashboard/patient/doctor",
//       },
//       date: d.date,
//       time: d.time,
//       phone: d.phone,
//       image: d.image,
//     }));
//   }, [data]);

//   const columns = [
//     {
//       header: `Name `,
//       type: "avatar",
//       value: (item: any) => item.avatar,
//     },
//     {
//       header: "Date",
//       type: "text",
//       isFilterable: true,
//       value: (item: any) => item.date,
//     },
//     {
//       header: "Time",
//       type: "text",
//       isFilterable: true,
//       value: (item: any) => item.time,
//     },
//     {
//       header: "Phone",
//       type: "text",
//       isFilterable: true,
//       value: (item: any) => item.phone,
//     },
//     {
//       header: "Prescription / Report",
//       type: "action-pres-report",
//       value: (item: any) => item.prescription,
//     },
//   ];

//   return (
//     <div className="space-y-6 max-w-[95%] mx-auto mt-5">
//       <Card className="font-inter">
//         <TableCardHeader title="Medical History" />
//         <UniversalTable data={transformedCourseData} columns={columns} />
//       </Card>
//     </div>
//   );
// };

// export default AppointmentListPage;
