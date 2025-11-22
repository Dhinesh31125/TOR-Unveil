import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Shield, Lock, User } from "lucide-react";

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    padding: '1rem'
  },
  pattern: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
    opacity: 0.3
  },
  formWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '28rem'
  },
  shieldContainer: {
    position: 'absolute',
    top: '-5rem',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  shieldGlow: {
    position: 'absolute',
    inset: 0,
    background: '#f093fb',
    filter: 'blur(40px)',
    opacity: 0.4,
    animation: 'pulse 2s infinite'
  },
  shieldIcon: {
    position: 'relative',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    padding: '1.5rem',
    borderRadius: '50%',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
  form: {
    marginTop: '4rem',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '1.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '2rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    color: '#667eea',
    marginBottom: '0.5rem',
    fontSize: '1.875rem',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  inputGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#374151',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  input: {
    width: '95%',
    padding: '0.75rem 1rem',
    background: '#f9fafb',
    border: '2px solid #e5e7eb',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s'
  },
  button: {
    width: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.875rem',
    borderRadius: '0.75rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
  },
  footer: {
    marginTop: '1.5rem',
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '0.875rem'
  }
};

export default function Login() {
  const [forceId, setForceId] = useState("");
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    const user = { forceId, phone };
    localStorage.setItem("tor_user", JSON.stringify(user));
    nav("/");
  }

  return (
    <div style={styles.container}>
      <div style={styles.pattern}></div>
      
      <div style={styles.formWrapper}>
        <div style={styles.shieldContainer}>
          <div>
            <div style={styles.shieldGlow}></div>
            <div style={styles.shieldIcon}>
              <Shield style={{ width: '4rem', height: '4rem', color: 'white' }} />
            </div>
          </div>
        </div>

        <form style={styles.form} onSubmit={submit}>
          <div style={styles.header}>
            <h2 style={styles.title}>Police Login Portal</h2>
            <p style={styles.subtitle}>Secure access to TOR-Unveil system</p>
          </div>

          <div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <User style={{ width: '1rem', height: '1rem', color: '#667eea' }} />
                Force ID
              </label>
              <input 
                value={forceId} 
                onChange={e => setForceId(e.target.value)} 
                required
                style={styles.input}
                placeholder="Enter your force ID"
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <Lock style={{ width: '1rem', height: '1rem', color: '#667eea' }} />
                Phone Number (password)
              </label>
              <input 
                value={phone} 
                onChange={e => setPhone(e.target.value)} 
                required
                type="tel"
                style={styles.input}
                placeholder="Enter your phone number"
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e7e7eb'}
              />
            </div>

            <button 
              style={styles.button}
              type="submit"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
              }}
            >
              Login Securely
            </button>
          </div>

          <div style={styles.footer}>
            <p>Authorized personnel only</p>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
