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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employee: Employee) => void;
  initialData?: Employee | null;
}

function AddEmployeeModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: ModalProps) {
  const [formData, setFormData] = useState({
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    phone: initialData?.phone || "",
    email: initialData?.email || "",
    joinDate: initialData?.joinDate || "",
    salary: initialData?.salary?.toString() || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmployee: Employee = {
      id: initialData?.id || Date.now(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      joinDate: formData.joinDate,
      salary: Number(formData.salary),
    };

    onSave(newEmployee);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {initialData ? "Edit Employee" : "Add New Employee"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#06688E] focus:ring-[#06688E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#06688E] focus:ring-[#06688E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#06688E] focus:ring-[#06688E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#06688E] focus:ring-[#06688E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#06688E] focus:ring-[#06688E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Joining Date
            </label>
            <input
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#06688E] focus:ring-[#06688E]"
            />
          </div>

          <div className="sm:col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#06688E] text-white text-sm hover:bg-[#05506E]"
            >
              {initialData ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AllEmployeePage() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      firstName: "Dr. John",
      lastName: "Smith",
      phone: "+8801712345678",
      email: "john.smith@example.com",
      joinDate: "2024-03-01",
      salary: 50000,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);

  const handleAddEmployee = (employee: Employee) => {
    setEmployees((prev) => {
      const exists = prev.some((emp) => emp.id === employee.id);
      if (exists) {
        return prev.map((emp) => (emp.id === employee.id ? employee : emp));
      }
      return [...prev, employee];
    });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    }
  };

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
            onClick={() => {
              setEditEmployee(null);
              setIsModalOpen(true);
            }}
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
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border-b">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50 transition">
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
                  <td className="px-6 py-3 text-center text-sm text-gray-700 border-b space-x-2">
                    <button
                      onClick={() => {
                        setEditEmployee(emp);
                        setIsModalOpen(true);
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(emp.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {employees.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-500">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddEmployee}
        initialData={editEmployee}
      />
    </div>
  );
}
