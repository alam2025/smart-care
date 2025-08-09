"use client";

import { useState } from "react";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  joinDate: string;
  salary: number;
}

export default function AllEmployeePage() {
  // Sample employee data (replace with API data)
  const [employees] = useState<Employee[]>([
    {
      id: 1,
      firstName: "Dr. John",
      lastName: "Smith",
      phone: "+8801712345678",
      email: "john.smith@example.com",
      joinDate: "2024-03-01",
      salary: 50000,
    },
    {
      id: 2,
      firstName: "Dr. Sarah",
      lastName: "Ahmed",
      phone: "+8801812345678",
      email: "sarah.ahmed@example.com",
      joinDate: "2024-06-15",
      salary: 60000,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            All Employees
          </h1>
          <button
            type="button"
            className="bg-[#06688E] text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-[#05506E] transition"
          >
            + Add Employee
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Salary (৳)
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr
                  key={emp.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3 text-sm text-gray-700 border-b">
                    {emp.id}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700 border-b">
                    {emp.firstName} {emp.lastName}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700 border-b">
                    {emp.phone}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700 border-b">
                    {emp.email}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700 border-b">
                    {emp.joinDate}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700 border-b">
                    {emp.salary.toLocaleString()}
                  </td>
                  <td className="px-6 py-3 text-right text-sm font-medium border-b space-x-2">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {employees.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-6 text-gray-500"
                  >
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
