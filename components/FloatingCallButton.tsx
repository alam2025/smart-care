import { PhoneOff } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <div className='fixed bottom-6 left-1/2 md:left-[57%] transform -translate-x-1/2 z-50 w-full max-w-[261px] h-[82px] px-4'>
      <button className='flex items-center bg-[#33ABAE] border-2 border-[#2B6F71] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#2B9A9D] transition w-full cursor-pointer'>
        <div className='mr-3 flex items-center justify-center bg-white rounded-full p-1.5'>
          <PhoneOff className='h-[36px] w-[36px]' style={{ color: '#33ABAE' }} />
        </div>
        <div className='text-left leading-tight'>
          <div className='font-semibold text-[22px] sm:text-base'>IN Call</div>
          <div className='text-[14px] text-white/80'>Click To End Call.</div>
        </div>
      </button>
    </div>
  );
};

export default FloatingCallButton;
