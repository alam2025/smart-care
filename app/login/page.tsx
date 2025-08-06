'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InputField from '@/components/ui/InputField';
import GoogleIcon from '@/components/svg/googleIcon';
import GithubIcon from '@/components/svg/githubIcon';
import FacebookIcon from '@/components/svg/facebookIcon';
import LinkedinIcon from '@/components/svg/linkedinIcon';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'patient' | 'doctor'>('patient');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/login", {username,password});

      console.log("🚀 ~ handleLogin ~ response:", response);
      
      router.push(`/dashboard/${role === 'doctor' ? 'doctorDashboard' : 'patient'}`);
      // if (response.success) {
      //   localStorage.setItem('isLoggedIn', 'true');
      //   localStorage.setItem('userRole', role);
      
      // } else {
      //   setError(response.message || 'Invalid credentials');
      // }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-[#EBFFFE] md:bg-white text-black'>
      <div className='hidden md:block relative w-full md:w-1/2 h-64 md:h-auto'>
        <Image src='/login-image.jpg' alt='Login visual' fill className='object-cover' priority />
      </div>

      <div className='w-full md:w-1/2 flex items-center justify-center p-6 md:p-8'>
        <div className='md:hidden w-full max-w-md'>
          <div className='flex justify-center'>
            <div className='w-[112px] h-[127px]'>
              <Image src='/logo.png' alt='Logo' width={112} height={127} className='w-[112px] h-[127px]' priority />
            </div>
          </div>
          <h2 className='text-[32px] text-[#06688E] font-semibold mt-[8px] text-center'>Login</h2>
          <p className='text-[#616060] text-[18px] mt-1 mb-6 text-center'>Welcome back</p>

          <form onSubmit={handleLogin} className='space-y-4'>
            <div>
              <InputField
                label='Username'
                placeholder='username'
                placeholderColor='#AAAAAA'
                bgColor='transparent'
                borderColor='border-[#C0C0C0]'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <InputField label='Password' placeholder='password'  placeholderColor='#AAAAAA'
                bgColor='transparent'
                borderColor='border-[#C0C0C0]' type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {error && <div className='text-red-500 text-sm text-center'>{error}</div>}

            <div className='flex justify-between text-sm'>
              <label className='flex items-center text-[#616060] gap-2'>
                <input type='checkbox' className='accent-teal-600' />
                Remember Me
              </label>
              <Link href='/login/password' className='text-[#2B6F71] hover:underline'>
                Forgot Password?
              </Link>
            </div>

            <button type='submit' className='w-full bg-[#06688E] text-white py-4 rounded-full mt-4 flex items-center justify-center' disabled={isLoading}>
              {isLoading ? <span className='inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin'></span> : 'Log in'}
            </button>
          </form>

          <div className='mt-4 flex justify-center items-center flex-wrap gap-1'>
            <p className='text-sm text-[#616060]'>Or Login Via Social Network</p>
            <Link href='/register' className='text-sm text-[#2B6F71] hover:underline'>
              Register
            </Link>
          </div>

          <div className='mt-4'>
            <div className='flex justify-center space-x-1'>
              <button className='bg-[#E22F31] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
                <GoogleIcon />
              </button>
              <button className='bg-[#4676ED] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
                <FacebookIcon />
              </button>
            </div>
          </div>

          <div className='text-center text-[16px] text-[#AAAAAA] mt-[56px]'>© 2022, Smart Care - Design by Doctor </div>
        </div>

        {/* Desktop View */}
        <div className='hidden md:block max-w-md w-full'>
          <div className='w-[102px] h-[102px]'>
            <Image src='/logo.png' alt='Logo' width={102} height={102} className='w-[102px] h-[102px] object-contain' priority />
          </div>

          <h2 className='font-syne text-[20px] font-semibold text-[#06688E] mt-8'>Login</h2>

          <div className='flex justify-between items-center mb-6'>
            <p className='text-[#616060] text-[17px] mt-2'>Welcome back</p>
            <Link href='/register' className='text-[14px] text-[#2B6F71] hover:underline'>
              Register
            </Link>
          </div>

          <form onSubmit={handleLogin} className='space-y-4'>
            <div>
              <InputField label='Username' placeholder='username' bgColor='bg-white' required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <InputField label='Password' placeholder='password' bgColor='bg-white' type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {error && <div className='text-red-500 text-sm text-center'>{error}</div>}

            <div className='flex justify-between text-sm'>
              <label className='flex items-center gap-2 text-[#616060]'>
                <input type='checkbox' className='accent-teal-600' />
                Remember Me
              </label>
              <Link href='/login/password' className='text-[#2B6F71] hover:underline'>
                Forgot Password?
              </Link>
            </div>

            <button type='submit' className='w-full bg-[#06688E] text-white py-3 rounded-full transition flex items-center justify-center' disabled={isLoading}>
              {isLoading ? <span className='inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin'></span> : 'Login'}
            </button>
          </form>

          <div className='mt-6'>
            <p className='text-sm text-[#616060] '>Or Login Via Social Network</p>
            <div className='flex  space-x-2 mt-[27px]'>
              <button className='bg-[#E22F31] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
                <GoogleIcon />
              </button>
              <button className='bg-black text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
                <GithubIcon />
              </button>
              <button className='bg-[#4676ED] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
                <FacebookIcon />
              </button>
              <button className='bg-[#0A66C2] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
                <LinkedinIcon />
              </button>
            </div>
          </div>

          <div className='text-center text-[16px] text-[#AAAAAA] mt-[153px]'>© 2022, Smart Care - Design by Doctor </div>
        </div>
      </div>
    </div>
  );
}
