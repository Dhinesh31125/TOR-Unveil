import { useNavigate } from "react-router-dom";
import { Shield, History, LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";

const styles = {
  nav: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderBottom: '3px solid rgba(255, 255, 255, 0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
  },
  container: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logoButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  },
  logoIcon: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '0.625rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  logoText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  logoTitle: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  logoSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.875rem',
    marginTop: '-0.25rem'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  userBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '0.5rem 1rem',
    borderRadius: '0.75rem',
    border: '2px solid rgba(255, 255, 255, 0.3)'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: 'white',
    fontWeight: '500'
  },
  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(255, 75, 87, 0.9)',
    border: '2px solid rgba(255, 75, 87, 0.5)',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: 'white',
    fontWeight: '500'
  }
};

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("tor_user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("tor_user");
    navigate("/login");
  };
  
  const goHistory = () => navigate("/history");
  const goHome = () => navigate("/");

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        {/* Logo Button */}
        <button 
          onClick={goHome} 
          style={styles.logoButton}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <div style={styles.logoIcon}>
            <Shield style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
          </div>
          <div style={styles.logoText}>
            <span style={styles.logoTitle}>TOR-Unveil</span>
            <span style={styles.logoSubtitle}>Police Dashboard</span>
          </div>
        </button>

        {/* Right actions */}
        <div style={styles.actions}>
          {user && (
            <div style={styles.userBadge}>
              <User style={{ width: '1rem', height: '1rem', color: 'white' }} />
              <span style={{ color: 'white' }}>{user.forceId}</span>
            </div>
          )}
          
          {/* History button */}
          <button 
            onClick={goHistory}
            style={styles.button}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <History style={{ width: '1rem', height: '1rem' }} />
            <span>History</span>
          </button>
          
          {/* Logout button */}
          <button 
            onClick={logout}
            style={styles.logoutButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 75, 87, 1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 75, 87, 0.9)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <LogOut style={{ width: '1rem', height: '1rem' }} />
            <span>Logout</span>
          </button>

        </div>
      </div>
    </nav>
  );
}
