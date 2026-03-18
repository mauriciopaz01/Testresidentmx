const HERO_BG = 'https://images.unsplash.com/photo-1673977597041-7e6512719d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzczODEwMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080';

interface HeroBannerProps {
  height?: number;
}

export function HeroBanner({ height = 180 }: HeroBannerProps) {
  return (
    <div
      style={{
        height,
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%)',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: '-0.5px',
          }}
        >
          Resident.mx
        </span>
      </div>
    </div>
  );
}
