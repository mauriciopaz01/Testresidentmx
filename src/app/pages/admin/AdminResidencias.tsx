import { Home, Users } from 'lucide-react';
import { HeroBanner } from '../../components/HeroBanner';
import { Brandmark } from '../../components/Brandmark';
import { StatCard } from '../../components/StatCard';

const residencias = [
  { numero: 'Casa 1', propietario: 'Juan Pérez', superficie: '180 m²', estado: 'Ocupada', cuota: '$2,500' },
  { numero: 'Casa 2', propietario: 'María López', superficie: '210 m²', estado: 'Ocupada', cuota: '$2,800' },
  { numero: 'Casa 3', propietario: 'Carlos López', superficie: '165 m²', estado: 'Ocupada', cuota: '$2,300' },
  { numero: 'Casa 4', propietario: '—', superficie: '195 m²', estado: 'Disponible', cuota: '$2,600' },
  { numero: 'Casa 5', propietario: 'Roberto Silva', superficie: '220 m²', estado: 'Ocupada', cuota: '$2,900' },
  { numero: 'Casa 6', propietario: '—', superficie: '180 m²', estado: 'En Renta', cuota: '$2,500' },
  { numero: 'Casa 7', propietario: 'Laura Flores', superficie: '175 m²', estado: 'Ocupada', cuota: '$2,400' },
  { numero: 'Casa 8', propietario: 'Ana Martínez', superficie: '200 m²', estado: 'Ocupada', cuota: '$2,700' },
];

export default function AdminResidencias() {
  const estadoBadge = (estado: string) => {
    const map: Record<string, { bg: string; color: string }> = {
      Ocupada: { bg: '#D1FAE5', color: '#059669' },
      Disponible: { bg: '#EFF6FF', color: '#3483FA' },
      'En Renta': { bg: '#FEF3C7', color: '#D97706' },
    };
    const c = map[estado] || { bg: '#F3F4F6', color: '#6B7280' };
    return (
      <span style={{ background: c.bg, color: c.color, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        {estado}
      </span>
    );
  };

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh' }}>
      <HeroBanner />
      <div style={{ background: '#FFFFFF', padding: '0 24px 20px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: -32 }}>
          <Brandmark size={72} />
          <div>
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 18, color: '#000000', margin: 0 }}>Residencias</h2>
            <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#9CA3AF', margin: '2px 0 0' }}>Gestión de propiedades</p>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          <StatCard value="24" label="Total Residencias" />
          <StatCard value="20" label="Ocupadas" />
          <StatCard value="2" label="Disponibles" />
          <StatCard value="2" label="En Renta" />
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['NÚMERO', 'PROPIETARIO', 'SUPERFICIE', 'CUOTA', 'ESTADO'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '12px 20px', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {residencias.map((r, i) => (
                <tr key={i}
                  style={{ transition: 'background 0.2s ease', cursor: 'pointer' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#F9FAFB')}
                  onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}
                >
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Home size={16} color="#23C1DA" />
                      <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000' }}>{r.numero}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: r.propietario === '—' ? '#9CA3AF' : '#000000' }}>{r.propietario}</td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#6B7280' }}>{r.superficie}</td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000' }}>{r.cuota}</td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6' }}>{estadoBadge(r.estado)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
