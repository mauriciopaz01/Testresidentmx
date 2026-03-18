import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { LayoutDashboard, Smartphone, Shield, Eye, EyeOff } from 'lucide-react';

const HERO_BG =
  'https://images.unsplash.com/photo-1673977597041-7e6512719d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzczODEwMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080';

type Role = 'admin' | 'resident' | 'guard';

const roles = [
  {
    id: 'admin' as Role,
    label: 'Administrador',
    sublabel: 'Portal de gestión web',
    icon: LayoutDashboard,
    route: '/admin',
  },
  {
    id: 'resident' as Role,
    label: 'Residente',
    sublabel: 'App de comunidad',
    icon: Smartphone,
    route: '/resident',
  },
  {
    id: 'guard' as Role,
    label: 'Vigilante',
    sublabel: 'Control de acceso',
    icon: Shield,
    route: '/guard',
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>('admin');
  const [email, setEmail] = useState('mauricio@residentmx.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const role = roles.find(r => r.id === selectedRole);
    setTimeout(() => {
      navigate(role?.route ?? '/admin');
    }, 600);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'none',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.65)',
          filter: 'grayscale(80%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(20, 20, 20, 0.88)',
          backdropFilter: 'blur(20px)',
          borderRadius: 20,
          padding: '40px 28px',
          width: '100%',
          maxWidth: 420,
          margin: '0 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                background: '#FFFFFF',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: '#000000',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
            </div>
            <span
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 24,
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
              }}
            >
              Resident.mx
            </span>
          </div>
          <p
            style={{
              color: '#9CA3AF',
              fontSize: 14,
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Plataforma de administración de comunidades
          </p>
        </div>

        {/* Role selector */}
        <div>
          <p
            style={{
              color: '#9CA3AF',
              fontSize: 12,
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              marginBottom: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 700,
            }}
          >
            Acceder como
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {roles.map(role => {
              const Icon = role.icon;
              const isActive = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  style={{
                    flex: 1,
                    background: isActive ? '#23C1DA' : 'rgba(255,255,255,0.08)',
                    border: `1px solid ${isActive ? '#23C1DA' : 'rgba(255,255,255,0.15)'}`,
                    borderRadius: 12,
                    padding: '10px 8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon size={20} color={isActive ? '#FFFFFF' : '#9CA3AF'} />
                  <span
                    style={{
                      color: isActive ? '#FFFFFF' : '#9CA3AF',
                      fontSize: 11,
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontWeight: isActive ? 700 : 400,
                    }}
                  >
                    {role.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            style={{
              display: 'block',
              color: '#9CA3AF',
              fontSize: 12,
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              marginBottom: 6,
            }}
          >
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 12,
              padding: '13px 16px',
              color: '#FFFFFF',
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
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Password */}
        <div>
          <label
            style={{
              display: 'block',
              color: '#9CA3AF',
              fontSize: 12,
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              marginBottom: 6,
            }}
          >
            Contraseña
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 12,
                padding: '13px 48px 13px 16px',
                color: '#FFFFFF',
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
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#9CA3AF',
                padding: 0,
                display: 'flex',
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: '100%',
            background: '#23C1DA',
            border: 'none',
            borderRadius: 12,
            padding: '14px 24px',
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.8 : 1,
            transition: 'opacity 0.3s ease, transform 0.1s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
          onMouseEnter={e => {
            if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = '0.9';
          }}
          onMouseLeave={e => {
            if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = '1';
          }}
        >
          {loading ? (
            <div
              style={{
                width: 18,
                height: 18,
                border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: '#FFFFFF',
                borderRadius: '50%',
                animation: 'spin 0.6s linear infinite',
              }}
            />
          ) : null}
          {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </button>

        <p
          style={{
            textAlign: 'center',
            color: '#6B7280',
            fontSize: 12,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Demo — selecciona un rol para explorar la plataforma
        </p>
      </motion.div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
