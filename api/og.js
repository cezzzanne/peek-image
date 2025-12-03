import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler(request) {
  const { searchParams } = new URL(request.url);
  
  const hexColor = searchParams.get('hexColor') || '#FF7F50';
  const title = searchParams.get('title') || 'Playing beer pong at a house party';

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: hexColor,
          padding: '60px',
          justifyContent: 'center',
          alignItems: 'center',
        },
        children: {
          type: 'div',
          props: {
            style: { fontSize: 48, fontWeight: 900, color: '#6D1F08' },
            children: title,
          },
        },
      },
    },
    {
      width: 1200,
      height: 630,
    }
  );
}