import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

const configs = {
  High: {
    bg: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
    icon: AlertTriangle,
    text: 'HIGH RISK',
    dotColor: '#ff4757',
    shadow: '0 10px 25px rgba(255, 107, 107, 0.4)'
  },
  Medium: {
    bg: 'linear-gradient(135deg, #ffa502 0%, #ff6348 100%)',
    icon: AlertCircle,
    text: 'MEDIUM RISK',
    dotColor: '#ff9f43',
    shadow: '0 10px 25px rgba(255, 165, 2, 0.4)'
  },
  Low: {
    bg: 'linear-gradient(135deg, #26de81 0%, #20bf6b 100%)',
    icon: CheckCircle,
    text: 'LOW RISK',
    dotColor: '#26de81',
    shadow: '0 10px 25px rgba(38, 222, 129, 0.4)'
  }
};

export default function RiskBadge({ risk }) {
  const config = configs[risk] || configs.Low;
  const Icon = config.icon;

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: config.bg,
    boxShadow: config.shadow,
    padding: '0.625rem 1.25rem',
    borderRadius: '0.75rem',
    transition: 'transform 0.2s',
    cursor: 'default'
  };

  const dotStyle = {
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%',
    backgroundColor: config.dotColor,
    animation: 'pulse 2s infinite'
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <div
        style={badgeStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Icon style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
        <span style={{ color: 'white', fontWeight: '600' }}>{config.text}</span>
        <div style={dotStyle}></div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
}
