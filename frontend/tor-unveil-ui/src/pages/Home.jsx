import { useEffect, useState } from "react";
import { fetchNodes, fetchLogs, analyze } from "../services/api";
import GraphView from "../components/GraphView";
import RiskBadge from "../components/RiskBadge";
import { Search, FileText, Server, Activity, TrendingUp, Sparkles, RotateCcw } from "lucide-react";

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 50%, #fbc2eb 100%)',
    padding: '1.5rem'
  },
  container: {
    maxWidth: '80rem',
    margin: '0 auto'
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem'
  },
  headerIcon: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '1rem',
    borderRadius: '1rem',
    border: '3px solid rgba(255, 255, 255, 0.5)',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
  },
  headerText: {
    color: '#374151'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '3px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '1.5rem',
    padding: '1.5rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem'
  },
  inputGroup: {
    marginBottom: '1rem'
  },
  label: {
    color: '#374151',
    marginBottom: '0.5rem',
    display: 'block',
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
    transition: 'border-color 0.2s'
  },
  buttonPrimary: {
    flex: 1,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.2s',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  buttonSecondary: {
    padding: '0.75rem 1.5rem',
    background: '#f3f4f6',
    border: '2px solid #e5e7eb',
    color: '#374151',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.2s'
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    background: '#f9fafb',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '2px solid #e5e7eb',
    fontSize: '0.875rem'
  },
  gridTwoThird: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },
  gridThird: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },
  progressBar: {
    flex: 1,
    background: '#e5e7eb',
    borderRadius: '9999px',
    height: '0.75rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #26de81 0%, #20bf6b 100%)',
    borderRadius: '9999px',
    transition: 'width 0.5s'
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
    color: '#9ca3af'
  },
  nodesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem'
  },
  nodeCard: {
    background: '#f9fafb',
    border: '2px solid #e5e7eb',
    borderRadius: '0.75rem',
    padding: '1rem',
    transition: 'all 0.2s'
  }
};

export default function Home() {
  const [nodes, setNodes] = useState([]);
  const [logs, setLogs] = useState([]);
  const [ip, setIp] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchNodes().then(r => setNodes(r.data.relays || []));
    fetchLogs().then(r => setLogs(r.data.logs || []));
    const h = JSON.parse(localStorage.getItem("tor_history") || "[]");
    setHistory(h);
  }, []);

  async function onAnalyze(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = { type: ip ? "ip" : "file", ip: ip || undefined };
      const r = await analyze(payload);
      setResult(r.data.result);

      const newH = [
        { when: new Date().toISOString(), query: ip || "log-file", result: r.data.result },
        ...history
      ].slice(0, 20);

      localStorage.setItem("tor_history", JSON.stringify(newH));
      setHistory(newH);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function anotherResponse() {
    setResult(null);
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.pageHeader}>
          <div style={styles.headerIcon}>
            <Activity style={{ width: '2rem', height: '2rem', color: 'white' }} />
          </div>
          <div>
            <h2 style={{ ...styles.headerText, fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
              Network Analysis Dashboard
            </h2>
            <p style={{ color: '#6b7280' }}>Analyze TOR traffic and identify suspect patterns</p>
          </div>
        </div>

        {/* SEARCH + LOGS */}
        <div style={{ ...styles.gridTwoThird, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <Search style={{ width: '1.25rem', height: '1.25rem', color: '#667eea' }} />
                <h3 style={{ color: '#374151', fontWeight: 'bold' }}>Suspect IP Analysis</h3>
              </div>

              <form onSubmit={onAnalyze}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Enter Suspect IP Address (optional)</label>
                  <input 
                    placeholder="e.g. 185.0.0.2"
                    value={ip}
                    onChange={e => setIp(e.target.value)}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                  <button 
                    style={styles.buttonPrimary}
                    type="submit"
                    disabled={loading}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
                    }}
                  >
                    {loading ? (
                      <>
                        <div style={{ width: '1.25rem', height: '1.25rem', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles style={{ width: '1.25rem', height: '1.25rem' }} />
                        Analyze Traffic
                      </>
                    )}
                  </button>

                  <button 
                    style={styles.buttonSecondary}
                    type="button"
                    onClick={() => setIp("")}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
                  >
                    Clear
                  </button>
                </div>

                <div style={styles.infoBox}>
                  <FileText style={{ width: '1rem', height: '1rem' }} />
                  <small>Backend uses sample logs for prototype analysis</small>
                </div>
              </form>
            </div>
          </div>

          {/* SAMPLE LOGS */}
          <div style={styles.card}>
            <div style={{ ...styles.cardHeader, background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', padding: '1rem', borderRadius: '0.75rem', color: 'white', marginBottom: '1rem' }}>
              <FileText style={{ width: '1.25rem', height: '1.25rem' }} />
              <h4 style={{ fontWeight: 'bold' }}>Sample Logs</h4>
            </div>

            <div style={{ background: '#f9fafb', borderRadius: '0.75rem', padding: '1rem', border: '2px solid #e5e7eb' }}>
              <pre style={{ color: '#6b7280', overflow: 'auto', maxHeight: '16rem', fontSize: '0.875rem' }}>
                {JSON.stringify(logs.slice(0, 3), null, 2)}
              </pre>
            </div>
          </div>
        </div>

        {/* GRAPH + RISK */}
        <div style={{ ...styles.gridThird, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <GraphView result={result} />
          </div>

          {/* RISK CARD */}
          <div style={{ ...styles.card, background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)', borderBottom: '2px solid rgba(255, 255, 255, 0.5)', padding: '1.5rem', margin: '-1.5rem -1.5rem 1.5rem', borderRadius: '1.5rem 1.5rem 0 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <TrendingUp style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                <h4 style={{ color: 'white', fontWeight: 'bold' }}>Risk Assessment</h4>
              </div>
            </div>

            <div style={{ padding: '0 0.5rem' }}>
              {result ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* CONFIDENCE SCORE */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.9)', border: '2px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.75rem', padding: '1rem' }}>
                    <div style={{ color: '#6b7280', marginBottom: '0.5rem', fontWeight: '600' }}>Confidence Score</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={styles.progressBar}>
                        <div style={{ ...styles.progressFill, width: `${parseFloat(result.confidence)}%` }}></div>
                      </div>
                      <span style={{ color: '#26de81', fontWeight: 'bold' }}>{result.confidence}%</span>
                    </div>
                  </div>

                  {/* RISK BADGE */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.9)', border: '2px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.75rem', padding: '1rem' }}>
                    <div style={{ color: '#6b7280', marginBottom: '0.75rem', fontWeight: '600' }}>Risk Level</div>
                    <RiskBadge risk={result.risk} />
                  </div>

                  {/* RESET */}
                  <button
                    style={{ width: '100%', ...styles.buttonSecondary, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.9)' }}
                    onClick={anotherResponse}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
                  >
                    <RotateCcw style={{ width: '1rem', height: '1rem' }} />
                    New Analysis
                  </button>

                </div>
              ) : (
                <div style={styles.emptyState}>
                  <Activity style={{ width: '3rem', height: '3rem', marginBottom: '0.75rem', opacity: 0.3, color: 'white' }} />
                  <p style={{ textAlign: 'center', color: 'white' }}>No analysis results yet</p>
                  <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)' }}>Run an analysis to see risk assessment</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* NODES */}
        <div style={styles.card}>
          <div style={{ ...styles.cardHeader, background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', padding: '1rem', borderRadius: '0.75rem', color: 'white', marginBottom: '1.5rem' }}>
            <Server style={{ width: '1.25rem', height: '1.25rem' }} />
            <div>
              <h3 style={{ fontWeight: 'bold' }}>TOR Network Nodes</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>Sample relay information</p>
            </div>
          </div>

          <div style={styles.nodesGrid}>
            {nodes.slice(0, 6).map((node, i) => (
              <div
                key={i}
                style={styles.nodeCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4facfe';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(79, 172, 254, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                    <Server style={{ width: '1rem', height: '1rem', color: 'white' }} />
                  </div>
                  <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Node {i + 1}</div>
                </div>

                <pre style={{ color: '#6b7280', overflow: 'auto', fontSize: '0.75rem' }}>
                  {JSON.stringify(node, null, 2)}
                </pre>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
