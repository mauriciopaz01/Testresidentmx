import { useState } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { HeroBanner } from '../../components/HeroBanner';
import { Brandmark } from '../../components/Brandmark';
import { StatCard } from '../../components/StatCard';

const reservaciones = [
  { id: 1, area: 'Cancha de tenis', residente: 'Mauricio García', fecha: '30 Sep 2023', hora: '10:00 - 12:00', estado: 'Pendiente' },
  { id: 2, area: 'Alberca', residente: 'Ana Martínez', fecha: '31 Ago 2023', hora: '09:00 - 11:00', estado: 'Aprobado' },
  { id: 3, area: 'Salón de fiestas', residente: 'Carlos López', fecha: '31 Ago 2023', hora: '15:00 - 22:00', estado: 'Aprobado' },
  { id: 4, area: 'Gimnasio', residente: 'Sofía Hernández', fecha: '15 Oct 2023', hora: '07:00 - 09:00', estado: 'Rechazado' },
  { id: 5, area: 'Sala de juegos', residente: 'Roberto Silva', fecha: '20 Oct 2023', hora: '16:00 - 18:00', estado: 'Pendiente' },
  { id: 6, area: 'Cancha de tenis', residente: 'Diego Ramírez', fecha: '22 Oct 2023', hora: '11:00 - 13:00', estado: 'Pendiente' },
];

type Estado = 'Pendiente' | 'Aprobado' | 'Rechazado';

export default function AdminAreasComunes() {
  const [items, setItems] = useState(reservaciones);

  const updateEstado = (id: number, estado: Estado) => {
    setItems(prev => prev.map(r => (r.id === id ? { ...r, estado } : r)));
  };

  const estadoBadge = (estado: string) => {
    const map: Record<string, { bg: string; color: string; icon: JSX.Element }> = {
      Pendiente: { bg: '#FEF3C7', color: '#D97706', icon: <Clock size={12} /> },
      Aprobado: { bg: '#D1FAE5', color: '#059669', icon: <CheckCircle size={12} /> },
      Rechazado: { bg: '#FEE2E2', color: '#DC2626', icon: <XCircle size={12} /> },
    };
    const c = map[estado] || { bg: '#F3F4F6', color: '#6B7280', icon: null };
    return (
      <span
        style={{
          background: c.bg,
          color: c.color,
          fontSize: 11,
          fontWeight: 700,
          padding: '3px 10px',
          borderRadius: 20,
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {c.icon}
        {estado}
      </span>
    );
  };

  const pendientes = items.filter(r => r.estado === 'Pendiente').length;
  const aprobados = items.filter(r => r.estado === 'Aprobado').length;
  const rechazados = items.filter(r => r.estado === 'Rechazado').length;

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh' }}>
      <HeroBanner />
      <div style={{ background: '#FFFFFF', padding: '0 24px 20px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: -32 }}>
          <Brandmark size={72} />
          <div>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: '#000000',
                margin: 0,
              }}
            >
              Áreas Comunes
            </h2>
            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 14,
                color: '#9CA3AF',
                margin: '2px 0 0',
              }}
            >
              Gestión de reservaciones
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          <StatCard value={items.length} label="Total Solicitudes" />
          <StatCard value={pendientes} label="Pendientes" />
          <StatCard value={aprobados} label="Aprobadas" />
          <StatCard value={rechazados} label="Rechazadas" />
        </div>

        {/* Table */}
        <div style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #E5E7EB' }}>
            <h3
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: '#000000',
                margin: 0,
              }}
            >
              Solicitudes de reservación
            </h3>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['ÁREA', 'RESIDENTE', 'FECHA', 'HORARIO', 'ESTADO', 'ACCIONES'].map(h => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '12px 20px',
                      background: '#F9FAFB',
                      borderBottom: '1px solid #E5E7EB',
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: 11,
                      color: '#6B7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((r) => (
                <tr
                  key={r.id}
                  style={{ transition: 'background 0.2s ease' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#F9FAFB')}
                  onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}
                >
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000' }}>
                    {r.area}
                  </td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#6B7280' }}>
                    {r.residente}
                  </td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000' }}>
                    {r.fecha}
                  </td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#6B7280' }}>
                    {r.hora}
                  </td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6' }}>
                    {estadoBadge(r.estado)}
                  </td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6' }}>
                    {r.estado === 'Pendiente' && (
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button
                          onClick={() => updateEstado(r.id, 'Aprobado')}
                          style={{
                            background: '#D1FAE5',
                            color: '#059669',
                            border: 'none',
                            borderRadius: 8,
                            padding: '5px 10px',
                            cursor: 'pointer',
                            fontSize: 12,
                            fontWeight: 700,
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            transition: 'opacity 0.3s ease',
                          }}
                          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.8')}
                          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
                        >
                          <CheckCircle size={12} /> Aprobar
                        </button>
                        <button
                          onClick={() => updateEstado(r.id, 'Rechazado')}
                          style={{
                            background: '#FEE2E2',
                            color: '#DC2626',
                            border: 'none',
                            borderRadius: 8,
                            padding: '5px 10px',
                            cursor: 'pointer',
                            fontSize: 12,
                            fontWeight: 700,
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            transition: 'opacity 0.3s ease',
                          }}
                          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.8')}
                          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
                        >
                          <XCircle size={12} /> Rechazar
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
