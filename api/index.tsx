import { ImageResponse } from '@vercel/og';
import React from 'react'; // <--- Add this import

export const config = { runtime: 'edge' };

export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);

  // Extract params
  const title = searchParams.get('title') || 'Default Title';
  const bgColor = '#' + (searchParams.get('bgColor') || '000000'); 
  const emoji = searchParams.get('emoji') || '👋';
  
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: bgColor,
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 60, color: 'white' }}>{title}</div>
        <div style={{ fontSize: 100, marginTop: 20 }}>{emoji}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}