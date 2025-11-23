<div style="font-family: Arial, sans-serif; line-height: 1.6;">

<h1 align="center">📡 <span style="color:#4A90E2;">TOR-Unveil</span> — Deanonymization Support System</h1>
<p align="center" style="font-size:17px;">
A law-enforcement intelligence platform to analyze suspected TOR traffic using<br>
<b>correlation modeling + risk scoring + real-time TOR relay intelligence.</b>
</p>

<hr>

<h2>🏛 System Overview</h2>
<p>
TOR-Unveil helps cybercrime units identify potential TOR Guard/Entry nodes by cross-referencing 
network logs with real-time TOR relay datasets. It uses AS/Geo-Risk intelligence and correlation 
models to produce actionable insights inside a secure police investigation dashboard.
</p>

<hr>

<h2>🔷 System Architecture</h2>
<div align="center">
  <img width="85%" src="https://github.com/user-attachments/assets/cd8755bd-abad-4154-99b4-bfca269a0e7e" alt="Architecture Diagram">
</div>
<p>
This architecture connects multiple analytical modules including:
</p>
<ul>
  <li>Onionoo API TOR Node Fetcher</li>
  <li>Log / PCAP Parser</li>
  <li>Correlation Engine</li>
  <li>Entry Node Predictor</li>
  <li>Confidence Scoring Engine</li>
  <li>AS/Geo-Risk Analyzer ⭐</li>
  <li>React-based Police Dashboard</li>
</ul>

<p><b>Purpose:</b> Shows the complete end-to-end operational workflow.</p>

<hr>

<h2>🔶 Process Flow</h2>
<div align="center">
  <img width="85%" src="https://github.com/user-attachments/assets/97722c71-ce35-4981-87a1-bfcf68c9be48" alt="Process Flow">
</div>

<p>
The workflow begins with dataset preparation → node correlation → entry node prediction → 
risk scoring → visualization of results for case analysis.
</p>

<p><b>Purpose:</b> Represents the logical order of system operations.</p>

<hr>

<h2>🔹 Data Flow</h2>
<div align="center">
  <img width="90%" src="https://github.com/user-attachments/assets/6c408486-2304-4dfc-8b4d-0f66ee1c09ac" alt="Data Flow Diagram">
</div>

<p>
Logs uploaded by investigators are parsed and enriched with TOR metadata. The backend transforms 
this into intelligence reports that are visualized in the frontend dashboard.
</p>

<p><b>Purpose:</b> Demonstrates how data moves through the system.</p>

<hr>

<h2>🚔 Key Capabilities</h2>

<table style="width:100%; border-collapse: collapse;">
  <tr style="background:#f0f0f0;">
    <th style="padding:10px; text-align:left;">Feature</th>
    <th style="padding:10px; text-align:left;">Description</th>
  </tr>
  <tr>
    <td style="padding:10px;">TOR Node Collection</td>
    <td style="padding:10px;">Fetches real-time metadata from Onionoo directories</td>
  </tr>
  <tr>
    <td style="padding:10px;">Log Parsing</td>
    <td style="padding:10px;">Extracts timing, IP, and protocol evidence</td>
  </tr>
  <tr>
    <td style="padding:10px;">Entry Node Prediction</td>
    <td style="padding:10px;">Matches candidate relays using timing correlation</td>
  </tr>
  <tr>
    <td style="padding:10px;">AS/Geo-Risk Scoring ⭐</td>
    <td style="padding:10px;">Identifies ASN + jurisdictional overlaps</td>
  </tr>
  <tr>
    <td style="padding:10px;">Visualization</td>
    <td style="padding:10px;">Circuit mapping + confidence metrics</td>
  </tr>
  <tr>
    <td style="padding:10px;">Forensic Support</td>
    <td style="padding:10px;">Evidence-ready insights for cyber investigators</td>
  </tr>
</table>

<hr>

<h2>💡 Unique Innovation — AS/Geo-Risk Scoring</h2>
<p>
This system evaluates ASN similarity, hosting jurisdiction, and relay-risk characteristics to 
strengthen prediction confidence — moving beyond traditional timing-only deanonymization approaches.
</p>

<hr>

<h2>🛠 Tech Stack</h2>
<ul>
  <li><b>Frontend:</b> React, Vite</li>
  <li><b>Backend:</b> Node.js, Express</li>
  <li><b>Data Source:</b> Onionoo API</li>
  <li><b>Visualization:</b> Recharts / Graph elements</li>
</ul>

<hr>

<h2>⚙️ Current Status (Working Prototype)</h2>
<ul>
  <li>✔ TOR node fetch</li>
  <li>✔ Log parser functional</li>
  <li>✔ Entry node prediction</li>
  <li>✔ Confidence scoring</li>
  <li>✔ Police dashboard UI</li>
  <li>✔ Graph + risk mapping visualization</li>
</ul>

<hr>
<h2>Protoype ScreenShot</h2>
<img width="1920" height="1080" alt="Screenshot (37) 1" src="https://github.com/user-attachments/assets/f7b5401c-7721-4e45-8582-85c21cb2ca19" />

<img width="1920" height="1080" alt="Screenshot (41) 1" src="https://github.com/user-attachments/assets/593e9218-480c-4b51-9d96-c6157c27685c" />
<img width="1920" height="1080" alt="Screenshot (42) 1" src="https://github.com/user-attachments/assets/092eb879-9dc4-46fa-930c-90d45d415ab9" />
<img width="1920" height="1080" alt="Screenshot (44) 1" src="https://github.com/user-attachments/assets/bf165d7e-9902-49bf-ad16-ce21c39ab9de" />
<img width="1920" height="1080" alt="Screenshot (45) 1" src="https://github.com/user-attachments/assets/aa042861-6539-49f5-9216-1b93906557b7" />




<hr>

<h2>👥 Team</h2>
<table style="width:100%; border-collapse: collapse;">
  <tr style="background:#f0f0f0;">
    <th style="padding:10px; text-align:left;">Name</th>
    <th style="padding:10px; text-align:left;">Role</th>
  </tr>
  <tr>
    <td style="padding:10px;">Dhinesh B (Team Lead)</td>
    <td style="padding:10px;">Frontend & Integration</td>
  </tr>
  <tr>
    <td style="padding:10px;">Harish E (Member 1)</td>
    <td style="padding:10px;">Backend & Analytics</td>
  </tr>
  <tr>
    <td style="padding:10px;">Jagadish KG (Member 2)</td>
    <td style="padding:10px;">Documentation & Design</td>
  </tr>
</table>

<hr>

<h3 align="center">🚀 TOR-Unveil — Enabling Smarter Cybercrime Investigations</h3>

</div>
