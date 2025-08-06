import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {messages} = body;
  console.log("🚀 ~ POST ~ userMessage:", messages)

  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  try {
    console.log('I am here one');
  
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: messages,
    }),
  });

  console.log('I am here one');


  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content || 'উত্তর পাওয়া যায়নি।';
  console.log("🚀 ~ POST ~ reply:", JSON.parse(reply))

  return NextResponse.json({ reply:JSON.parse(reply) });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ reply:'উত্তর পাওয়া যায়নি।' });
  }

  
}