import { useState } from 'react';
import { Menu, Home, Users, MapPin, CreditCard, QrCode, ChevronRight, Phone } from 'lucide-react';

const featureCards = [
  { icon: Home, label: 'Mi Hogar', sub: 'Administra tu hogar' },
  { icon: Users, label: 'Visitantes', sub: 'Registro de acceso' },
  { icon: MapPin, label: 'Áreas Comunes', sub: 'Consulta y reserva' },
  { icon: CreditCard, label: 'Cuotas', sub: 'Revisa tus pagos' },
];

export default function ResidentInicio() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100%' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 20px',
          position: 'relative',
        }}
      >
        <button
          style={{
            position: 'absolute',
            left: 20,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            display: 'flex',
          }}
        >
          <Menu size={22} color="#000000" />
        </button>
        <span
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: '#000000',
          }}
        >
          Inicio
        </span>
      </div>

      {/* Greeting */}
      <div style={{ padding: '8px 20px 16px' }}>
        <h1
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 24,
            color: '#000000',
            margin: '0 0 4px',
          }}
        >
          👋 ¡Hola, Mauricio!
        </h1>
        <p
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 14,
            color: '#6B7280',
            margin: 0,
          }}
        >
          Estás haciendo un gran trabajo al mantener tu hogar en orden.
        </p>
      </div>

      <div style={{ height: 1, background: '#F3F4F6', margin: '0 20px' }} />

      {/* Feature grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 10,
          padding: '16px 20px',
        }}
      >
        {featureCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <button
              key={i}
              style={{
                background: '#F5F5F5',
                borderRadius: 16,
                padding: '24px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s ease, transform 0.1s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#EBEBEB';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#F5F5F5';
              }}
              onMouseDown={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.97)';
              }}
              onMouseUp={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
              }}
            >
              <Icon size={32} color="#000000" />
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: '#000000',
                  }}
                >
                  {card.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 12,
                    color: '#9CA3AF',
                    marginTop: 2,
                  }}
                >
                  {card.sub}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* QR CTA */}
      <div style={{ padding: '0 20px 12px' }}>
        <button
          onClick={() => setShowQR(true)}
          style={{
            width: '100%',
            background: '#1F1F1F',
            borderRadius: 16,
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.3s ease, transform 0.1s ease',
            boxSizing: 'border-box',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = '#2A2A2A';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = '#1F1F1F';
          }}
          onMouseDown={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.98)';
          }}
          onMouseUp={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
          }}
        >
          <QrCode size={48} color="#FFFFFF" />
          <span
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: '#FFFFFF',
            }}
          >
            Generar QR de Acceso
          </span>
        </button>
      </div>

      {/* Pre-auth */}
      <div style={{ height: 1, background: '#E5E7EB', margin: '0 20px' }} />
      <div
        style={{
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = '#F9FAFB')}
        onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}
      >
        <div>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: '#000000',
            }}
          >
            Pre-autorización activa
          </div>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 13,
              color: '#6B7280',
              marginTop: 2,
            }}
          >
            Empresa: Uber
          </div>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 13,
              color: '#6B7280',
            }}
          >
            Nombre: Mauricio
          </div>
        </div>
        <ChevronRight size={20} color="#9CA3AF" />
      </div>
      <div style={{ height: 1, background: '#E5E7EB', margin: '0 20px' }} />

      {/* Call security button */}
      <div style={{ padding: '12px 20px 20px' }}>
        <button
          style={{
            width: '100%',
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 14,
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            boxSizing: 'border-box',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#F9FAFB')}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#FFFFFF')}
        >
          <Phone size={18} color="#6B7280" />
          <span
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 15,
              color: '#6B7280',
            }}
          >
            Llamar a caseta de vigilancia
          </span>
        </button>
      </div>

      {/* QR Modal */}
      {showQR && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 300,
          }}
          onClick={() => setShowQR(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 24,
              padding: '32px 24px',
              width: '100%',
              maxWidth: 340,
              margin: '0 16px',
              textAlign: 'center',
            }}
            onClick={e => e.stopPropagation()}
          >
            <h3
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: '#000000',
                marginBottom: 20,
              }}
            >
              Tu código QR de acceso
            </h3>
            {/* Simulated QR */}
            <div
              style={{
                width: 180,
                height: 180,
                margin: '0 auto 20px',
                background: '#000000',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <QrCode size={140} color="#FFFFFF" />
            </div>
            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 13,
                color: '#6B7280',
                marginBottom: 20,
              }}
            >
              Muestra este código al vigilante para acceder a la comunidad
            </p>
            <div
              style={{
                background: '#D1FAE5',
                color: '#059669',
                padding: '6px 16px',
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                display: 'inline-block',
                marginBottom: 20,
              }}
            >
              ✓ Vigente hasta las 23:59
            </div>
            <button
              onClick={() => setShowQR(false)}
              style={{
                width: '100%',
                background: '#000000',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 12,
                padding: '14px',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
