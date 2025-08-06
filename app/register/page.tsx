'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InputField from '@/components/ui/InputField';
import GoogleIcon from '@/components/svg/googleIcon';
import FacebookIcon from '@/components/svg/facebookIcon';
import GithubIcon from '@/components/svg/githubIcon';
import LinkedinIcon from '@/components/svg/linkedinIcon';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    gender: '',
    agreed: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (target as HTMLInputElement).checked : value,
    });
  };
  const handleSubmit =async  (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);
    if(formData.password != formData.confirmPassword){
      toast.warn('Password & Confirm Password is not Match !');
      return
    }
    try {
      let res = await axios.post("api/auth/signup", formData);
      console.log("🚀 ~ handleSubmit ~ res:", res.data.response)
      toast.success('Sign Up success !');
      router.push("/dashboard/patient");
    } catch (error:any) {
      console.log('érror',error);
      toast.warn(error.response.data.error);
      
    }
    
  };
  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-[#EBFFFE] md:bg-white text-black'>
      <div className='hidden md:block relative w-full md:w-1/2 h-64 md:h-auto'>
        <Image src='/register-image.jpg' alt='Register visual' fill className='object-cover' />
      </div>
      <div className='w-full md:w-1/2 flex items-center justify-center p-6 md:p-8'>
        <div className='md:hidden w-full max-w-md'>
          <div className='flex justify-center'>
            <div className='w-[112px] h-[127px]'>
              <Image src='/logo.png' alt='Logo' width={112} height={127} className='w-[112px] h-[127px] object-contain' />
            </div>
          </div>
          <h2 className='text-[32px] text-[#06688E] font-semibold mt-[7px] text-center'>Register</h2>
          <p className='text-[#616060] text-[18px] mt-1 mb-[27px] text-center'>Create new account</p>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <InputField label='Username' name='username' placeholder='username' borderColor='border-[#C0C0C0]' bgColor='transparent' required value={formData.username} onChange={handleChange} />
            </div>
            <div>
              <InputField label='Email Address' name='email' placeholder='Email Address' borderColor='border-[#C0C0C0]' type='email' bgColor='transparent' required value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <InputField label='Phone Number' name='phone' placeholder='Phone number' borderColor='border-[#C0C0C0]' type='tel' bgColor='transparent' value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <InputField label='Password' name='password' placeholder='Password' borderColor='border-[#C0C0C0]' bgColor='transparent' type='password' required value={formData.password} onChange={handleChange} />
            </div>
            <div>
              <InputField
                label='Confirm Password'
                name='confirmPassword'
                placeholder='Type Again'
                borderColor='border-[#C0C0C0]'
                type='password'
                bgColor='transparent'
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <label className='flex items-center text-sm gap-2 mt-2'>
              <input type='checkbox' name='agreed' checked={formData.agreed} onChange={handleChange} required className='accent-teal-600' />
              <p className='text-[#616060]'>I agree to the</p>
              <a className='text-[#2B6F71]' href='#'>
                Terms of Use
              </a>{' '}
              &{' '}
              <a className='text-[#2B6F71]' href='#'>
                Privacy Policy
              </a>
            </label>
            <button type='submit' className='w-full bg-[#06688E] text-white py-3 rounded-full mt-4'>
              Register
            </button>
          </form>
          <div className='mt-4 flex justify-center'>
            <p className='text-sm text-[#616060] pe-1'> Or Sign Up Via Social Network</p>
            <Link href='/login' className='text-sm text-[#2B6F71] hover:underline block '>
              Login
            </Link>
          </div>
          <div className='flex justify-center space-x-1 mt-6'>
            <div className='bg-[#E22F31] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
              <GoogleIcon />
            </div>
            <div className='bg-[#4676ED] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
              <FacebookIcon />
            </div>
          </div>
          <div className='text-center text-[16px] text-[#AAAAAA] mt-[56px]'>© 2022, Smart Care - Design by Doctor </div>
        </div>
        <div className='hidden md:block max-w-md w-full'>
          <div className='w-[102px] h-[102px]'>
            <Image src='/logo.png' alt='Logo' width={102} height={102} className='w-[102px] h-[102px] object-contain' />
          </div>
          <h2 className='text-[24px] font-semibold text-[#06688E] mt-[4px]'>Register</h2>
          <div className='flex justify-between'>
            <p className='text-gray-500 mt-[6px] mb-[32px]'>Create new account</p>
            <Link href='/login' className='text-sm text-[#2B6F71] mt-[6px] hover:underline ml-2'>
              Login
            </Link>
          </div>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <InputField label='Username' placeholder='username' name='username' bgColor='transparent' required value={formData.username} onChange={handleChange} />
            </div>
            <div className='flex gap-2'>
              <div>
                <InputField label='Email Address' placeholder='Email Address' name='email' type='email' bgColor='transparent' required value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <InputField label='Phone Number' placeholder='Phone number' type='tel' name='phone' bgColor='transparent' value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className='flex gap-2'>
              <div>
                <InputField label='Password' placeholder='Password' bgColor='transparent' name='password' type='password' required value={formData.password} onChange={handleChange} />
              </div>
              <div>
                <InputField label='Confirm Password' placeholder='Type Again' type='password' name='confirmPassword' bgColor='transparent' required value={formData.confirmPassword} onChange={handleChange} />
              </div>
            </div>
            {/* <div className='flex gap-2'>
              <div className='flex flex-col'>
                <label className='mb-1 text-[#616060] text-sm'>Birthdate</label>
                <input
                  name='birthdate'
                  type='date'
                  value={formData.birthdate}
                  onChange={handleChange}
                  className={`w-[222px] h-[52px] px-4 py-2 rounded-md border border-[#E5E5E5] outline-none bg-white ${!formData.birthdate ? 'text-[#AAAAAA]' : 'text-[#AAAAAA]'}`}
                  placeholder='MM/DD/YYYY'
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-1 text-[#616060] text-sm'>Select</label>
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-[218px] h-[52px] px-4 py-2 rounded-md border border-[#E5E5E5] outline-none bg-white ${
                    formData.gender === '' || formData.gender === 'female' ? 'text-[#AAAAAA]' : 'text-[#AAAAAA]'
                  }`}
                >
                  <option value='' disabled className='text-[#AAAAAA]'>
                    Please select
                  </option>
                  <option value='female' className='text-[#AAAAAA]'>
                    Female
                  </option>
                  <option value='male' className='text-[#AAAAAA]'>
                    Male
                  </option>
                  <option value='other' className='text-[#AAAAAA]'>
                    Other
                  </option>
                </select>
              </div>
            </div> */}
            <label className='flex items-center text-sm gap-2 mt-2'>
              <input type='checkbox' name='agreed' checked={formData.agreed} onChange={handleChange} required className='accent-teal-600' />
              <p className='text-[#616060]'>I agree to the</p>
              <a className='text-[#2B6F71]' href='#'>
                Terms of Use
              </a>
              &
              <a className='text-[#2B6F71]' href='#'>
                Privacy Policy
              </a>
            </label>
            <button type='submit' className='w-full bg-[#06688E] text-white py-2 rounded-full transition cursor-pointer'>
              Register
            </button>
          </form>
          <div className='mt-4 text-sm text-[#616060]'>Or Sign Up Via Social Network</div>
          <div className='flex space-x-1 mt-6'>
            <div className='bg-[#E22F31] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
              <GoogleIcon />
            </div>
            <div className='bg-black text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
              <GithubIcon />
            </div>
            <div className='bg-[#4676ED] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
              <FacebookIcon />
            </div>
            <button className='bg-[#0A66C2] text-white h-[40px] w-[40px] rounded flex items-center justify-center'>
              <LinkedinIcon />
            </button>
          </div>
          <div className='text-center text-[16px] text-[#AAAAAA] mt-[153px]'>© 2022, Smart Care - Design by Doctor </div>
        </div>
      </div>
    </div>
  );
}
