import { Bell, AlertTriangle, Info, ChevronRight } from 'lucide-react';

const comunicados = [
  {
    id: 1,
    titulo: 'Mantenimiento de alberca',
    resumen: 'La alberca estará cerrada por mantenimiento del 25 al 27 de octubre.',
    fecha: '22 Oct',
    tipo: 'aviso',
    nuevo: true,
  },
  {
    id: 2,
    titulo: 'Asamblea de vecinos',
    resumen: 'Se convoca a asamblea ordinaria el sábado 28 de octubre a las 10:00 hrs.',
    fecha: '20 Oct',
    tipo: 'importante',
    nuevo: true,
  },
  {
    id: 3,
    titulo: 'Recordatorio de cuotas',
    resumen: 'Las cuotas de mantenimiento de octubre vencen el día 5.',
    fecha: '3 Oct',
    tipo: 'alerta',
    nuevo: false,
  },
  {
    id: 4,
    titulo: 'Bienvenida a nuevos residentes',
    resumen: 'Damos la bienvenida a la familia Rodríguez que se integra en Casa 11.',
    fecha: '1 Oct',
    tipo: 'aviso',
    nuevo: false,
  },
  {
    id: 5,
    titulo: 'Corte de agua programado',
    resumen: 'El miércoles habrá corte de agua de 08:00 a 14:00 hrs.',
    fecha: '15 Oct',
    tipo: 'alerta',
    nuevo: false,
  },
];

const tipoConfig = {
  aviso: { icon: Info, color: '#3483FA', bg: '#EFF6FF' },
  importante: { icon: Bell, color: '#23C1DA', bg: '#F0FDFA' },
  alerta: { icon: AlertTriangle, color: '#D97706', bg: '#FEF3C7' },
};

export default function ResidentComunicados() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #F3F4F6' }}>
        <h1
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 22,
            color: '#000000',
            margin: 0,
          }}
        >
          Comunicados
        </h1>
        <p
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 13,
            color: '#6B7280',
            margin: '4px 0 0',
          }}
        >
          Avisos y noticias de tu comunidad
        </p>
      </div>

      {/* Notification bar */}
      <div
        style={{
          background: '#F0FDFA',
          borderBottom: '2px solid #23C1DA',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Bell size={14} color="#23C1DA" />
        <span
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 12,
            color: '#0EA5C7',
            fontWeight: 700,
          }}
        >
          Tienes 2 comunicados nuevos
        </span>
      </div>

      <div style={{ padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 1 }}>
        {comunicados.map(c => {
          const config = tipoConfig[c.tipo as keyof typeof tipoConfig];
          const Icon = config.icon;
          return (
            <div
              key={c.id}
              style={{
                padding: '14px 0',
                borderBottom: '1px solid #F3F4F6',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                cursor: 'pointer',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.opacity = '0.8')}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.opacity = '1')}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: config.bg,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative',
                }}
              >
                <Icon size={18} color={config.color} />
                {c.nuevo && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -3,
                      right: -3,
                      width: 10,
                      height: 10,
                      background: '#EF4444',
                      borderRadius: '50%',
                      border: '2px solid #FFFFFF',
                    }}
                  />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <h4
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: '#000000',
                      margin: 0,
                    }}
                  >
                    {c.titulo}
                    {c.nuevo && (
                      <span
                        style={{
                          marginLeft: 6,
                          background: '#23C1DA',
                          color: '#FFFFFF',
                          fontSize: 9,
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: 20,
                          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          verticalAlign: 'middle',
                        }}
                      >
                        NUEVO
                      </span>
                    )}
                  </h4>
                  <span
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: 11,
                      color: '#9CA3AF',
                      flexShrink: 0,
                    }}
                  >
                    {c.fecha}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 12,
                    color: '#6B7280',
                    margin: '3px 0 0',
                    lineHeight: 1.4,
                  }}
                >
                  {c.resumen}
                </p>
              </div>
              <ChevronRight size={16} color="#D1D5DB" style={{ flexShrink: 0, marginTop: 2 }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
