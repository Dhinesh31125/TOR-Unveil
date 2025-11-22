import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Network, ArrowRight, Globe, Shield } from 'lucide-react';

const styles = {
  container: {
    flex: 1,
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    border: '3px solid rgba(255, 255, 255, 0.3)'
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '16rem',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  header: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '1.5rem'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  headerIcon: {
    background: 'rgba(255, 255, 255, 0.3)',
    padding: '0.75rem',
    borderRadius: '0.75rem'
  },
  headerText: {
    color: 'white'
  },
  content: {
    padding: '1.5rem'
  },
  pathBox: {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '0.75rem',
    padding: '1rem',
    marginBottom: '1.5rem',
    border: '2px solid rgba(255, 255, 255, 0.5)'
  },
  pathContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  nodeBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  nodeIcon: {
    padding: '0.5rem',
    borderRadius: '0.5rem'
  },
  chartSection: {
    marginBottom: '1.5rem'
  },
  chartTitle: {
    color: 'white',
    marginBottom: '0.75rem',
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  metadataGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  },
  metadataBox: {
    background: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '0.75rem',
    padding: '1rem'
  },
  metadataLabel: {
    color: '#6b7280',
    marginBottom: '0.25rem',
    fontSize: '0.875rem'
  },
  metadataValue: {
    color: '#374151',
    fontWeight: '600'
  }
};

export default function GraphView({ result }) {
  if (!result) {
    return (
      <div style={styles.container}>
        <div style={styles.emptyState}>
          <Network style={{ width: '4rem', height: '4rem', marginBottom: '1rem', opacity: 0.5, color: 'white' }} />
          <p style={{ color: 'white' }}>Run an analysis to visualize the TOR path</p>
        </div>
      </div>
    );
  }

  const pathData = [
    { step: 'Start', confidence: 0, value: 20 },
    { step: 'Entry', confidence: parseFloat(result.confidence) * 0.3, value: 45 },
    { step: 'Relay 1', confidence: parseFloat(result.confidence) * 0.5, value: 65 },
    { step: 'Relay 2', confidence: parseFloat(result.confidence) * 0.7, value: 80 },
    { step: 'Exit', confidence: parseFloat(result.confidence) * 0.9, value: 95 },
    { step: 'End', confidence: parseFloat(result.confidence), value: 100 },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerIcon}>
            <Network style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
          </div>
          <div>
            <h4 style={{ ...styles.headerText, fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Predicted TOR Path</h4>
            <p style={{ ...styles.headerText, fontSize: '0.875rem', opacity: 0.9 }}>Network route analysis</p>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.pathBox}>
          <div style={styles.pathContent}>
            
            {/* Entry Node */}
            <div style={styles.nodeBox}>
              <div style={{ ...styles.nodeIcon, background: '#4facfe' }}>
                <Globe style={{ width: '1rem', height: '1rem', color: 'white' }} />
              </div>
              <div>
                <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>Entry Node</div>
                <div style={{ color: '#4facfe', fontWeight: '600' }}>{result.entry.ip}</div>
              </div>
            </div>

            <ArrowRight style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />

            {/* Relay Path */}
            <div style={styles.nodeBox}>
              <div style={{ ...styles.nodeIcon, background: '#a55eea' }}>
                <Network style={{ width: '1rem', height: '1rem', color: 'white' }} />
              </div>
              <div>
                <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>Relay Path</div>
                <div style={{ color: '#374151', fontWeight: '600', maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {result.path}
                </div>
              </div>
            </div>

            <ArrowRight style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />

            {/* Exit Node */}
            <div style={styles.nodeBox}>
              <div style={{ ...styles.nodeIcon, background: '#ff9f43' }}>
                <Shield style={{ width: '1rem', height: '1rem', color: 'white' }} />
              </div>
              <div>
                <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>Exit Node</div>
                <div style={{ color: '#ff9f43', fontWeight: '600' }}>{result.exit.ip}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Chart Section */}
        <div style={styles.chartSection}>
          <div style={styles.chartTitle}>Confidence Analysis Along Path</div>
          <div style={{ background: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.75rem', padding: '1rem' }}>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={pathData}>
                <defs>
                  <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#26de81" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#26de81" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                <XAxis dataKey="step" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    color: '#374151'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="confidence" 
                  stroke="#26de81" 
                  strokeWidth={3}
                  fill="url(#confidenceGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Metadata */}
        <div style={styles.metadataGrid}>
          <div style={styles.metadataBox}>
            <div style={styles.metadataLabel}>Entry ASN</div>
            <div style={styles.metadataValue}>{result.entry.asn}</div>
          </div>
          <div style={styles.metadataBox}>
            <div style={styles.metadataLabel}>Exit ASN</div>
            <div style={styles.metadataValue}>{result.exit.asn}</div>
          </div>
        </div>

      </div>
    </div>
  );
}
