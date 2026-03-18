import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { LayoutGrid, ScanLine, Shield, Monitor, LogOut } from 'lucide-react';

const tabs = [
  { path: '/resident', label: 'Inicio', icon: LayoutGrid, exact: true },
  { path: '/resident/reservaciones', label: 'Reservar', icon: ScanLine },
  { path: '/resident/cuotas', label: 'Cuotas', icon: Shield },
  { path: '/resident/comunicados', label: 'Comunicados', icon: Monitor },
];

export default function ResidentLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F3F4F6',
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
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 80 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom tab bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#FFFFFF',
            borderTop: '1px solid #E5E7EB',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '8px 0 20px',
            zIndex: 100,
          }}
        >
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = isActive(tab.path, tab.exact);
            return (
              <Link
                key={tab.path}
                to={tab.path}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                  padding: '4px 16px',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Icon size={24} color={active ? '#000000' : '#9CA3AF'} />
                <span
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 10,
                    color: active ? '#000000' : '#9CA3AF',
                    fontWeight: active ? 700 : 400,
                  }}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Sign out button (top right) */}
        <button
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'rgba(0,0,0,0.05)',
            border: 'none',
            borderRadius: 8,
            padding: '6px 8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            zIndex: 50,
          }}
          title="Salir"
        >
          <LogOut size={14} color="#6B7280" />
        </button>
      </div>
    </div>
  );
}
