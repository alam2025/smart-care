'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

const data = [
  { day: 'MON', uv: 120000, pv: 1100000 },
  { day: 'TUE', uv: 70000, pv: 250000 },
  { day: 'WED', uv: 130000, pv: 600000 },
  { day: 'THU', uv: 90000, pv: 120000 },
  { day: 'FRI', uv: 10000, pv: 20000 },
  { day: 'SAT', uv: 200000, pv: 300000 },
  { day: 'SUN', uv: 100000, pv: 500000 },
];

export default function DashboardPage() {
  const [period, setPeriod] = useState('weekly');

  return (
    <div className='p-6 bg-[#ECF7F7] min-h-screen space-y-4'>
      {/* Top Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {[
          { title: 'Total Earning', value: '$2055683.25', note: '+12% for the last Month' },
          { title: 'BIRDEM Hospital', value: '$3055.25', note: '+12% for the last Month' },
          { title: 'BIRDEM Hospital', value: '$3055.25', note: '+12% for the last Month' },
          { title: 'BIRDEM Hospital', value: '$3055.25', note: '+12% for the last Month' },
        ].map((item, i) => (
          <Card key={i} className='p-2 sm:p-4'>
            <CardHeader className='pb-2 flex flex-row justify-between items-start p-0'>
              <CardTitle className='text-[14px] text-[#717070]'>{item.title}</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className='h-6 w-6'>
                    <MoreHorizontal size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <p className='text-sm px-2 py-1'>Options</p>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className='p-0 pt-2'>
              <p className='text-[22px] font-inter font-bold break-words text-[#000000]'>{item.value}</p>
              {item.note && (
               <div className='flex items-center  mt-1'>
               <img src='/Frame.png' alt='' />
               <p className='text-[16px] text-[#717070] '>
                 <span className='text-[#42B3CE] gap-2'>12% </span>
                 for the last Month
               </p>
             </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {/* Bar Chart */}
        <Card className='lg:col-span-2'>
          <CardContent className='p-4'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4'>
              <div>
                <p className='text-sm text-gray-500'>Statistics</p>
                <p className='font-semibold text-lg'>Total summary of Earning</p>
              </div>
              <div className='flex space-x-2 bg-[#dcefee] rounded-full p-1'>
                <Button size='sm' variant={period === 'daily' ? 'default' : 'ghost'} onClick={() => setPeriod('daily')} className='rounded-full'>
                  Daily
                </Button>
                <Button size='sm' variant={period === 'weekly' ? 'default' : 'ghost'} onClick={() => setPeriod('weekly')} className='rounded-full'>
                  Weekly
                </Button>
                <Button size='sm' variant={period === 'monthly' ? 'default' : 'ghost'} onClick={() => setPeriod('monthly')} className='rounded-full'>
                  Monthly
                </Button>
              </div>
            </div>
            <div className='w-full border-b border-gray-200 my-2'></div>
            <div className='h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={data}>
                  <XAxis dataKey='day' tick={{ fill: '#42B3CE', fontSize: 12 }} axisLine={{ stroke: '#42B3CE' }} tickLine={{ stroke: '#42B3CE' }} />
                  <YAxis tickFormatter={(v) => `${v / 1000}k`} tick={{ fill: '#42B3CE', fontSize: 12 }} axisLine={{ stroke: '#42B3CE' }} tickLine={{ stroke: '#42B3CE' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#42B3CE' }} labelStyle={{ color: '#42B3CE' }} itemStyle={{ color: '#42B3CE' }} />
                  <Bar dataKey='uv' fill='#33ABAE' barSize={15} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='pv' fill='#0F5C61' barSize={15} radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Radial Chart */}
        <Card>
          <CardContent className='p-4'>
            <p className='text-sm text-gray-500'>Statistics</p>
            <p className='font-semibold text-lg'>Commission</p>
            <div className='w-full border-b border-gray-200 my-2'></div>
            <div className='relative h-64 flex justify-center items-center'>
              <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart
                  cx='50%'
                  cy='50%'
                  innerRadius='70%'
                  outerRadius='100%'
                  startAngle={180}
                  endAngle={0}
                  data={[
                    { name: 'score', value: 75, fill: '#33ABAE' },
                    { name: 'rest', value: 25, fill: '#ECF7F7' },
                  ]}
                >
                  <RadialBar dataKey='value' cornerRadius={10} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className='absolute text-center'>
                <p className='text-3xl font-bold'>5021</p>
                <p className='text-[18px] text-[#1E1B39]'>Your Commission score is</p>
                <p className='text-xs text-gray-400 mt-1'>Updated Nov 24, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
