'use client';
import TableCardHeader from "@/components/common/TableCardHeader/TableCardHeader";
import UniversalTablePatientReport from "@/components/common/UniversalTable/UniversalTablePatientReport";
import { useState } from "react";
import React from "react";

const data = [
  {
    serial: 1,
    fileName: "invoice_May_2025.pdf",
    uploadTime: "09:15 am",
    action: 1,
  },
  {
    serial: 2,
    fileName: "profile_picture.jpg",
    uploadTime: "11:42 am",
    action: 2,
  },
  {
    serial: 3,
    fileName: "report_Q1_2025.docx",
    uploadTime: "02:10 pm",
    action: 3,
  },
  {
    serial: 4,
    fileName: "project_plan.xlsx",
    uploadTime: "04:55 pm",
    action: 1,
  },
  {
    serial: 5,
    fileName: "meeting_notes.txt",
    uploadTime: "07:30 pm",
    action: 2,
  },
];

export default function ReportPage() {
  const transformedCourseData = React.useMemo(() => {
    return data.map((d, index) => ({
      serial: index + 1,
      fileName: d.fileName,
      uploadTime: d.uploadTime,
      action: d.action,
    }));
  }, [data]);

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
      type: "action-pres-report",
      value: (item: any) => item.action,
    },
  ];

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

      <TableCardHeader title="Previous Reports" />
      <UniversalTablePatientReport
        data={transformedCourseData}
        columns={columns}
      />
    </div>
  );
}
