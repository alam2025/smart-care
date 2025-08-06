import { redirect } from 'next/navigation';

export default function DashboardPage() {
  // In a real app, you would get this from your auth provider or session
  const isLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') === 'true' : false;
  const userRole = typeof window !== 'undefined' ? localStorage.getItem('userRole') : null;

  if (!isLoggedIn) {
    // If not logged in, redirect to login page
    redirect('/login');
  }

  // Redirect based on role
  // if (userRole === 'doctor') {
  //   redirect('/dashboard/doctorDashboard');
  // } else if (userRole === 'patient') {
  //   redirect('/dashboard/patient');
  // }

  // Fallback if role isn't recognized
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='p-8 bg-white rounded-lg shadow-md text-center'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Dashboard Access</h1>
        <p className='text-gray-600 mb-6'>Your account role couldn't be determined.</p>
        <div className='space-y-3'>
          <a href='/dashboard/doctorDashboard' className='block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
            Access Doctor Dashboard
          </a>
          <a href='/dashboard/patient' className='block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
            Access Patient Dashboard
          </a>
          <a href='/login' className='block px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition'>
            Return to Login
          </a>
        </div>
      </div>
    </div>
  );
}
