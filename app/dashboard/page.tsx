import { RootState } from "@/lib/redux/store";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashboardPage() {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  console.log(user);

  if (!user) return <p>Loading...</p>;
  // Fallback if role isn't recognized
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Dashboard Access
        </h1>
        <p className="text-gray-600 mb-6">
          Your account role couldn't be determined.
        </p>
        <div className="space-y-3">
          <a
            href="/dashboard/doctorDashboard"
            className="block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Access Doctor Dashboard
          </a>
          <a
            href="/dashboard/patient"
            className="block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Access Patient Dashboard
          </a>
          <a
            href="/login"
            className="block px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
          >
            Return to Login
          </a>
        </div>
      </div>
    </div>
  );
}
