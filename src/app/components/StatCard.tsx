import { ReactNode } from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  accent?: boolean;
}

export function StatCard({ value, label, icon, accent }: StatCardProps) {
  return (
    <div
      style={{
        border: `1px solid ${accent ? '#23C1DA' : '#E0F2F1'}`,
        borderRadius: 12,
        padding: 20,
        background: '#FFFFFF',
        textAlign: 'center',
        transition: 'box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {icon && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>{icon}</div>}
      <div
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: 28,
          color: '#000000',
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          color: '#6B7280',
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );
}
