import { PhoneOff } from 'lucide-react';

const FloatingCallButtonTwo = () => {
  return (
    <div className='fixed bottom-6 left-1/2 md:left-[57%] transform -translate-x-1/2 z-50 w-full max-w-[261px] h-[82px] px-4'>
      <button className='flex items-center bg-[#31ABC5] border-2 border-[#006E8C] rounded-full py-3 px-5 w-full relative shadow-[0_0_20px_4px_rgba(209,48,81,0.5)] cursor-pointer'>
        <div className='mr-3 flex items-center justify-center bg-white rounded-full p-2 shadow-[0_0_20px_8px_rgba(209,48,81,0.7),0_0_40px_16px_rgba(209,48,81,0.4)]'>
          <PhoneOff className='w-7 h-7 text-[#D13051] ' />
        </div>
        <div className='text-left text-white leading-tight'>
          <div className='font-semibold text-[18px]'>IN Call</div>
          <div className='text-[13px]'>Click To End Call.</div>
        </div>
      </button>
    </div>
  );
};

export default FloatingCallButtonTwo;
