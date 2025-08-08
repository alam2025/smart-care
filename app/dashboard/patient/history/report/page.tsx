'use client';
import TableCardHeader from "@/components/common/TableCardHeader/TableCardHeader";
import UniversalTableDoctor from "@/components/common/UniversalTable/UniversalTableDoctor";
import UniversalTablePatientReport from "@/components/common/UniversalTable/UniversalTablePatientReport";
import { useState } from "react";
import React from "react";

const data = [
  {
    id: 1,
    type: "Pending",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    type: "Cancel",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 3,
    type: "Present",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export default function ReportPage() {
  const transformedCourseData = React.useMemo(() => {
    return data.map((d, index) => ({
      serial: index + 1, // ✅ Auto numbering for Serial column
      fileName: d.date, // ✅ Treat "date" as File Name (can change if needed)
      uploadTime: d.time,
      action: d.id, // will be passed to Action column
    }));
  }, []);

  const columns = [
    {
      header: "Serial",
      type: "text", // ✅ No avatar here, just a number
      value: (item: any) => item.serial,
    },
    {
      header: "File Name",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.fileName,
    },
    {
      header: "Upload Time",
      type: "text",
      isFilterable: true,
      value: (item: any) => item.uploadTime,
    },
    {
      header: "Action",
      type: "action-pres-report", // ✅ Your custom table action type
      value: (item: any) => item.action,
    },
  ];

  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: "blood-test-report.pdf",
      date: "2025-08-05",
      url: "/reports/blood-test-report.pdf",
    },
    {
      id: 2,
      name: "xray-scan.pdf",
      date: "2025-08-03",
      url: "/reports/xray-scan.pdf",
    },
    {
      id: 3,
      name: "mri-brain-scan.pdf",
      date: "2025-07-28",
      url: "/reports/mri-brain-scan.pdf",
    },
    {
      id: 4,
      name: "prescription-july.pdf",
      date: "2025-07-15",
      url: "/reports/prescription-july.pdf",
    },
  ]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file before uploading.");
      return;
    }

    // Placeholder for actual upload logic
    alert(`Uploading: ${selectedFile.name}`);
  };

  const handleView = (url: string) => {
    window.open(url, "_blank");
  };

  const handleDownload = (url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop() || "document.pdf";
    a.click();
  };

  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Patient Report
        </h1>
        <p className="text-gray-600">
          Upload new medical reports and manage previous records.
        </p>
      </div>

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded-lg shadow max-w-xl space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">
          Upload New Report
        </h2>

        <label className="block w-full">
          <div className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 transition">
            <span className="text-sm text-blue-700 font-medium">
              {selectedFile
                ? "Change File"
                : "Click to upload or drag a file here"}
            </span>
            <input
              type="file"
              className="hidden"
              name="report"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>
        </label>

        {/* Show file name if selected */}
        {selectedFile && (
          <div className="text-sm text-gray-600">
            <strong>Selected file:</strong> {selectedFile.name}
          </div>
        )}

        <button
          type="submit"
          className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium ml-4"
        >
          Upload Report
        </button>
      </form>

      {/* Previous Reports Table */}
      {/* <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Previous Reports
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 border">
            <thead className="bg-blue-100 text-blue-800 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-3 border">#</th>
                <th className="px-4 py-3 border">File Name</th>
                <th className="px-4 py-3 border">Uploaded Date</th>
                <th className="px-4 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {uploadedFiles.map((file, index) => (
                <tr key={file.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{file.name}</td>
                  <td className="px-4 py-2 border">{file.date}</td>
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleView(file.url)}
                       className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium ml-4"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(file.url)}
                      className="bg-[#06688E33] text-[#06688E] px-3 py-1 rounded-md text-sm font-medium ml-4"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}

              {uploadedFiles.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No reports uploaded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> */}
      <TableCardHeader title="Previous Reports" />
      <UniversalTablePatientReport
        data={transformedCourseData}
        columns={columns}
      />
    </div>
  );
}
