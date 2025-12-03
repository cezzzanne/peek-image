import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const hexColor = searchParams.get('hexColor') || '#FF7F50';
  const title = searchParams.get('title') || 'Playing beer pong at a house party';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: hexColor,
          padding: '60px',
          fontFamily: 'sans-serif',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 900, color: '#6D1F08' }}>
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}