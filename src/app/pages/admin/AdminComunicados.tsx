import { useState } from 'react';
import { Plus, Megaphone, ChevronRight, Bell, AlertTriangle, Info } from 'lucide-react';
import { HeroBanner } from '../../components/HeroBanner';
import { Brandmark } from '../../components/Brandmark';

const comunicados = [
  {
    id: 1,
    titulo: 'Mantenimiento de alberca',
    cuerpo: 'La alberca estará cerrada por mantenimiento del 25 al 27 de octubre. Disculpen los inconvenientes.',
    fecha: '22 Oct 2023',
    tipo: 'aviso',
    leidos: 18,
    total: 24,
  },
  {
    id: 2,
    titulo: 'Asamblea de vecinos',
    cuerpo: 'Se convoca a asamblea ordinaria el próximo sábado 28 de octubre a las 10:00 hrs en el salón de usos múltiples.',
    fecha: '20 Oct 2023',
    tipo: 'importante',
    leidos: 24,
    total: 24,
  },
  {
    id: 3,
    titulo: 'Recordatorio de cuotas',
    cuerpo: 'Las cuotas de mantenimiento de octubre vencen el día 5. Evita recargos realizando tu pago a tiempo.',
    fecha: '3 Oct 2023',
    tipo: 'alerta',
    leidos: 22,
    total: 24,
  },
  {
    id: 4,
    titulo: 'Bienvenida a nuevos residentes',
    cuerpo: 'Damos la bienvenida a la familia Rodríguez que se integra a nuestra comunidad en la Casa 11.',
    fecha: '1 Oct 2023',
    tipo: 'aviso',
    leidos: 20,
    total: 24,
  },
  {
    id: 5,
    titulo: 'Corte de agua programado',
    cuerpo: 'El miércoles 18 de octubre habrá corte de agua de 08:00 a 14:00 hrs por mantenimiento de la red.',
    fecha: '15 Oct 2023',
    tipo: 'alerta',
    leidos: 21,
    total: 24,
  },
];

const tipoConfig = {
  aviso: { icon: Info, color: '#3483FA', bg: '#EFF6FF' },
  importante: { icon: Bell, color: '#23C1DA', bg: '#F0FDFA' },
  alerta: { icon: AlertTriangle, color: '#D97706', bg: '#FEF3C7' },
};

export default function AdminComunicados() {
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

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
              Comunicados
            </h2>
            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 14,
                color: '#9CA3AF',
                margin: '2px 0 0',
              }}
            >
              Avisos y noticias de la comunidad
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
          <button
            onClick={() => setShowModal(true)}
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
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
          >
            <Plus size={16} />
            Nuevo comunicado
          </button>
        </div>

        {/* Comunicados list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {comunicados.map(c => {
            const config = tipoConfig[c.tipo as keyof typeof tipoConfig];
            const Icon = config.icon;
            const pctLeidos = Math.round((c.leidos / c.total) * 100);

            return (
              <div
                key={c.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 16,
                  border: '1px solid #E5E7EB',
                  padding: '20px',
                  transition: 'box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
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
                    }}
                  >
                    <Icon size={20} color={config.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4
                        style={{
                          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          color: '#000000',
                          margin: 0,
                        }}
                      >
                        {c.titulo}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span
                          style={{
                            fontSize: 12,
                            color: '#9CA3AF',
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          }}
                        >
                          {c.fecha}
                        </span>
                        <ChevronRight size={14} color="#9CA3AF" />
                      </div>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        fontSize: 13,
                        color: '#6B7280',
                        margin: '6px 0 12px',
                        lineHeight: 1.5,
                      }}
                    >
                      {c.cuerpo}
                    </p>
                    {/* Read progress */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          flex: 1,
                          height: 4,
                          background: '#F3F4F6',
                          borderRadius: 2,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${pctLeidos}%`,
                            background: '#23C1DA',
                            borderRadius: 2,
                            transition: 'width 0.5s ease',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: 11,
                          color: '#9CA3AF',
                          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {c.leidos}/{c.total} leídos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 20,
              padding: '32px',
              width: '100%',
              maxWidth: 480,
              margin: '0 16px',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <Megaphone size={20} color="#000000" />
              <h3
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#000000',
                  margin: 0,
                }}
              >
                Nuevo Comunicado
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input
                type="text"
                placeholder="Título del comunicado"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                style={{
                  width: '100%',
                  background: '#F3F4F6',
                  border: '1px solid transparent',
                  borderRadius: 12,
                  padding: '13px 16px',
                  fontSize: 14,
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
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
              <textarea
                placeholder="Contenido del comunicado..."
                value={newBody}
                onChange={e => setNewBody(e.target.value)}
                rows={4}
                style={{
                  width: '100%',
                  background: '#F3F4F6',
                  border: '1px solid transparent',
                  borderRadius: 12,
                  padding: '13px 16px',
                  fontSize: 14,
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  outline: 'none',
                  resize: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
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
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    flex: 1,
                    background: '#FFFFFF',
                    color: '#000000',
                    border: '1px solid #D1D5DB',
                    borderRadius: 12,
                    padding: '13px 24px',
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = '#9CA3AF')}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = '#D1D5DB')}
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    flex: 1,
                    background: '#000000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: 12,
                    padding: '13px 24px',
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
                >
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
