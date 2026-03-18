import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Home,
  MapPin,
  Building2,
  MessageSquare,
  Megaphone,
  LogOut,
} from 'lucide-react';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { path: '/admin/finanzas', label: 'Finanzas', icon: BarChart3 },
  { path: '/admin/usuarios', label: 'Usuarios', icon: Users },
  { path: '/admin/residencias', label: 'Residencias', icon: Home },
  { path: '/admin/areas-comunes', label: 'Áreas Comunes', icon: MapPin },
  { path: '/admin/proveedores', label: 'Proveedores', icon: Building2 },
  { path: '/admin/chat', label: 'Chat', icon: MessageSquare },
  { path: '/admin/comunicados', label: 'Comunicados', icon: Megaphone },
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F9FAFB' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 240,
          minHeight: '100vh',
          background: '#FFFFFF',
          borderRight: '1px solid #E5E7EB',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: '#000000',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: '#000000',
              letterSpacing: '-0.3px',
            }}
          >
            Resident.mx
          </span>
        </div>

        {/* Nav items */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          {navItems.map(item => {
            const Icon = item.icon;
            const active = isActive(item.path, item.exact);
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  background: active ? '#F0FDFA' : 'transparent',
                  color: active ? '#23C1DA' : '#6B7280',
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: active ? 700 : 400,
                  fontSize: 14,
                  transition: 'background 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={e => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#F3F4F6';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#000000';
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280';
                  }
                }}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User info */}
        <div
          style={{
            borderTop: '1px solid #E5E7EB',
            paddingTop: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#23C1DA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: 13,
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              M
            </div>
            <span
              style={{
                fontSize: 14,
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 500,
                color: '#000000',
              }}
            >
              Mauricio
            </span>
          </div>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#9CA3AF',
              display: 'flex',
              padding: 4,
              borderRadius: 6,
              transition: 'color 0.3s ease',
            }}
            title="Cerrar sesión"
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#000000')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#9CA3AF')}
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: 240, flex: 1, minHeight: '100vh', overflow: 'auto' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ minHeight: '100vh' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
