'use client';

import { Mail, MapPin, Star } from 'lucide-react';
import { useState } from 'react';
import FloatingCallButton from '@/components/FloatingCallButton';

export default function DoctorDetailCard() {
  const [activeTab, setActiveTab] = useState('about');

  const tabClasses = (tab: string) => `text-sm px-2 pb-2 relative cursor-pointer ${activeTab === tab ? 'text-[#42B3CE] text-[16px] font-semibold border-b-2 border-[#42B3CE]' : 'text-[#373636]'}`;

  return (
    <div className='flex flex-col md:flex-row gap-5 p-6 min-h-screen'>
      <div className='hidden md:block w-full md:w-1/3 space-y-4'>
        <div className='text-sm space-y-4'>
          {['BIRDEM General Hospital', 'Apollo Hospitals', 'Labaid Hospital', 'Evna Sina hospital'].map((name, i) => (
            <div key={i} className='bg-white border border-gray-200 rounded-lg p-4 cursor-pointer space-y-1 shadow-sm'>
              {i === 0 && <h2 className='text-[#06688E] font-bold text-[20px] pb-1 border-b border-[#DAE4FF] mb-2'>Doctor Chamber</h2>}
              <h3 className='text-[#1B6CA8] text-[20px] font-semibold pt-3'>{name}</h3>
              <p className='text-[#000000] text-[16px]'>Date : 14th-16th-May-2025</p>
              <p className='text-[#000000] text-[16px]'>Day : Saturday, Sunday, Monday</p>
              <p className='text-[#000000] text-[16px]'>Time: 12:00pm to 03:00pm</p>
              <p className='text-[#000000] text-[16px]'>Doctor Visited Price : 1200tk</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full md:w-2/3 space-y-4'>
        <div className='bg-white rounded-lg shadow-sm flex flex-col md:flex-row gap-4'>
          <img src='/doctor{2}.png' alt='Doctor' className='w-[265px] h-[265px] rounded-lg ml-4 mt-4 md:ml-6 md:pt-5' />
          <div className='flex-1 md:pt-8 px-4 pb-4 md:pb-0 md:pl-0'>
            <h2 className='text-[24px] font-bold text-[#2D3748]'>Dr.Karar Mahmud</h2>
            <p className='text-sm text-[#717070]'>Consultant Retina & UVEA</p>
            <p className='text-[18px] text-[#717070] mb-2'>MBBS, DDV (DU), MSc (SUB), DCPD (UK)</p>
            <div className='flex flex-col sm:flex-row gap-6 text-sm text-gray-700 mt-2'>
              <div className='flex items-start gap-2'>
                <Mail className='w-5 h-5 text-[#06688E] mt-1' />
                <div>
                  <p className='text-[#5B5F5F] text-[12px]'>Email Address</p>
                  <p className='text-[14px] text-[#2F3131]'>reyananisdi@gmail.com</p>
                </div>
              </div>
              <div className='flex items-start gap-2'>
                <MapPin className='w-5 h-5 text-[#06688E] mt-1' />
                <div>
                  <p className='text-[#5B5F5F] text-[12px]'>Address</p>
                  <p className='text-[14px] text-[#2F3131]'>21 Hazelmere Close, Billin.</p>
                </div>
              </div>
            </div>
            <div className='hidden md:flex flex-wrap gap-4 mt-4'>
              <div className='bg-[#F9FCFD] rounded-lg px-4 py-3 w-[190px]'>
                <p className='text-[#06688E] text-[14px] mb-1'>Experience</p>
                <div className='flex items-start gap-2'>
                  <p className='text-[22px] font-bold text-[#000000]'>16</p>
                  <div className='text-[12px] text-[#5B5F5F] leading-4'>
                    <p>Years of experience</p>
                    <p>
                      <span className='text-[#06688E]'>since 2011</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F9FCFD] rounded-lg px-4 py-3 w-[190px]'>
                <p className='text-[#06688E] font-semibold text-sm mb-1'>Rating</p>
                <div className='flex items-start gap-2'>
                  <p className='text-[22px] font-bold text-black'>5</p>
                  <Star className='w-4 h-4 mt-[6px] fill-[#F97316] stroke-[#F97316]' />
                  <div className='text-[12px] text-[#5B5F5F] leading-4'>
                    <p>This Doctor</p>
                    <p>
                      rating is <span className='text-[#06688E]'>Good</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex md:hidden flex-row gap-4 bg-white p-4 rounded-lg shadow-sm'>
          <div className='bg-[#F9FCFD] rounded-lg px-4 py-3 flex-1'>
            <p className='text-[#06688E] font-semibold text-sm mb-1'>Experience</p>
            <div className='flex items-start gap-2'>
              <p className='text-[22px] font-bold text-black'>16</p>
              <div className='text-[12px] text-[#5B5F5F] leading-4'>
                <p>Years of experience</p>
                <p>
                  <span className='text-[#06688E]'>since 2011</span>
                </p>
              </div>
            </div>
          </div>
          <div className='bg-[#F9FCFD] rounded-lg px-4 py-3 flex-1'>
            <p className='text-[#06688E] font-semibold text-sm mb-1'>Rating</p>
            <div className='flex items-start gap-2'>
              <p className='text-[22px] font-bold text-black'>5</p>
              <Star className='w-4 h-4 mt-[6px] fill-[#F97316] stroke-[#F97316]' />
              <div className='text-[12px] text-[#5B5F5F] leading-4'>
                <p>This Doctor</p>
                <p>
                  rating is <span className='text-[#06688E]'>Good</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-sm'>
          <div className='flex justify-between border-b border-gray-200'>
            <div className={tabClasses('about')} onClick={() => setActiveTab('about')}>
              About
            </div>
            <div className={tabClasses('education')} onClick={() => setActiveTab('education')}>
              Education
            </div>
            <div className={tabClasses('experience')} onClick={() => setActiveTab('experience')}>
              Experience
            </div>
          </div>

          <div className='pt-4 text-sm text-gray-700 leading-relaxed'>
            {activeTab === 'about' && (
              <p>
                Dr. Karar Mahmud is a Senior Consultant Orthopedic Surgeon at Apollo Hospitals, Chennai, with over 25 years of experience. He specializes in trauma, sports injury, and joint
                replacement surgeries, including robotic hip and knee replacements. Dr. Kosygin has been recognized as one of India's most inspiring orthopedic surgeons and has treated patients
                globally. His areas of expertise include adult complex reconstruction, bone and soft tissue infections, regenerative techniques for cartilage loss, and tumor reconstruction. He also
                plays an active role in teaching and training medical professionals across more than 15 countries.
              </p>
            )}
            {activeTab === 'education' && (
              <ul className='list-disc ml-5 space-y-1'>
                <li>MBBS from Dhaka University</li>
                <li>DDV from University of Delhi</li>
                <li>MSc in Retina & UVEA from SUB</li>
                <li>DCPD from UK Medical Council</li>
              </ul>
            )}
            {activeTab === 'experience' && (
              <ul className='list-disc ml-5 space-y-1'>
                <li>Senior Consultant at Apollo Hospitals, Chennai</li>
                <li>Consultant at BIRDEM General Hospital</li>
                <li>Specialist Trainer in Robotic Surgery Programs</li>
                <li>Global Speaker at 15+ Medical Conferences</li>
              </ul>
            )}
          </div>
        </div>
        <div className='md:hidden w-full space-y-4'>
          <div className='text-sm space-y-4'>
            {['BIRDEM General Hospital', 'Apollo Hospitals', 'Labaid Hospital', 'Evna Sina hospital'].map((name, i) => (
              <div key={i} className='bg-white border border-gray-200 rounded-lg p-4 space-y-1 cursor-pointer shadow-sm'>
                {i === 0 && <h2 className='text-[#06688E] font-bold text-[20px] pb-1 border-b border-[#06688E] mb-2'>Doctor Chamber</h2>}
                <h3 className='text-[#1B6CA8] text-[20px] font-semibold pt-3'>{name}</h3>
                <p>Date : 14th-16th-May-2025</p>
                <p>Day : Saturday, Sunday, Monday</p>
                <p>Time: 12:00pm to 03:00pm</p>
                <p>Doctor Visited Price : 1200tk</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <FloatingCallButton /> */}
    </div>
  );
}
