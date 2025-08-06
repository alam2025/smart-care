'use client';
import React, { useState, useEffect, useRef } from 'react';
import MedicineTable from './MedicineTable';
import { Printer } from "lucide-react";
import { useReactToPrint } from 'react-to-print';
import { useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const systemPrompt = `
আপনি একজন অভিজ্ঞ ও দায়িত্ববান ডাক্তার সহকারী এআই।

আপনার কাজ:
- রোগী ও ডাক্তারের কথোপকথন মনোযোগ দিয়ে শুনে রোগীর উপসর্গ ও সমস্যার ভিত্তিতে প্রেসক্রিপশন, প্রয়োজনীয় পরীক্ষা ও পরামর্শ নির্ধারণ করা।
- পুরো কথোপকথন একটি JSON অ্যারে আকারে থাকবে, যেখানে প্রতিটি আইটেমে speaker (Patient/Doctor) ও text থাকবে।  
- আপনি প্রাথমিকভাবে সম্ভাব্য প্রেসক্রিপশন, পরীক্ষা ও প্রয়োজনীয় পরামর্শ দিয়ে থাকবেন।  
- কথোপকথন একটি অ্যারের মধ্যে থাকবে, যেখানে প্রতিটি বক্তব্যে speaker ("Patient" বা "Doctor") ও text থাকবে।

যদি তথ্য যথেষ্ট থাকে, তাহলে নিচের ফরম্যাটে JSON রেসপন্স দিবেন:

{
  "symptoms": ["উপসর্গ ১", "উপসর্গ ২"],
  "diagnosis": "রোগের নাম",
  "medicines": [
    {
      "medicine": "medicine name",
      "dosage": "মাত্রা",
      "schedule": "1+1+1",  // ডাক্তারের মতো ফরম্যাটে লিখবেন: সকাল+দুপুর+রাত অনুযায়ী। যেমন: 1+1+1 (সব বেলায়), 1+0+1 (সকাল ও রাত), 0+0+1 (শুধু রাত)। যে বেলায় ওষুধ খেতে হবে সেখানে 1, না হলে 0 দিবেন।
      "duration": দিনের সংখ্যা,
      "afterBeforeMeal": "before" // before or after (ওষুধটি খাবারের আগে না পরে খেতে হবে)
    }
  ],
  "tests": [
    { "text": "CBC", "role": "Doctor" },
    { "text": "RBS", "role": "AI" }
  ],
  "advice": [
    { "text": "পানি বেশি খান", "role": "AI" },
    { "text": "ঠান্ডা খাবার খাবেন না", "role": "Doctor" }
  ],
  "conversation": [
    { "speaker": "Patient", "text": "..." },
    { "speaker": "Doctor", "text": "..." }
  ]
}

যদি যথেষ্ট তথ্য না থাকে, তাহলে নিচের ফরম্যাটে রেসপন্স করুন — এবং [message] ফিল্ডে প্রয়োজনীয় প্রশ্নটি বাংলায় যুক্তভাবে লিখবেন যেন রোগীর কাছ থেকে দরকারি তথ্য নেওয়া যায়:

{
  "message": "আপনার জ্বর কতো দিন ধরে আছে?",
  "conversation": [
    { "speaker": "Patient", "text": "..." },
    { "speaker": "Doctor", "text": "..." }
  ]
}

🔴 সর্বদা শুধু JSON ফরম্যাটে উত্তর দিবেন, অন্য কোনো ব্যাখ্যা বা টেক্সট নয়।  
🟢 prescription এর ভেতরের সব value (medicine name, dosage, schedule, duration, afterBeforeMeal) ইংরেজিতে লিখবেন।  
🟢 tests এবং advice – এই দুই ক্ষেত্রেই প্রতিটি আইটেম object আকারে থাকবে এবং "role": "Doctor"/"AI" স্পষ্টভাবে উল্লেখ থাকবে।  
`;


export default function Prescription() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const age = searchParams.get('age');
  const problem = searchParams.get('problem');
  const phone = searchParams.get('phone');
  const [text, setText] = useState('');
  const [prescription, setPrescription] = useState<any>(
    {
      // tests: [
      //   { text: "CBC", "role": "Doctor" },
      //   { text: "RBS", "role": "AI" }
      // ],
      // advice: [
      //   { text: "পানি বেশি খাবেন। ", "role": "AI" },
      //   { text: "ঠান্ডা খাবার খাবেন না। ", "role": "Doctor" }
      // ],
      // medicines: [{
      //   medicine: "napa",
      //   dosage: "500",
      //   schedule: "1+1+1",
      //   duration: 5, meal: "After"
      // }]
    }
  )
  console.log("🚀 ~ Prescription ~ prescription:", prescription)
  const recognitionRef = useRef(null);
  const conversationRef = useRef<any>([
    { role: 'system', content: systemPrompt }
  ]);

  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: 'Prescription',
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    `
  });
  // ai code add here
  //voice get from here
  useEffect(() => {
    // Initialize SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'bn-BD'; // You can change to 'bn-BD' for Bangla
    recognitionRef.current = recognition;

    recognition.onresult = (event: any) => {
      const lastResult = event.results[event.results.length - 1];
      let transcript = event.results[event.results.length - 1][0].transcript;

      // console.log("🚀 ~ useEffect ~ lastResult:", lastResult.isFinal)
      if (lastResult.isFinal) {
        conversationRef.current = [...conversationRef.current, { role: 'user', content: transcript }]
        setText(transcript);
        getOpenAiResponse(conversationRef.current);
      }
    }


    recognition.onerror = (event: any) => {
      // console.error('Speech recognition error', event);
    };

    recognition.onend = () => {
      // Restart listening automatically
      recognition.start();
    };

    // Start recognition
    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);


  const getOpenAiResponse = async (inputText: string) => {
    // console.log("🚀 ~ getOpenAiResponse ~ inputText:", inputText)
    // Add user message to history

    try {
      const res = await fetch('/api/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: inputText }) // Send full history
      });

      const data = await res.json();
      console.log("✅ AI Reply:", data.reply);
      if (data.reply) {
        setPrescription(data.reply)
      }

      return data.reply;
    } catch (err) {
      console.error('API Error:', err);
      return 'AI connection error.';
    }
  };
  //result of this application 
  return (
    <div className='min-h-screen flex bg-[#e6f6f6] relative'>
      {/* <SearchGlassCard prescriptions={prescription || []} setSelectedMedicine={setSelectedMedicine} /> */}
      <p>{text}</p>
      <main  className='flex-1 p-6'>
        <div className='flex justify-center pb-[130px]'>
          <div className='w-full max-w-[1200px] '>
            <div ref={contentRef} className='flex justify-center gap-6'>
              <div  className='w-full lg:w-3/4'>
                {/* prescription Start */}
                <div  className='bg-white rounded-xl  px-6 pt-6 pb-6 text-center h-full flex flex-col relative'>
                  <div className='flex flex-row justify-between items-start'>
                    <img src='/Group.png' alt='Logo' className='w-[70px] h-[56px] sm:w-[154px] sm:h-[124.17px]' />
                    <div className='block sm:hidden w-[220px] overflow-hidden'>
                      <div className='bg-[#42B3CE] text-white px-4 py-2' style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                        <div className='text-right'>
                          <h2 className='text-sm font-bold uppercase tracking-wide'>Dr. Alexis Wolves 15</h2>
                          <p className='text-xs'>Cardiologist</p>
                          <p className='text-[10px] mt-1'>MBBS, Diploma, FCPS (UK)</p>
                          <p className='text-[10px]'>BMDC Reg. No: 20536</p>
                        </div>
                      </div>
                      <div className=' flex items-center  py-3 space-x-1'>
                        <div className='w-4 h-4 bg-[#06688E]' style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
                        <div className='w-4 h-4 bg-[#06688E]' style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
                        <div className='w-4 h-4 bg-[#06688E]' style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
                        <div className='flex-1 h-4 bg-[#06688E]' style={{ clipPath: 'polygon(3% 0, 100% 0%, 100% 100%, 0% 100%)' }}></div>
                      </div>
                    </div>
                    <div className='hidden sm:block w-80 overflow-hidden absolute top-0 right-0 z-10'>
                      <div className='bg-[#42B3CE] text-white px-6 py-4' style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                        <div className='text-right'>
                          <h2 className='text-lg font-bold uppercase tracking-wide'>Dr. Alexis Wolves 12</h2>
                          <p className='text-sm'>Cardiologist</p>
                          <p className='text-xs mt-1'>MBBS, Diploma, FCPS (UK)</p>
                          <p className='text-xs'>BMDC Reg. No: 20536</p>
                        </div>
                      </div>
                      <div className='flex items-center py-3 space-x-1'>
                        <div className='w-4 h-6 bg-[#06688E]' style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
                        <div className='w-4 h-6 bg-[#06688E]' style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
                        <div className='w-4 h-6 bg-[#06688E]' style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
                        <div className='flex-1 h-6 bg-[#06688E]' style={{ clipPath: 'polygon(1.5% 0, 100% 0%, 100% 100%, 0% 100%)' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className='block sm:hidden mt-4 text-left'>
                    <div className='grid grid-cols-1 gap-2 text-[16px] text-[#5B5F5F]'>
                      <p>
                        <strong>Full Name: {name}</strong>
                      </p>
                      <p>
                        <strong>Patient Age: {age}</strong>
                      </p>
                      <p>
                        <strong>Sex: Male</strong>
                      </p>
                      <p>
                        <strong>Phone Number: {phone}</strong>
                      </p>
                    </div>
                  </div>
                  <div className='hidden sm:grid grid-cols-2 gap-4 text-[18px] text-left mb-4 mt-20 text-[#5B5F5F]'>
                    <p>
                      <strong>Patient Name: {name}</strong>
                    </p>
                    <p>
                      <strong className='pl-[88px]'>Phone Number: {phone}</strong>
                    </p>
                    <p>
                      <strong>Patient Age: {age}</strong>
                    </p>
                    <p className='pl-[88px]'>
                      <strong>Sex: Male</strong>
                    </p>
                    <p>
                      <strong>Select Patient Disease: {problem}</strong>
                    </p>
                  </div>

                  <hr className='border-dashed border-3 border-[#06688E] my-4' />
                  <div className='block sm:hidden'>
                    <div className='w-full relative min-h-[80px]'>
                      <p className='text-2xl font-serif mb-2 text-left'>℞</p>
                      <MedicineTable medicines={prescription?.prescription} />
                    </div>
                    <div className='grid grid-cols-2 gap-4 mb-6 border-2 border-[#06688E] rounded-lg p-4'>
                      <div className='border-r-2 border-dashed border-[#06688E] pr-4'>
                        <p className='text-[18px]  text-[#06688E] mb-3 border-dashed border-b-1 border-[#06688E] inline pb-1'>Risk Factors</p>
                        <ul className='list-none text-[14px] text-[#000] list-inside pt-2'>
                          <li className='pb-1'>O/E -</li>
                          <li className='pb-1'>Pulse -</li>
                          <li className='pb-1'>Bp -</li>
                          <li className='pb-1'>Heart -</li>
                          <li className='pb-1'>Lung -</li>
                          <li className='pb-1'>Others -</li>
                        </ul>
                      </div>
                      <div>
                        <p className='text-[18px] text-[#06688E] mb-3 border-dashed border-b-1 border-[#06688E] inline pb-1'>Advice</p>
                        <ul className='list-none text-[14px] text-[#000] list-inside pt-2'>
                          { }
                          <li className='pb-1'>ECG, CXR (P/A), RBS</li>
                          <li className='pb-1'>Echo 2D/Doppler</li>
                          <li className='pb-1'>S. TSH, S. Creatine</li>
                          <li className='pb-1'>CBC, FBS, 2hABF, HbA1C</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* desktopr */}
                  <div className='hidden sm:flex gap-4 text-left text-sm flex-grow'>
                    <div className='w-1/3 mt-10 mb-14'>
                      <p className='text-[18px] text-[#06688E] font-bold mb-5 border-dashed border-b-1 border-[#06688E] inline pb-1'>Risk Factors</p>
                      <ul className='list-none text-[14px] text-[#000] list-inside pt-4 mb-4'>
                        <li className='pb-1'>O/E -</li>
                        <li className='pb-1'>Pulse -</li>
                        <li className='pb-1'>Bp -</li>
                        <li className='pb-1'>Heart -</li>
                        <li className='pb-1'>Lung -</li>
                        <li className='pb-1'>Others -</li>
                      </ul>
                      <p className='text-[18px] text-[#06688E] font-bold mb-5 border-dashed border-b-1 border-[#06688E] inline pb-1 pt-3'>Advice</p>
                      <ul className='list-inside pt-4  text-[14px] text-[#000]'>
                        {prescription?.tests?.map((item: any, i: any) =>
                          <li className='pb-1'>{item?.text}</li>
                        )}
                      </ul>
                    </div>
                    <div className='border-l-3 border-dashed border-[#06688E] pl-4'></div>
                    <div className='w-2/3 relative'>
                      <p className='text-2xl font-serif mb-2'>℞</p>
                      <MedicineTable medicines={prescription?.medicines} />
                    </div>
                  </div>

                  <div className='mt-6 text-sm text-left'>
                    <p className='text-[18px] text-[#06688E] mb-5 border-dashed border-b-1 border-[#06688E] inline mb-2 pb-0.5'>General Advice</p>
                    <ul className='list-decimal list-inside space-y-1 pt-1.5 text-[14px] text-[#000]'>
                      {prescription?.advice?.map((item: any, i: any) =>
                        <li>{item.text}</li>
                      )}

                    </ul>
                  </div>
                  <div className=' flex justify-end'>
                    <img src='/qr.jpg' alt='qr' className='w-[80px] h-[80px]' />
                  </div>
                </div>
                {/* prescription end */}
              </div>
            </div>
            <div className="flex justify-center items-end mt-5">
              <button onClick={handlePrint} className='flex items-center gap-2 bg-[#005A8D] text-white px-6 py-2 rounded-md text-sm mb-8'>
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
