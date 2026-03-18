import { Home, MessageSquare } from 'lucide-react';

interface BrandmarkProps {
  size?: number;
}

export function Brandmark({ size = 64 }: BrandmarkProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: '#000000',
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid #FFFFFF',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <Home size={size * 0.45} color="#FFFFFF" />
      <div
        style={{
          position: 'absolute',
          bottom: size * 0.08,
          right: size * 0.08,
          width: size * 0.3,
          height: size * 0.3,
          background: '#23C1DA',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MessageSquare size={size * 0.16} color="#FFFFFF" />
      </div>
    </div>
  );
}
