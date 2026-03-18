import { useState } from 'react';
import { MapPin, Clock, Users, CheckCircle } from 'lucide-react';

const areas = [
  { id: 1, nombre: 'Alberca', capacidad: '20 personas', horario: '07:00 - 21:00', disponible: true, imagen: '🏊' },
  { id: 2, nombre: 'Cancha de Tenis', capacidad: '4 personas', horario: '06:00 - 22:00', disponible: true, imagen: '🎾' },
  { id: 3, nombre: 'Salón de Fiestas', capacidad: '80 personas', horario: '10:00 - 23:00', disponible: false, imagen: '🎉' },
  { id: 4, nombre: 'Gimnasio', capacidad: '15 personas', horario: '05:00 - 23:00', disponible: true, imagen: '🏋️' },
  { id: 5, nombre: 'Sala de Juegos', capacidad: '10 personas', horario: '09:00 - 20:00', disponible: true, imagen: '🎮' },
];

export default function ResidentReservaciones() {
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleReservar = (id: number) => {
    setSelected(id);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setConfirmed(selected);
    setShowModal(false);
    setSelected(null);
  };

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #F3F4F6' }}>
        <h1 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 22, color: '#000000', margin: 0 }}>
          Áreas Comunes
        </h1>
        <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 13, color: '#6B7280', margin: '4px 0 0' }}>
          Reserva instalaciones de la comunidad
        </p>
      </div>

      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {areas.map(area => (
          <div
            key={area.id}
            style={{
              border: confirmed === area.id ? '2px solid #23C1DA' : '1px solid #E5E7EB',
              borderRadius: 16,
              padding: '16px',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  background: '#F5F5F5',
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 26,
                  flexShrink: 0,
                }}
              >
                {area.imagen}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h4 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, color: '#000000', margin: 0 }}>
                    {area.nombre}
                  </h4>
                  {confirmed === area.id ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#D1FAE5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                      <CheckCircle size={12} /> Reservada
                    </span>
                  ) : (
                    <span
                      style={{
                        background: area.disponible ? '#D1FAE5' : '#F3F4F6',
                        color: area.disponible ? '#059669' : '#9CA3AF',
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: 20,
                        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {area.disponible ? 'Disponible' : 'Ocupada'}
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    <Users size={12} /> {area.capacidad}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    <Clock size={12} /> {area.horario}
                  </span>
                </div>
              </div>
            </div>
            {area.disponible && confirmed !== area.id && (
              <button
                onClick={() => handleReservar(area.id)}
                style={{
                  width: '100%',
                  marginTop: 12,
                  background: '#000000',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  transition: 'opacity 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
              >
                Reservar
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selected && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 300 }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{ background: '#FFFFFF', borderRadius: '24px 24px 0 0', padding: '24px', width: '100%', maxWidth: 390 }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ width: 40, height: 4, background: '#E5E7EB', borderRadius: 2, margin: '0 auto 20px' }} />
            <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 18, color: '#000000', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <MapPin size={20} color="#23C1DA" />
              {areas.find(a => a.id === selected)?.nombre}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <label style={{ display: 'block' }}>
                <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 12, color: '#6B7280', display: 'block', marginBottom: 6 }}>Fecha</span>
                <input type="date" style={{ width: '100%', background: '#F3F4F6', border: '1px solid transparent', borderRadius: 12, padding: '12px 16px', fontSize: 14, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", outline: 'none', boxSizing: 'border-box' }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#23C1DA'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(35,193,218,0.15)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </label>
              <label style={{ display: 'block' }}>
                <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 12, color: '#6B7280', display: 'block', marginBottom: 6 }}>Hora de inicio</span>
                <input type="time" style={{ width: '100%', background: '#F3F4F6', border: '1px solid transparent', borderRadius: 12, padding: '12px 16px', fontSize: 14, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", outline: 'none', boxSizing: 'border-box' }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#23C1DA'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(35,193,218,0.15)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </label>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <button
                onClick={() => setShowModal(false)}
                style={{ flex: 1, background: '#FFFFFF', color: '#000000', border: '1px solid #D1D5DB', borderRadius: 12, padding: '13px', cursor: 'pointer', fontSize: 14, fontWeight: 700, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                style={{ flex: 1, background: '#000000', color: '#FFFFFF', border: 'none', borderRadius: 12, padding: '13px', cursor: 'pointer', fontSize: 14, fontWeight: 700, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
