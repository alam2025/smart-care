'use client';
import { useState } from 'react';
import Image from 'next/image';
import InputField from '@/components/ui/InputField';

export default function PasswordResetPage() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
  };
  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-[#EBFFFE] md:bg-white text-black'>
      <div className='hidden md:block relative w-full md:w-1/2 h-64 md:h-auto'>
        <Image src='/login-image.jpg' alt='Login visual' fill className='object-cover' priority />
      </div>

      <div className='w-full md:w-1/2 flex items-center justify-center p-6 md:p-8'>
        <div className='md:hidden w-full max-w-md'>
          <div className='flex justify-center'>
            <div className='w-[228px] h-[259px]'>
              <Image src='/logo.png' alt='Logo' width={228} height={259} className='w-[228px] h-[259px]' priority />
            </div>
          </div>
          <h2 className='text-[20px] font-semibold text-[#201B50] mt-6 text-center md:text-left'>Password Reset</h2>
          <p className='text-[14px] text-[#616060] mt-2 mb-6 text-center md:text-left'>Enter the email address to reset password</p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <InputField
                label='Email Address'
                type='email'
                placeholder='Email Address'
                bgColor='transparent'
                borderColor='border-[#C0C0C0]'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type='submit' className='w-full bg-[#06688E] text-white py-2 rounded-full  transition mt-4'>
              Send Reset Link
            </button>
          </form>

          <div className='text-center text-[16px] text-[#AAAAAA] mt-[56px]'>© 2022, Smart Care - Design by Doctor </div>
        </div>

        {/* Desktop View */}
        <div className='hidden md:block max-w-md w-full'>
          <div className='w-[102px] h-[102px]'>
            <Image src='/logo.png' alt='Logo' width={102} height={102} className='w-[102px] h-[102px] object-contain' priority />
          </div>
          <h2 className='text-[20px] font-semibold text-[#201B50] mt-6 text-center md:text-left'>Password Reset</h2>
          <p className='text-[#616060] text-[14px] mt-2 mb-6 text-center md:text-left'>Enter the email address to reset password</p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <InputField label='Email Address' type='email' placeholder='Enter your email' bgColor='transparent' required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type='submit' className='w-full bg-[#06688E] text-white py-2 rounded-full  transition mt-4'>
              Send Reset Link
            </button>
          </form>
          <div className='text-center text-[16px] text-[#AAAAAA] mt-[271px]'>© 2022, Smart Care - Design by Doctor </div>
        </div>
      </div>
    </div>
  );
}
