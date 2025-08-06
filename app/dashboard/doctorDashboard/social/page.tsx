'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Youtube, Twitter, PhoneOff, ChevronDown, Smartphone } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { ColorFacebook } from '@/components/svg/colorFacebook';
import { ColorWhatsapp } from '@/components/svg/colorWhatsapp';
import { ColorYoutube } from '@/components/svg/colorYoutube';
import { colorTwitter } from '@/components/svg/colorTwitter';

const activityData = [
  { day: 'MON', value: 1800 },
  { day: 'TUE', value: 800 },
  { day: 'WED', value: 1900 },
  { day: 'THU', value: 1200 },
  { day: 'FRI', value: 2313 },
  { day: 'SAT', value: 500 },
  { day: 'SUN', value: 1700 },
];

const socialStats = [
  {
    name: 'Facebook',
    icon: ColorFacebook,
    time: '5 h 5m',
    graph: '/Chart.png',
  },
  {
    name: 'WhatsApp',
    icon: ColorWhatsapp,
    time: '3 min',
    graph: '/Chart.png',
  },
  {
    name: 'Youtube',
    icon: ColorYoutube,
    time: '1 hours',
    graph: '/Chart.png',
  },
  {
    name: 'Twitter',
    icon: colorTwitter,
    time: '1 hours',
    graph: '/Chart.png',
  },
];
export default function Dashboard() {
  return (
    <div className='min-h-screen p-6 flex flex-col md:flex-row gap-6'>
      <div className='w-full md:w-[545px] space-y-4'>
        <Card>
          <CardContent className='p-6'>
            <p className='text-[#717070] text-[20px]'>Today Overview</p>
            <h1 className='text-[31px] font-bold'>12h 30m</h1>
          </CardContent>
        </Card>

        {socialStats.map((item, index) => (
          <Card key={index} className='w-full'>
            <CardContent className='flex items-center justify-between p-4'>
              <div className='flex items-center gap-4'>
                {React.createElement(item.icon, { className: 'text-[#1877f2] w-6 h-6' })}
                <div>
                  <div className='text-[24px]'>{item.name}</div>
                  <div className='text-[30px] text-black font-semibold'>{item.time}</div>
                </div>
              </div>
              <div className='text-xs text-right'>
                <div className='text-[16px] text-[#717070]'>Last 7 Days</div>
                <img src={item.graph} alt='graph' className='h-8 mt-1' />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right Column */}
      <div className='w-full md:flex-1 space-y-6'>
        <Card>
          <CardContent className='p-4'>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='font-semibold text-[#717070] text[18px]'>Activity</h2>
                <h3 className='text-[22px] text-[#1E1B39] font-bold'>last 7 days</h3>
              </div>
              <Button variant='ghost' className='text-sm bg-[#E3F6F5] text-[#06688E] hover:bg-[#daf2f3]'>
                Weekly <ChevronDown className='ml-1 h-4 w-4' />
              </Button>
            </div>
            <ResponsiveContainer width='100%' height={200}>
              <BarChart data={activityData}>
                <XAxis dataKey='day' tick={{ fill: '#06688E', fontSize: 12 }} axisLine={{ stroke: '#06688E' }} tickLine={false} />
                <YAxis tick={{ fill: '#06688E', fontSize: 12 }} axisLine={{ stroke: '#06688E' }} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    color: '#06688E',
                  }}
                  labelStyle={{ color: '#06688E' }}
                  itemStyle={{ color: '#06688E' }}
                />
                <Bar dataKey='value' radius={[4, 4, 0, 0]}>
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#42B3CE' : '#06688E'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4 space-y-4'>
            <h2 className='font-semibold' style={{ color: '#717070', fontSize: '20px' }}>
              Today Overview
            </h2>
            <div>
              <label className='text-[16px] text-[#717070]'>Platformer</label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Facebook' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='facebook'>Facebook</SelectItem>
                  <SelectItem value='twitter'>Twitter</SelectItem>
                  <SelectItem value='youtube'>YouTube</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='text-sm text-[#717070]'>Date</label>
                <Input type='text' value='15-05-2025' readOnly />
              </div>
              <div>
                <label className='text-sm text-[#717070]'>Time</label>
                <Input type='text' value='Karar Mahmud' readOnly />
              </div>
            </div>
            <div>
              <label className='text-sm'>Right your Post</label>
              <Textarea defaultValue='KVarious versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' />
            </div>
            <Button className='bg-[#06688E] text-white'>Save your Post</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
