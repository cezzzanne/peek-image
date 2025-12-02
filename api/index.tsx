import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);

  // ==========================================
  // 1. DUMMY VARIABLES / CONFIGURATION
  // ==========================================
  
  // Colors
  const hexColor = searchParams.get('hexColor') || '#FF7F50'; // The orange background
  const textColor = '#6D1F08'; // The dark rust text color
  const secondaryTextColor = '#8B3A22'; // Slightly lighter text for description
  const pillColor = 'rgba(0,0,0,0.05)'; // Background for buttons/circles

  // Header Data
  const time = '11:44PM';
  const weatherPair = { icon: '🌙', temp: '11°C' };
  const batteryLevel = '60%';
  const location = 'Sugar House';

  // Main Content
  const title = searchParams.get('title') || 'Playing beer pong at a house party in Sugar House with Sam, Marco, Johnny, and others';
  const mainEmojis = '🍺🏓'; // The beer and paddle
  const longDescription = searchParams.get('description') || 'Aiden is playing beer pong at a house party in Sugar House with Sam, Marco, Johnny, and others late Saturday night. The game is competitive and intense, with players celebrating shots and talking trash between rounds while music plays in the background.';

  // Footer / Reactions
  const reactions = ['🌿', '💨', '👻']; // The icons in the circles

  // ==========================================
  // 2. RENDER
  // ==========================================

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: hexColor,
          padding: '60px', // Increased padding for OG size
          fontFamily: 'sans-serif',
          justifyContent: 'space-between',
        }}
      >
        {/* --- HEADER ROW --- */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: textColor, fontSize: 28, fontWeight: 600 }}>
          
          {/* Left: Time & Weather */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Clock Icon (CSS Circle approximation or Emoji) */}
              <span>🕒 {time}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{weatherPair.icon} {weatherPair.temp}</span>
            </div>
          </div>

          {/* Right: Battery & Location */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🔋 {batteryLevel}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>📍 {location}</span>
            </div>
          </div>
        </div>

        {/* --- BODY CONTENT --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '20px' }}>
          
          {/* Title & Floating Emojis */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ 
              fontSize: 48, 
              fontWeight: 900, 
              color: textColor, 
              lineHeight: 1.1,
              maxWidth: '80%' 
            }}>
              {title}
            </div>
            <div style={{ fontSize: 80 }}>
              {mainEmojis}
            </div>
          </div>

          {/* Long Description */}
          <div style={{ 
            fontSize: 32, 
            color: secondaryTextColor, 
            lineHeight: 1.4,
            fontWeight: 400
          }}>
            {longDescription}
          </div>
        </div>

        {/* --- FOOTER / ACTIONS --- */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: 'auto' }}>
          
          {/* Comment Pill */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '15px 30px', 
            backgroundColor: pillColor, 
            borderRadius: '50px',
            color: textColor,
            fontSize: 28,
            fontWeight: 600,
            gap: '10px'
          }}>
            <span>💬</span>
            <span>Comment</span>
          </div>

          {/* Reaction Circles */}
          {reactions.map((r, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: pillColor,
              fontSize: 40
            }}>
              {r}
            </div>
          ))}

          {/* Add Button */}
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: pillColor,
              color: textColor,
              fontSize: 40,
              fontWeight: 'bold'
            }}>
              +
            </div>

        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}