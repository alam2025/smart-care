'use client';
import { useState } from 'react';
import FloatingCallButton from '@/components/FloatingCallButton';
import ImageeditIcon from '@/components/svg/imageeditIcon';

export default function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleSave = () => {
    setIsEditing(false);
  };
  const handleCancel = () => setIsEditing(false);

  return (
    <div className='p-4 bg-[#e6f7f8]  flex items-center justify-center overflow-hidden'>
      <div className='flex flex-col md:flex-row gap-6 w-full max-w-[1200px]'>
        <div className='relative self-start flex flex-col items-center bg-white p-6 rounded-2xl shadow-md w-full md:w-1/3'>
          <p className='mt-4 text-[20px] font-semibold text-[#454545]'>Refat Al Rahim</p>
          <p className='text-[18px] text-[#717070] mb-5'>Id:202528</p>
          <div className='relative'>
            <img src='/p.png' alt='Profile' className='rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover' />
            <div className='absolute bottom-[33px] right-[-8px] cursor-pointer  p-2 rounded-full'>
              <ImageeditIcon />
            </div>
          </div>
        </div>
        <div className='bg-white p-6 rounded-2xl shadow-md w-full md:w-2/3'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-[16px] font-semibold text-[#000000]'>Other Information</h2>
            <img src='/Simplification.png' alt='icon' className='w-[24px] h-[24px] cursor-pointer' onClick={handleEditToggle} />
          </div>
          {!isEditing ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm'>
              <Info label='Full Name' value='Refat Al Rahim' />
              <Info label='Enter Your Email' value='refatalrahim@gmail.com' />
              <Info label='Phone Number' value='+8801601527397' />
              <Info label='Your Age' value='25 years' />
              <Info label='Gender' value='Male' />
              <Info label='Address' value='Dhanmondi, Dhaka, Bangladesh' />
            </div>
          ) : (
            <>
              <div className='flex flex-col gap-4 text-sm'>
                <Input label='Full Name' defaultValue='Refat Al Rahim' />
                <Input label='Enter Your Email' defaultValue='refatalrahim@gmail.com' />
                <Input label='Phone Number' defaultValue='+8801601527397' />
                <Input label='Your Age' defaultValue='25 years' />
                <Input label='Gender' defaultValue='Male' />
                <Input label='Address' defaultValue='Dhanmondi, Dhaka, Bangladesh' />
              </div>
            </>
          )}
        </div>
      </div>
      {/* <FloatingCallButton /> */}
    </div>
  );
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className='pb-2 border-b border-dotted border-gray-300'>
      <p className='text-[#717070]'>{label}</p>
      <p className='font-medium'>{value}</p>
    </div>
  );
}
function Input({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className='text-[#717070] block mb-1'>{label}</label>
      <input className='w-full border border-[#DBDBDB] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e7c88]' defaultValue={defaultValue} />
    </div>
  );
}
