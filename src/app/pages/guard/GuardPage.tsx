import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Menu, Check, ArrowLeft, Image, ScanLine, Search, LogOut } from 'lucide-react';

const HERO_BG =
  'https://images.unsplash.com/photo-1673977597041-7e6512719d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzczODEwMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080';

type GuardView = 'main' | 'access' | 'scanner';

export default function GuardPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<GuardView>('main');
  const [registered, setRegistered] = useState(false);

  const visitantes = [
    { empresa: 'Uber Eats', nombre: 'Mario Gómez', residencia: 'Avenida del Sol 123', vigente: true, expiracion: '4 de septiembre de 2023, 12:00' },
    { empresa: 'Amazon', nombre: 'Luis Sánchez', residencia: 'Casa 8', vigente: true, expiracion: '4 de septiembre de 2023, 18:00' },
    { empresa: 'Rappi', nombre: 'Ana González', residencia: 'Casa 15', vigente: false, expiracion: '3 de septiembre de 2023, 20:00' },
  ];

  const [selectedVisitante, setSelectedVisitante] = useState(visitantes[0]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#1A1A1A',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '20px 16px',
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: '100%',
          maxWidth: 390,
          minHeight: 'calc(100vh - 40px)',
          background: '#FFFFFF',
          borderRadius: 32,
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
          position: 'relative',
        }}
      >
        {view === 'main' && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Hero banner */}
            <div
              style={{
                height: 140,
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
                  background: 'rgba(0,0,0,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                }}
              >
                <button
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}
                >
                  <Menu size={22} color="#FFFFFF" />
                </button>
                <span
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: '#FFFFFF',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Resident.mx
                </span>
                <button
                  onClick={() => navigate('/')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}
                  title="Salir"
                >
                  <LogOut size={18} color="rgba(255,255,255,0.7)" />
                </button>
              </div>
            </div>

            {/* Guard profile */}
            <div style={{ padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid #E5E7EB',
                  flexShrink: 0,
                }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
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
                  Mauricio Vigilante
                </h2>
                <p
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 14,
                    color: '#9CA3AF',
                    margin: '2px 0 0',
                  }}
                >
                  En turno
                </p>
              </div>
            </div>

            {/* Quick actions */}
            <div style={{ padding: '16px 20px', display: 'flex', gap: 10 }}>
              <button
                onClick={() => setView('scanner')}
                style={{
                  flex: 1,
                  background: '#000000',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 12,
                  padding: '12px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
              >
                <ScanLine size={18} />
                Escanear QR
              </button>
              <button
                style={{
                  flex: 1,
                  background: '#F3F4F6',
                  color: '#000000',
                  border: 'none',
                  borderRadius: 12,
                  padding: '12px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#E5E7EB')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#F3F4F6')}
              >
                <Search size={18} />
                Buscar
              </button>
            </div>

            {/* Visitors list */}
            <div style={{ padding: '0 20px 24px' }}>
              <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, color: '#000000', marginBottom: 12 }}>
                Visitas pendientes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {visitantes.map((v, i) => (
                  <div
                    key={i}
                    onClick={() => { setSelectedVisitante(v); setView('access'); setRegistered(false); }}
                    style={{
                      border: `1px solid ${v.vigente ? '#E0F2F1' : '#FEE2E2'}`,
                      borderRadius: 14,
                      padding: '14px 16px',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.3s ease',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = 'none')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000' }}>
                          {v.nombre}
                        </div>
                        <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 12, color: '#6B7280' }}>
                          {v.empresa} · {v.residencia}
                        </div>
                      </div>
                      <span style={{
                        background: v.vigente ? '#D1FAE5' : '#FEE2E2',
                        color: v.vigente ? '#059669' : '#DC2626',
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: 20,
                        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                      }}>
                        {v.vigente ? <Check size={10} /> : null}
                        {v.vigente ? 'Vigente' : 'Expirado'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {view === 'access' && (
          <motion.div
            key="access"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Hero banner */}
            <div
              style={{
                height: 120,
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
                  background: 'rgba(0,0,0,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 22, color: '#FFFFFF' }}>
                  Resident.mx
                </span>
              </div>
            </div>

            {/* Guard profile */}
            <div style={{ padding: '12px 20px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid #E5E7EB' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 16, color: '#000000' }}>Mauricio Vigilante</div>
                <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 13, color: '#9CA3AF' }}>En turno</div>
              </div>
            </div>

            <div style={{ padding: '16px 20px' }}>
              {/* Access code card */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 16,
                  padding: '20px',
                  marginBottom: 16,
                }}
              >
                <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 16, color: '#000000', marginBottom: 16 }}>
                  Código de acceso válido
                </h3>
                {[
                  { label: 'Empresa', value: selectedVisitante.empresa },
                  { label: 'Nombre', value: selectedVisitante.nombre },
                  { label: 'Residencia', value: selectedVisitante.residencia },
                  {
                    label: 'Vigente',
                    value: selectedVisitante.vigente ? <Check size={18} color="#23C1DA" /> : 'No',
                  },
                  { label: 'Fecha de expiración', value: selectedVisitante.expiracion },
                ].map((row, i, arr) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: 12,
                      paddingBottom: 12,
                      borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none',
                    }}
                  >
                    <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#9CA3AF' }}>{row.label}</span>
                    <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000', textAlign: 'right', maxWidth: '60%' }}>{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Register access */}
              {!registered ? (
                <button
                  onClick={() => setRegistered(true)}
                  style={{
                    width: '100%',
                    background: '#000000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: 12,
                    padding: '15px',
                    cursor: 'pointer',
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    marginBottom: 12,
                    transition: 'opacity 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
                >
                  Registrar acceso
                </button>
              ) : (
                <div
                  style={{
                    width: '100%',
                    background: '#D1FAE5',
                    color: '#059669',
                    borderRadius: 12,
                    padding: '15px',
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    marginBottom: 12,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    boxSizing: 'border-box',
                  }}
                >
                  <Check size={18} />
                  Acceso registrado
                </div>
              )}

              {/* Upload ID */}
              <div style={{ marginBottom: 12 }}>
                <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000', marginBottom: 8 }}>
                  Toma una foto de la identificación del visitante
                </p>
                <div
                  style={{
                    background: '#F3F4F6',
                    borderRadius: 12,
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer',
                  }}
                >
                  <Image size={20} color="#9CA3AF" />
                  <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#9CA3AF' }}>
                    Elige una imagen...
                  </span>
                </div>
              </div>

              {/* Volver */}
              <button
                onClick={() => setView('main')}
                style={{
                  width: '100%',
                  background: '#000000',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 12,
                  padding: '15px',
                  cursor: 'pointer',
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'opacity 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
              >
                <ArrowLeft size={18} />
                Volver
              </button>
            </div>
          </motion.div>
        )}

        {view === 'scanner' && (
          <motion.div
            key="scanner"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px' }}
          >
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 20, color: '#000000', marginBottom: 8 }}>
              Escáner QR
            </h2>
            <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#6B7280', marginBottom: 32, textAlign: 'center' }}>
              Apunta la cámara al código QR del visitante
            </p>

            {/* Scanner simulation */}
            <div
              style={{
                width: 240,
                height: 240,
                border: '3px solid #23C1DA',
                borderRadius: 20,
                position: 'relative',
                marginBottom: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#F3F4F6',
              }}
            >
              {/* Corner decorations */}
              {['tl', 'tr', 'bl', 'br'].map(pos => (
                <div key={pos} style={{
                  position: 'absolute',
                  width: 24,
                  height: 24,
                  borderColor: '#23C1DA',
                  borderStyle: 'solid',
                  borderWidth: 0,
                  ...(pos === 'tl' ? { top: -3, left: -3, borderTopWidth: 4, borderLeftWidth: 4, borderRadius: '4px 0 0 0' } : {}),
                  ...(pos === 'tr' ? { top: -3, right: -3, borderTopWidth: 4, borderRightWidth: 4, borderRadius: '0 4px 0 0' } : {}),
                  ...(pos === 'bl' ? { bottom: -3, left: -3, borderBottomWidth: 4, borderLeftWidth: 4, borderRadius: '0 0 0 4px' } : {}),
                  ...(pos === 'br' ? { bottom: -3, right: -3, borderBottomWidth: 4, borderRightWidth: 4, borderRadius: '0 0 4px 0' } : {}),
                }} />
              ))}
              <ScanLine size={80} color="#D1D5DB" />
            </div>

            <button
              onClick={() => setView('main')}
              style={{
                width: '100%',
                background: '#000000',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 12,
                padding: '15px',
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                boxSizing: 'border-box',
              }}
            >
              <ArrowLeft size={18} />
              Cancelar
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
