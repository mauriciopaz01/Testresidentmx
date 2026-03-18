import { CheckCircle, Clock, AlertCircle, ChevronRight, CreditCard } from 'lucide-react';

const pagos = [
  { mes: 'Octubre 2023', monto: '$2,500', estado: 'Pagado', fecha: '3 Oct 2023', metodo: 'Transferencia' },
  { mes: 'Septiembre 2023', monto: '$2,500', estado: 'Pagado', fecha: '1 Sep 2023', metodo: 'Tarjeta' },
  { mes: 'Agosto 2023', monto: '$2,500', estado: 'Pagado', fecha: '4 Ago 2023', metodo: 'Transferencia' },
  { mes: 'Julio 2023', monto: '$2,500', estado: 'Pagado', fecha: '2 Jul 2023', metodo: 'Tarjeta' },
];

const estadoConfig = {
  Pagado: { icon: CheckCircle, color: '#059669', bg: '#D1FAE5' },
  Pendiente: { icon: Clock, color: '#D97706', bg: '#FEF3C7' },
  Vencido: { icon: AlertCircle, color: '#DC2626', bg: '#FEE2E2' },
};

export default function ResidentCuotas() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #F3F4F6' }}>
        <h1 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 22, color: '#000000', margin: 0 }}>
          Mis Cuotas
        </h1>
        <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 13, color: '#6B7280', margin: '4px 0 0' }}>
          Historial de pagos de mantenimiento
        </p>
      </div>

      {/* Balance card */}
      <div style={{ padding: '16px 20px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #23C1DA 0%, #0EA5C7 100%)',
            borderRadius: 20,
            padding: '24px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -30, right: 20, width: 80, height: 80, background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }} />
          <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 4 }}>
            Cuota de Noviembre 2023
          </div>
          <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 32, color: '#FFFFFF', marginBottom: 16 }}>
            $2,500.00
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Vence el</div>
              <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#FFFFFF' }}>5 de noviembre, 2023</div>
            </div>
            <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Pendiente
            </span>
          </div>
        </div>
      </div>

      {/* Pay button */}
      <div style={{ padding: '0 20px 16px' }}>
        <button
          style={{
            width: '100%',
            background: '#000000',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 14,
            padding: '14px',
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
          <CreditCard size={18} />
          Pagar ahora
        </button>
      </div>

      {/* History */}
      <div style={{ padding: '0 20px' }}>
        <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, color: '#000000', marginBottom: 12 }}>
          Historial de pagos
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {pagos.map((pago, i) => {
            const config = estadoConfig[pago.estado as keyof typeof estadoConfig];
            const Icon = config.icon;
            return (
              <div
                key={i}
                style={{
                  border: '1px solid #E5E7EB',
                  borderRadius: 14,
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = '#F9FAFB')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, background: config.bg, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} color={config.color} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000' }}>{pago.mes}</div>
                    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 12, color: '#9CA3AF' }}>{pago.fecha} · {pago.metodo}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, color: '#000000' }}>{pago.monto}</span>
                  <ChevronRight size={16} color="#9CA3AF" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
