'use client'
import { useEffect, useRef, useState } from "react";

const SearchGlassCard = ({ prescriptions, setSelectedMedicine }: any) => {
  console.log("🚀 ~ SearchGlassCard ~ prescriptions:", prescriptions)
  const [search, setSearch] = useState('');
  const [position, setPosition] = useState<{ x: number, y: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosition({ x: 425, y: 100 });
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging && position) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  if (!position) return null; // ✅ Wait for client to set initial position

  const filtered = prescriptions
  //   .filter((p: any) =>
  //     p.medicine.toLowerCase().includes(search.toLowerCase()) ||
  //     (p.test && p.test.toLowerCase().includes(search.toLowerCase()))
  //   );
  function addToPrescription(medicine: any) {
    console.log("🚀 ~ addToPrescription ~ medicine:", medicine);
    setSelectedMedicine((prev: any[]) => {
      const exists = prev.some(m => m.medicine === medicine.medicine);
      if (exists) return prev;
      return [...prev, medicine];
    });
  }

  return (
    <div
      ref={cardRef}
      onMouseDown={handleMouseDown}
      className='fixed z-50 rounded-md border border-[#33ABAE] bg-[#33ABAE]/20 shadow-[0_0_20px_rgba(192,132,252,0.6)] backdrop-blur-sm w-[300px] cursor-move select-none text-gray-700'
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <input
        type='text'
        placeholder='Search medicine or test...'
        onChange={(e) => setSearch(e.target.value)}
        className='w-full px-3 py-2 rounded-md bg-white/20 text-gray-700 placeholder:text-gray-500 outline-none mb-3 border border-gray-200'
      />
      <div className='space-y-4 overflow-y-hidden'>
        {filtered.length > 0 ? (
          <div>
            <p className='font-bold text-sm mb-1 px-2'>Medicine</p>
            {filtered.map((item: any, i: number) => (
              <div onClick={() => addToPrescription(item)} key={i} className='mb-2 px-4 py-1 text-sm cursor-pointer'>
                <p>{item?.medicine}</p>
              </div>
              //item one 
            ))}
          </div>
        ) : (
          <p className='text-xs text-gray-500'>No result found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchGlassCard;
