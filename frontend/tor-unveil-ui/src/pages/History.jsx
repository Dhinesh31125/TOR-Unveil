import { useEffect, useState } from "react";
import { History as HistoryIcon, Clock, Search, FileText, Trash2, Calendar } from "lucide-react";
import RiskBadge from "../components/RiskBadge";

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #a1c4fd 100%)',
    padding: '1.5rem'
  },
  container: {
    maxWidth: '80rem',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  headerIcon: {
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    padding: '1rem',
    borderRadius: '1rem',
    border: '3px solid rgba(255, 255, 255, 0.5)',
    boxShadow: '0 10px 25px rgba(168, 237, 234, 0.3)'
  },
  headerText: {
    color: '#374151'
  },
  clearButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(255, 75, 87, 0.9)',
    border: '2px solid rgba(255, 75, 87, 0.5)',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    color: 'white',
    fontWeight: '600',
    transition: 'all 0.2s'
  },
  searchWrapper: {
    position: 'relative',
    marginBottom: '1.5rem'
  },
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af'
  },
  searchInput: {
    width: '100%',
    paddingLeft: '3rem',
    paddingRight: '1rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    background: 'rgba(255, 255, 255, 0.95)',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s'
  },
  emptyCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '3px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '1.5rem',
    padding: '3rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  historyCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '3px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
    transition: 'all 0.2s'
  },
  cardHeader: {
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  cardContent: {
    padding: '1.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '1rem'
  },
  infoBox: {
    background: '#f9fafb',
    border: '2px solid #e5e7eb',
    borderRadius: '0.75rem',
    padding: '1rem'
  },
  infoLabel: {
    color: '#6b7280',
    marginBottom: '0.5rem',
    fontSize: '0.875rem'
  },
  progressBar: {
    flex: 1,
    background: '#e5e7eb',
    borderRadius: '9999px',
    height: '0.5rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #26de81 0%, #20bf6b 100%)',
    borderRadius: '9999px'
  },
  statsCard: {
    marginTop: '1.5rem',
    background: 'rgba(255, 255, 255, 0.95)',
    border: '3px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '1.5rem',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

export default function History() {
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const h = JSON.parse(localStorage.getItem("tor_history") || "[]");
    setHistory(h);
  }, []);

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear all history?")) {
      localStorage.setItem("tor_history", "[]");
      setHistory([]);
    }
  };

  const filteredHistory = history.filter(h =>
    h.query.toLowerCase().includes(filter.toLowerCase()) ||
    new Date(h.when).toLocaleString().toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.headerIcon}>
              <HistoryIcon style={{ width: '2rem', height: '2rem', color: '#667eea' }} />
            </div>
            <div>
              <h2 style={{ ...styles.headerText, fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Analysis History</h2>
              <p style={{ color: '#6b7280' }}>Review past TOR traffic investigations</p>
            </div>
          </div>

          {history.length > 0 && (
            <button
              onClick={clearHistory}
              style={styles.clearButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 75, 87, 1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 75, 87, 0.9)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Trash2 style={{ width: '1rem', height: '1rem' }} />
              Clear All
            </button>
          )}
        </div>

        {history.length > 0 && (
          <div style={styles.searchWrapper}>
            <Search style={{ ...styles.searchIcon, width: '1.25rem', height: '1.25rem' }} />
            <input
              type="text"
              placeholder="Search history by IP or date..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={styles.searchInput}
              onFocus={(e) => e.target.style.borderColor = '#a8edea'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)'}
            />
          </div>
        )}

        {filteredHistory.length === 0 ? (
          <div style={styles.emptyCard}>
            <HistoryIcon style={{ width: '4rem', height: '4rem', marginBottom: '1rem', opacity: 0.3, color: '#9ca3af' }} />
            <h3 style={{ color: '#6b7280', marginBottom: '0.5rem', fontSize: '1.25rem' }}>No History Found</h3>
            <p style={{ color: '#9ca3af' }}>
              {filter ? "No results match your search criteria" : "Your analysis history will appear here"}
            </p>
          </div>
        ) : (
          <div>
            {filteredHistory.map((h, i) => (
              <div
                key={i}
                style={styles.historyCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#a8edea';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.cardHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                      <FileText style={{ width: '1.25rem', height: '1.25rem', color: '#667eea' }} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', marginBottom: '0.25rem', fontWeight: '600' }}>
                        <Search style={{ width: '1rem', height: '1rem' }} />
                        <span>Query: <span style={{ color: '#667eea', background: 'white', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>{h.query}</span></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>
                        <Clock style={{ width: '1rem', height: '1rem' }} />
                        <span>{new Date(h.when).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {h.result && (
                    <div>
                      <RiskBadge risk={h.result.risk} />
                    </div>
                  )}
                </div>

                <div style={styles.cardContent}>
                  <div style={styles.grid}>
                    {h.result && (
                      <>
                        <div style={styles.infoBox}>
                          <div style={styles.infoLabel}>Confidence Score</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={styles.progressBar}>
                              <div
                                style={{ ...styles.progressFill, width: `${parseFloat(h.result.confidence)}%` }}
                              ></div>
                            </div>
                            <span style={{ color: '#26de81', fontWeight: 'bold' }}>{h.result.confidence}%</span>
                          </div>
                        </div>

                        <div style={styles.infoBox}>
                          <div style={styles.infoLabel}>Predicted Path</div>
                          <div style={{ color: '#374151', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis' }}>{h.result.path}</div>
                        </div>

                        <div style={styles.infoBox}>
                          <div style={styles.infoLabel}>Entry Node</div>
                          <div style={{ color: '#4facfe', fontWeight: '600' }}>{h.result.entry.ip}</div>
                          <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{h.result.entry.asn}</div>
                        </div>

                        <div style={styles.infoBox}>
                          <div style={styles.infoLabel}>Exit Node</div>
                          <div style={{ color: '#ff9f43', fontWeight: '600' }}>{h.result.exit.ip}</div>
                          <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{h.result.exit.asn}</div>
                        </div>
                      </>
                    )}
                  </div>

                  <details style={{ cursor: 'pointer' }}>
                    <summary style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ transition: 'transform 0.2s' }}>▶</span>
                      View Full Result Details
                    </summary>
                    <pre style={{ marginTop: '1rem', background: '#f9fafb', border: '2px solid #e5e7eb', borderRadius: '0.75rem', padding: '1rem', color: '#6b7280', overflow: 'auto', fontSize: '0.875rem' }}>
                      {JSON.stringify(h.result, null, 2)}
                    </pre>
                  </details>
                </div>
              </div>
            ))}
          </div>
        )}

        {history.length > 0 && (
          <div style={styles.statsCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280' }}>
              <Calendar style={{ width: '1rem', height: '1rem' }} />
              <span>Total Analyses: {history.length}</span>
            </div>
            {filter && (
              <div style={{ color: '#6b7280' }}>
                Showing: {filteredHistory.length} results
              </div>
            )}
          </div>
        )}

      </div>

      <style>{`
        details[open] summary span {
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  );
}
