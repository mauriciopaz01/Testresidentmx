import { useState } from 'react';
import { Search, UserPlus, MoreHorizontal } from 'lucide-react';
import { HeroBanner } from '../../components/HeroBanner';
import { Brandmark } from '../../components/Brandmark';

const users = [
  { name: 'Mauricio García', email: 'mauricio@email.com', residencia: 'Casa 12', cuota: 'Al corriente', rol: 'Residente' },
  { name: 'Ana Martínez', email: 'ana.m@email.com', residencia: 'Casa 8', cuota: 'Vencida', rol: 'Residente' },
  { name: 'Carlos López', email: 'carlos.l@email.com', residencia: 'Casa 3', cuota: 'Al corriente', rol: 'Residente' },
  { name: 'Sofía Hernández', email: 'sofia.h@email.com', residencia: 'Casa 21', cuota: 'Al corriente', rol: 'Residente' },
  { name: 'Roberto Silva', email: 'r.silva@email.com', residencia: 'Casa 5', cuota: 'Vencida', rol: 'Residente' },
  { name: 'Patricia Núñez', email: 'p.nunez@email.com', residencia: 'Casa 17', cuota: 'Al corriente', rol: 'Residente' },
  { name: 'Diego Ramírez', email: 'diego.r@email.com', residencia: 'Casa 9', cuota: 'Al corriente', rol: 'Residente' },
  { name: 'Laura Flores', email: 'laura.f@email.com', residencia: 'Casa 14', cuota: 'Pendiente', rol: 'Residente' },
];

export default function AdminUsuarios() {
  const [search, setSearch] = useState('');

  const filtered = users.filter(
    u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.residencia.toLowerCase().includes(search.toLowerCase()),
  );

  const cuotaBadge = (estado: string) => {
    const map: Record<string, { bg: string; color: string }> = {
      'Al corriente': { bg: '#D1FAE5', color: '#059669' },
      Vencida: { bg: '#FEE2E2', color: '#DC2626' },
      Pendiente: { bg: '#FEF3C7', color: '#D97706' },
    };
    const c = map[estado] || { bg: '#F3F4F6', color: '#6B7280' };
    return (
      <span
        style={{
          background: c.bg,
          color: c.color,
          fontSize: 11,
          fontWeight: 700,
          padding: '3px 8px',
          borderRadius: 20,
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
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
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: '#000000',
                margin: 0,
              }}
            >
              Usuarios
            </h2>
            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 14,
                color: '#9CA3AF',
                margin: '2px 0 0',
              }}
            >
              Gestión de residentes
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Actions bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
            gap: 12,
          }}
        >
          <div style={{ position: 'relative', flex: 1, maxWidth: 360 }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9CA3AF',
              }}
            />
            <input
              type="text"
              placeholder="Buscar usuarios..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: 40,
                paddingRight: 16,
                paddingTop: 10,
                paddingBottom: 10,
                background: '#F3F4F6',
                border: '1px solid transparent',
                borderRadius: 10,
                fontSize: 14,
                color: '#000000',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                outline: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = '#23C1DA';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(35,193,218,0.15)';
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: '#000000',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 10,
              padding: '10px 16px',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              transition: 'opacity 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
          >
            <UserPlus size={16} />
            Agregar usuario
          </button>
        </div>

        {/* Table */}
        <div style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['NOMBRE', 'CORREO', 'RESIDENCIA', 'CUOTA', 'ROL', ''].map(h => (
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
              {filtered.map((u, i) => (
                <tr
                  key={i}
                  style={{ transition: 'background 0.2s ease', cursor: 'pointer' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#F9FAFB')}
                  onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}
                >
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: '#F0FDFA',
                          border: '1px solid #23C1DA',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: 13,
                          color: '#23C1DA',
                          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          flexShrink: 0,
                        }}
                      >
                        {u.name.charAt(0)}
                      </div>
                      <span
                        style={{
                          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          color: '#000000',
                        }}
                      >
                        {u.name}
                      </span>
                    </div>
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
                    {u.email}
                  </td>
                  <td
                    style={{
                      padding: '14px 20px',
                      borderBottom: '1px solid #F3F4F6',
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: 14,
                      color: '#000000',
                    }}
                  >
                    {u.residencia}
                  </td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6' }}>
                    {cuotaBadge(u.cuota)}
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
                    {u.rol}
                  </td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6' }}>
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#9CA3AF',
                        display: 'flex',
                        padding: 4,
                        borderRadius: 6,
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#000000')}
                      onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#9CA3AF')}
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div
              style={{
                padding: '40px',
                textAlign: 'center',
                color: '#9CA3AF',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 14,
              }}
            >
              No se encontraron usuarios
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
