import { Bell, HelpCircle, ChevronRight } from 'lucide-react';
import { HeroBanner } from '../../components/HeroBanner';
import { Brandmark } from '../../components/Brandmark';
import { StatCard } from '../../components/StatCard';

const solicitudes = [
  { area: 'Cancha de tenis', fecha: '30 de septiembre, 2023', estado: 'Pendiente' },
  { area: 'Alberca', fecha: '31 de agosto, 2023', estado: 'Pendiente' },
  { area: 'Salón de fiestas', fecha: '31 de agosto, 2023', estado: 'Aprobado' },
  { area: 'Gimnasio', fecha: '15 de octubre, 2023', estado: 'Rechazado' },
  { area: 'Sala de juegos', fecha: '20 de octubre, 2023', estado: 'Pendiente' },
];

const estadoBadge = (estado: string) => {
  const colors: Record<string, { bg: string; color: string }> = {
    Pendiente: { bg: '#FEF3C7', color: '#D97706' },
    Aprobado: { bg: '#D1FAE5', color: '#059669' },
    Rechazado: { bg: '#FEE2E2', color: '#DC2626' },
  };
  const c = colors[estado] || { bg: '#F3F4F6', color: '#6B7280' };
  return (
    <span
      style={{
        background: c.bg,
        color: c.color,
        fontSize: 12,
        fontWeight: 700,
        padding: '3px 10px',
        borderRadius: 20,
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {estado}
    </span>
  );
};

export default function AdminDashboard() {
  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh' }}>
      {/* Notification banner */}
      <div
        style={{
          background: '#23C1DA',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <Bell size={16} color="#FFFFFF" />
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 13,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Habilita notificaciones push para recibir alertas en tiempo real
        </span>
      </div>

      {/* Hero banner */}
      <HeroBanner />

      {/* Profile header */}
      <div
        style={{
          background: '#FFFFFF',
          padding: '0 24px 20px',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
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
              Resident MX Demo
            </h2>
            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: '#9CA3AF',
                margin: '2px 0 0',
              }}
            >
              Portal de Administrador
            </p>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ padding: '24px 24px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
        >
          <StatCard value="3" label="Incidentes" />
          <StatCard value="5" label="Reservas" />
          <StatCard value="8" label="Visitantes" />
          <StatCard value="4" label="Proveedores" />
        </div>
      </div>

      {/* Financial quick view */}
      <div style={{ padding: '24px 24px 0' }}>
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 16,
            border: '1px solid #E5E7EB',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h3
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: '#000000',
                margin: 0,
              }}
            >
              Resumen Financiero — Febrero 2024
            </h3>
            <span style={{ fontSize: 12, color: '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Periodo actual
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
            }}
          >
            {[
              { label: 'Balance del Periodo', value: '$4,000.21', color: '#10B981' },
              { label: 'Total Ingresos', value: '$41,993.88', color: '#23C1DA' },
              { label: 'Total Egresos', value: '$37,993.67', color: '#000000' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '20px',
                  borderRight: i < 2 ? '1px solid #E5E7EB' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: item.color,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 13,
                    color: '#6B7280',
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solicitudes de áreas comunes */}
      <div style={{ padding: '24px' }}>
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 16,
            border: '1px solid #E5E7EB',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h3
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: '#000000',
                margin: 0,
              }}
            >
              Solicitudes de áreas comunes
            </h3>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#23C1DA',
                fontSize: 13,
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              Ver todas <ChevronRight size={14} />
            </button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['ÁREA COMÚN', 'FECHA SOLICITADA', 'ESTADO'].map(h => (
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
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {solicitudes.map((s, i) => (
                <tr
                  key={i}
                  style={{ transition: 'background 0.2s ease', cursor: 'pointer' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#F9FAFB')}
                  onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}
                >
                  <td
                    style={{
                      padding: '14px 20px',
                      borderBottom: '1px solid #F3F4F6',
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: '#000000',
                    }}
                  >
                    {s.area}
                  </td>
                  <td
                    style={{
                      padding: '14px 20px',
                      borderBottom: '1px solid #F3F4F6',
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: 14,
                      color: '#6B7280',
                    }}
                  >
                    {s.fecha}
                  </td>
                  <td
                    style={{
                      padding: '14px 20px',
                      borderBottom: '1px solid #F3F4F6',
                    }}
                  >
                    {estadoBadge(s.estado)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating help button */}
      <div
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 100,
        }}
      >
        <button
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#23C1DA',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(35,193,218,0.4)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            position: 'relative',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(35,193,218,0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(35,193,218,0.4)';
          }}
        >
          <HelpCircle size={22} color="#FFFFFF" />
          <div
            style={{
              position: 'absolute',
              top: -4,
              right: -4,
              width: 18,
              height: 18,
              background: '#EF4444',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              color: '#FFFFFF',
              fontWeight: 700,
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            1
          </div>
        </button>
      </div>
    </div>
  );
}
