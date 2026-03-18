import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowUpDown,
  LayoutGrid,
  ChevronDown,
  CreditCard,
  AlertCircle,
  PieChart,
  Settings,
  ChevronRight,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { HeroBanner } from '../../components/HeroBanner';
import { Brandmark } from '../../components/Brandmark';
import { StatCard } from '../../components/StatCard';

type SubView = 'overview' | 'movimientos' | 'estados';

const weeklyDataActual = [
  { semana: 'Sem 1', ingresos: 5200, egresos: 4800 },
  { semana: 'Sem 2', ingresos: 13200, egresos: 21000 },
  { semana: 'Sem 3', ingresos: 9800, egresos: 4500 },
  { semana: 'Sem 4', ingresos: 13793.88, egresos: 7693.67 },
];

const weeklyDataAnterior = [
  { semana: 'Sem 1', ingresos: 4100, egresos: 3800 },
  { semana: 'Sem 2', ingresos: 11200, egresos: 18500 },
  { semana: 'Sem 3', ingresos: 8600, egresos: 3900 },
  { semana: 'Sem 4', ingresos: 11000, egresos: 6500 },
];

const actionItems = [
  { icon: ArrowDownToLine, label: 'Capturar Ingreso' },
  { icon: ArrowUpFromLine, label: 'Capturar Egreso' },
  { icon: ArrowUpDown, label: 'Movimientos' },
  { icon: LayoutGrid, label: 'Estados de Cuenta' },
  { icon: CreditCard, label: 'Cobranza' },
  { icon: AlertCircle, label: 'Morosidad' },
  { icon: PieChart, label: 'Presupuestos' },
  { icon: Settings, label: 'Configuración' },
];

const fmt = (n: number) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const ChartLegend = () => (
  <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#6B7280', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#23C1DA', display: 'inline-block' }} />
      Ingresos
    </span>
    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#6B7280', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#A5F3FC', display: 'inline-block' }} />
      Egresos
    </span>
  </div>
);

const SectionHeaderRow = ({ label }: { label: string }) => (
  <tr>
    <td colSpan={3} style={{ padding: '12px 20px', background: '#F9FAFB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 13, color: '#000000', borderTop: '1px solid #E5E7EB' }}>
      {label}
    </td>
  </tr>
);

export default function AdminFinanzas() {
  const [subView, setSubView] = useState<SubView>('overview');
  const [period, setPeriod] = useState<'actual' | 'anterior'>('actual');

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh' }}>
      {subView === 'overview' && (
        <motion.div
          key="overview"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <HeroBanner />
          <div style={{ background: '#FFFFFF', padding: '0 24px 20px', borderBottom: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: -32 }}>
              <Brandmark size={72} />
              <div>
                <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 18, color: '#000000', margin: 0 }}>
                  Finanzas
                </h2>
                <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#9CA3AF', margin: '2px 0 0' }}>
                  Control Financiero
                </p>
              </div>
            </div>
          </div>

          {/* Action grid */}
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {actionItems.map((item, i) => {
                const Icon = item.icon;
                const clickActions: Record<number, SubView> = { 2: 'movimientos', 3: 'estados' };
                return (
                  <button
                    key={i}
                    onClick={() => clickActions[i] && setSubView(clickActions[i])}
                    style={{
                      border: '1px solid #E5E7EB', borderRadius: 12, padding: '24px 16px',
                      background: '#FFFFFF', display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: 12, cursor: 'pointer',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = '#23C1DA';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(35,193,218,0.1)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = '#E5E7EB';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                    }}
                  >
                    <Icon size={28} color="#000000" />
                    <span style={{ fontSize: 13, color: '#000000', textAlign: 'center' }}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Financial summary */}
          <div style={{ padding: '0 24px 24px' }}>
            <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 16, color: '#000000', margin: '0 0 16px' }}>
              Resumen Financiero del Actual Periodo
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              <StatCard value="$20,711.56" label="Balance del Periodo" />
              <StatCard value="2" label="Total Movimientos" />
              <StatCard value="1" label="Total Ingresos" />
              <StatCard value="1" label="Total Egresos" />
            </div>
          </div>

          {/* Weekly chart */}
          <div style={{ padding: '0 24px 32px' }}>
            <div style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, color: '#000000', margin: 0 }}>
                  Movimientos por Semana
                </h3>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #E5E7EB', borderRadius: 8, padding: '6px 12px', background: '#FFFFFF', cursor: 'pointer', fontSize: 13, color: '#6B7280', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  Filtro <ChevronDown size={14} />
                </button>
              </div>
              <ChartLegend />
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={weeklyDataActual} barCategoryGap="30%" barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
                  <XAxis dataKey="semana" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v: number) => [`$${v.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, '']} contentStyle={{ borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 12 }} />
                  <Bar dataKey="ingresos" name="Ingresos" fill="#23C1DA" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="egresos" name="Egresos" fill="#A5F3FC" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      )}

      {subView === 'movimientos' && (
        <motion.div
          key="movimientos"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={() => setSubView('overview')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: 13, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: 0 }}>
                Finanzas
              </button>
              <ChevronRight size={14} color="#D1D5DB" />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Movimientos</span>
            </div>
          </div>

          <div style={{ padding: '24px' }}>
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 22, color: '#000000', marginBottom: 20 }}>
              Movimientos
            </h2>

            <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
              {(['actual', 'anterior'] as const).map(p => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  style={{
                    padding: '8px 20px', borderRadius: 20,
                    border: `1px solid ${period === p ? '#23C1DA' : '#D1D5DB'}`,
                    background: '#FFFFFF', color: period === p ? '#23C1DA' : '#000000',
                    fontSize: 13, fontWeight: period === p ? 700 : 400,
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    cursor: 'pointer', transition: 'all 0.3s ease',
                  }}
                >
                  {p === 'actual' ? 'Periodo Actual' : 'Periodo Anterior'}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={period}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
                  <StatCard value={period === 'actual' ? 'Feb 2024' : 'Ene 2024'} label="Periodo" />
                  <StatCard value="29" label="Total Movimientos" />
                  <StatCard value={period === 'actual' ? '$41,993.88' : '$38,500.00'} label="Total Ingresos" />
                  <StatCard value={period === 'actual' ? '$37,993.67' : '$35,200.00'} label="Total Egresos" />
                </div>

                <div style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, color: '#000000', margin: 0 }}>Movimientos</h3>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #E5E7EB', borderRadius: 8, padding: '6px 12px', background: '#FFFFFF', cursor: 'pointer', fontSize: 13, color: '#6B7280', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                      Filtro <ChevronDown size={14} />
                    </button>
                  </div>
                  <ChartLegend />
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={period === 'actual' ? weeklyDataActual : weeklyDataAnterior} barCategoryGap="30%" barGap={4}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
                      <XAxis dataKey="semana" tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                      <Tooltip formatter={(v: number) => [`$${v.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, '']} contentStyle={{ borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 12 }} />
                      <Bar dataKey="ingresos" name="Ingresos" fill="#23C1DA" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="egresos" name="Egresos" fill="#A5F3FC" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {subView === 'estados' && (
        <motion.div
          key="estados"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={() => setSubView('overview')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: 13, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: 0 }}>
                Finanzas
              </button>
              <ChevronRight size={14} color="#D1D5DB" />
              <button onClick={() => setSubView('movimientos')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: 13, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: 0 }}>
                Estados de Cuenta
              </button>
              <ChevronRight size={14} color="#D1D5DB" />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                Febrero-2024-RMD-QUE-3LQ
              </span>
            </div>
          </div>

          <div style={{ padding: '24px' }}>
            <div style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              <div style={{ padding: '24px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>
                <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 15, color: '#000000', margin: 0 }}>
                  Resident MX Demo<br />Estado de Resultados<br />Ejercicio Febrero - 2024
                </h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '12px 20px', background: '#F9FAFB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Concepto</th>
                    <th style={{ textAlign: 'right', padding: '12px 20px', background: '#F9FAFB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Monto</th>
                    <th style={{ textAlign: 'right', padding: '12px 20px', background: '#F9FAFB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>%</th>
                  </tr>
                </thead>
                <tbody>
                  <SectionHeaderRow label="INGRESOS" />
                  {[
                    { label: 'Cobro de multas', monto: 13633.9, pct: '32.47%' },
                    { label: 'Cuotas de estacionamiento', monto: 16589.59, pct: '39.50%' },
                    { label: 'Ingresos extraordinarios', monto: 4109.62, pct: '9.79%' },
                    { label: 'Cuotas de mantenimiento', monto: 7660.77, pct: '18.24%' },
                  ].map((item, i) => (
                    <tr key={`ing-${i}`} onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#F9FAFB')} onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}>
                      <td style={{ padding: '14px 20px 14px 32px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000' }}>{item.label}</td>
                      <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000', textAlign: 'right' }}>{fmt(item.monto)}</td>
                      <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000', textAlign: 'right' }}>{item.pct}</td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ padding: '14px 20px', borderTop: '2px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000', textAlign: 'right' }}>TOTAL INGRESOS</td>
                    <td style={{ padding: '14px 20px', borderTop: '2px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000', textAlign: 'right' }}>$41,993.88</td>
                    <td style={{ padding: '14px 20px', borderTop: '2px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000', textAlign: 'right' }}>100%</td>
                  </tr>

                  <SectionHeaderRow label="EGRESOS" />
                  {[
                    { label: 'Pago de servicios', monto: 16161.17, pct: '42.54%' },
                    { label: 'Gastos de mantenimiento', monto: 1811.97, pct: '4.77%' },
                    { label: 'Gastos administrativos', monto: 5141.28, pct: '13.53%' },
                    { label: 'Pago de honorarios', monto: 7452.88, pct: '19.62%' },
                    { label: 'Gastos extraordinarios', monto: 7426.37, pct: '19.55%' },
                  ].map((item, i) => (
                    <tr key={`egr-${i}`} onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#F9FAFB')} onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}>
                      <td style={{ padding: '14px 20px 14px 32px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000' }}>{item.label}</td>
                      <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000', textAlign: 'right' }}>{fmt(item.monto)}</td>
                      <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000', textAlign: 'right' }}>{item.pct}</td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ padding: '14px 20px', borderTop: '2px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000', textAlign: 'right' }}>TOTAL EGRESOS</td>
                    <td style={{ padding: '14px 20px', borderTop: '2px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000', textAlign: 'right' }}>$37,993.67</td>
                    <td style={{ padding: '14px 20px', borderTop: '2px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000', textAlign: 'right' }}>100%</td>
                  </tr>

                  <SectionHeaderRow label="RESUMEN" />
                  {[
                    { label: 'Total Ingresos', monto: '$41,993.88', pct: '100%', highlight: false },
                    { label: 'Total Egresos', monto: '$37,993.67', pct: '90.47%', highlight: false },
                    { label: 'Utilidad / Pérdida', monto: '$4,000.21', pct: '9.53%', highlight: true },
                  ].map((item, i) => (
                    <tr key={`res-${i}`} onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = '#F9FAFB')} onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}>
                      <td style={{ padding: '14px 20px 14px 32px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: item.highlight ? 700 : 400, fontSize: 14, color: '#000000' }}>{item.label}</td>
                      <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: item.highlight ? 700 : 400, fontSize: 14, color: item.highlight ? '#10B981' : '#000000', textAlign: 'right' }}>{item.monto}</td>
                      <td style={{ padding: '14px 20px', borderBottom: '1px solid #F3F4F6', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#000000', textAlign: 'right' }}>{item.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
