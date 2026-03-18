import { useState } from 'react';
import { Send } from 'lucide-react';
import { HeroBanner } from '../../components/HeroBanner';
import { Brandmark } from '../../components/Brandmark';

const conversations = [
  { id: 1, name: 'Mauricio García', lastMsg: 'Hola, ¿cuándo se realizará el mantenimiento?', time: '10:32', unread: 2, active: true },
  { id: 2, name: 'Ana Martínez', lastMsg: 'Muchas gracias por la información', time: '09:15', unread: 0, active: false },
  { id: 3, name: 'Carlos López', lastMsg: '¿A qué hora cierra el gimnasio?', time: 'Ayer', unread: 1, active: false },
  { id: 4, name: 'Sofía Hernández', lastMsg: 'Perfecto, lo tomaré en cuenta.', time: 'Ayer', unread: 0, active: false },
];

const initialMessages = [
  { id: 1, from: 'resident', name: 'Mauricio García', text: 'Hola, ¿cuándo se realizará el mantenimiento de la alberca?', time: '10:30' },
  { id: 2, from: 'admin', name: 'Administrador', text: 'Hola Mauricio, el mantenimiento está programado del 25 al 27 de octubre.', time: '10:31' },
  { id: 3, from: 'resident', name: 'Mauricio García', text: 'Entendido, ¿hay algún aviso oficial al respecto?', time: '10:32' },
];

export default function AdminChat() {
  const [activeConv, setActiveConv] = useState(1);
  const [messages, setMessages] = useState(initialMessages);
  const [newMsg, setNewMsg] = useState('');

  const handleSend = () => {
    if (!newMsg.trim()) return;
    setMessages(prev => [...prev, { id: prev.length + 1, from: 'admin', name: 'Administrador', text: newMsg, time: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) }]);
    setNewMsg('');
  };

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HeroBanner height={120} />
      <div style={{ background: '#FFFFFF', padding: '0 24px 20px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: -32 }}>
          <Brandmark size={72} />
          <div>
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 18, color: '#000000', margin: 0 }}>Chat</h2>
            <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, color: '#9CA3AF', margin: '2px 0 0' }}>Mensajes con residentes</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, padding: '24px', gap: 16, minHeight: 0 }}>
        {/* Conversations list */}
        <div style={{ width: 280, background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', overflow: 'hidden', flexShrink: 0 }}>
          {conversations.map(conv => (
            <div
              key={conv.id}
              onClick={() => setActiveConv(conv.id)}
              style={{
                padding: '14px 16px',
                borderBottom: '1px solid #F3F4F6',
                cursor: 'pointer',
                background: activeConv === conv.id ? '#F0FDFA' : 'transparent',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => { if (activeConv !== conv.id) (e.currentTarget as HTMLDivElement).style.background = '#F9FAFB'; }}
              onMouseLeave={e => { if (activeConv !== conv.id) (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: activeConv === conv.id ? '#23C1DA' : '#F3F4F6',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 14, color: activeConv === conv.id ? '#FFFFFF' : '#6B7280',
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", flexShrink: 0,
                }}>
                  {conv.name.charAt(0)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 13, color: '#000000' }}>{conv.name}</span>
                    <span style={{ fontSize: 11, color: '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{conv.time}</span>
                  </div>
                  <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 12, color: '#6B7280', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {conv.lastMsg}
                  </p>
                </div>
                {conv.unread > 0 && (
                  <div style={{ width: 18, height: 18, background: '#23C1DA', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#FFFFFF', fontWeight: 700, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", flexShrink: 0 }}>
                    {conv.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Chat area */}
        <div style={{ flex: 1, background: '#FFFFFF', borderRadius: 16, border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ padding: '14px 20px', borderBottom: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#23C1DA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: '#FFFFFF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              M
            </div>
            <div>
              <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 14, color: '#000000' }}>Mauricio García</div>
              <div style={{ fontSize: 12, color: '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Casa 12 · En línea</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map(msg => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.from === 'admin' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '70%', padding: '10px 14px', borderRadius: msg.from === 'admin' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.from === 'admin' ? '#000000' : '#F3F4F6',
                  color: msg.from === 'admin' ? '#FFFFFF' : '#000000',
                }}>
                  <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 14, margin: 0, lineHeight: 1.4 }}>{msg.text}</p>
                  <span style={{ fontSize: 11, color: msg.from === 'admin' ? 'rgba(255,255,255,0.6)' : '#9CA3AF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", display: 'block', marginTop: 4, textAlign: 'right' }}>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '14px 20px', borderTop: '1px solid #E5E7EB', display: 'flex', gap: 10 }}>
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={newMsg}
              onChange={e => setNewMsg(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1, background: '#F3F4F6', border: '1px solid transparent', borderRadius: 12,
                padding: '10px 16px', fontSize: 14, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                outline: 'none', transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
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
            <button
              onClick={handleSend}
              style={{
                width: 42, height: 42, borderRadius: 12, background: '#000000', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.88')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
            >
              <Send size={16} color="#FFFFFF" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
