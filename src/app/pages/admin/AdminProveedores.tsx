import { Plus, Star } from 'lucide-react';
import { HeroBanner } from '../../components/HeroBanner';
import { Brandmark } from '../../components/Brandmark';

const proveedores = [
  { nombre: 'Jardinería Verde', servicio: 'Jardinería', contacto: 'Miguel Torres', tel: '555-1234', estado: 'Activo', rating: 5 },
  { nombre: 'Plomería Rapida', servicio: 'Plomería', contacto: 'José Mendez', tel: '555-5678', estado: 'Activo', rating: 4 },
  { nombre: 'Seguridad Total', servicio: 'Vigilancia', contacto: 'Carmen Ruiz', tel: '555-9012', estado: 'Activo', rating: 5 },
  { nombre: 'Mantenimiento Integral', servicio: 'Mantenimiento', contacto: 'Luis Pérez', tel: '555-3456', estado: 'Inactivo', rating: 3 },
  { nombre: 'Limpieza Pro', servicio: 'Limpieza', contacto: 'Rosa García', tel: '555-7890', estado: 'Activo', rating: 4 },
];

export default function AdminProveedores() {
  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh' }}>
      <HeroBanner />
      <div style={{ background: '#FFFFFF', padding: '0 24px 20px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: -32 }}>
          <Brandmark size={72} />
          <div>
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 18, color: '#000000', margin: 0 }}>
              Proveedores
            </h2>
            <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#9CA3AF', margin: '2px 0 0' }}>
              Directorio de servicios
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
          <button
            style={{
              display: 'flex', alignItems: 'center', gap: 8, background: '#000000', color: '#FFFFFF',
              border: 'none', borderRadius: 10, padding: '10px 16px', cursor: 'pointer', fontSize: 13,
              fontWeight: 700, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
          >
            <Plus size={16} /> Agregar proveedor
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {proveedores.map((p, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', padding: '20px',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease', cursor: 'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#23C1DA';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                <div>
                  <h4 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, color: '#000000', margin: '0 0 4px' }}>
                    {p.nombre}
                  </h4>
                  <span
                    style={{
                      background: '#F0FDFA', color: '#23C1DA', fontSize: 11, fontWeight: 700,
                      padding: '2px 8px', borderRadius: 20, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {p.servicio}
                  </span>
                </div>
                <span
                  style={{
                    background: p.estado === 'Activo' ? '#D1FAE5' : '#F3F4F6',
                    color: p.estado === 'Activo' ? '#059669' : '#9CA3AF',
                    fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20,
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}
                >
                  {p.estado}
                </span>
              </div>
              <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Contacto</span>
                  <span style={{ fontSize: 13, color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{p.contacto}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Teléfono</span>
                  <span style={{ fontSize: 13, color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{p.tel}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Calificación</span>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} size={12} color={s <= p.rating ? '#F59E0B' : '#E5E7EB'} fill={s <= p.rating ? '#F59E0B' : '#E5E7EB'} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
