<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 980px; margin:auto;">

<!-- ========================== -->
<!--       HEADER SECTION       -->
<!-- ========================== -->
<h1 align="center" style="margin-top:10px; font-size:34px; color:#1E3A8A;">
🚨 TN POLICE — HACKATHON 2025 🚨
</h1>

<h2 align="center" style="font-size:22px; font-weight:600; color:#334155; margin-top:-10px;">
Problem Theme: <span style="color:#0D9488;">TOR – Unveil : Peel the Onion</span>
</h2>

<hr style="margin:22px 0;">

<!-- ========================== -->
<!--     PROBLEM STATEMENT      -->
<!-- ========================== -->

<h2>🧩 Problem Statement</h2>
<p style="font-size:16px;">
TOR-based crimes pose a major challenge for cybercrime units due to anonymized routing.  
The task is to design an **analytical system** capable of identifying the *probable origin IPs* behind TOR traffic (emails, browsing, dark web activity) by correlating:
</p>

<ul>
  <li><b>TOR node metadata</b> (Entry, Guard, Exit relays)</li>
  <li><b>Network logs / PCAP evidence</b></li>
  <li><b>Traffic timing patterns</b></li>
  <li><b>AS / Geo intelligence</b></li>
</ul>

<p>
The goal is to support investigators with actionable intelligence, visualizations, risk scoring, and forensic reporting.
</p>

<hr>

<!-- ========================== -->
<!--        NEEDS SECTION       -->
<!-- ========================== -->

<h2>📌 System Needs / Requirements</h2>

<p>The solution must address the following functional requirements:</p>

<ul>
  <li>✔ Automated TOR relay/node extraction</li>
  <li>✔ Time-based correlation of nodes</li>
  <li>✔ Accurate Entry/Guard node identification</li>
  <li>✔ Timeline reconstruction + path mapping</li>
  <li>✔ Real-time PCAP/log support</li>
  <li>✔ Confidence scoring + risk metrics</li>
</ul>

<p style="background:#F1F5F9; padding:12px; border-left:4px solid #0284C7; border-radius:6px;">
<b>Objective:</b> Build a reliable deanonymization support system to assist cybercrime investigators in identifying the most probable origin behind TOR traffic.
</p>

<hr style="margin:22px 0;">


<!-- ========================== -->
<!--       SOLUTION TITLE       -->
<!-- ========================== -->

<h1 align="center">📡 <span style="color:#4A90E2;">TOR-Unveil</span> — Deanonymization Support System</h1>

<p align="center" style="font-size:17px;">
A law-enforcement intelligence platform that combines  
<b>correlation modeling • relay intelligence • risk scoring</b><br>
to reveal the most likely TOR origin nodes.
</p>

<hr>

<!-- ========================== -->
<!--     SYSTEM OVERVIEW        -->
<!-- ========================== -->

<h2>🏛 System Overview</h2>
<p>
TOR-Unveil analyzes suspected TOR traffic by cross-referencing network logs with authenticated TOR relay datasets.  
It applies correlation models + ASN/Geo-Risk scoring to assist investigators in narrowing down potential origin nodes used during cyber offences.
</p>

<hr>

<!-- ========================== -->
<!--    SYSTEM ARCHITECTURE     -->
<!-- ========================== -->

<h2>🔷 System Architecture</h2>
<div align="center">
  <img width="85%" src="https://github.com/user-attachments/assets/cd8755bd-abad-4154-99b4-bfca269a0e7e" alt="Architecture Diagram">
</div>

<p><b>Modules include:</b></p>
<ul>
  <li>Onionoo API TOR Node Fetcher</li>
  <li>Log / PCAP Parser</li>
  <li>Correlation Engine</li>
  <li>Entry Node Predictor</li>
  <li>Confidence Scoring</li>
  <li>AS/Geo-Risk Intelligence ⭐</li>
  <li>React-based Investigator Dashboard</li>
</ul>

<hr>

<!-- ========================== -->
<!--        PROCESS FLOW        -->
<!-- ========================== -->

<h2>🔶 Process Flow</h2>
<div align="center">
  <img width="85%" src="https://github.com/user-attachments/assets/97722c71-ce35-4981-87a1-bfcf68c9be48" alt="Process Flow">
</div>

<p>
Dataset → Node Correlation → Entry Node Prediction → Risk Evaluation → Visualization → Report Generation
</p>

<hr>

<!-- ========================== -->
<!--        DATA FLOW           -->
<!-- ========================== -->

<h2>🔹 Data Flow</h2>
<div align="center">
  <img width="90%" src="https://github.com/user-attachments/assets/6c408486-2304-4dfc-8b4d-0f66ee1c09ac" alt="Data Flow Diagram">
</div>

<p>
Uploaded logs are parsed, enriched with TOR metadata, processed through scoring engines, and delivered to a dashboard for analysis.
</p>

<hr>

<!-- ========================== -->
<!--      KEY CAPABILITIES      -->
<!-- ========================== -->

<h2>🚔 Key Capabilities</h2>

<table style="width:100%; border-collapse: collapse;">
  <tr style="background:#f0f0f0;">
    <th style="padding:10px; text-align:left;">Feature</th>
    <th style="padding:10px; text-align:left;">Description</th>
  </tr>

  <tr><td style="padding:10px;">TOR Node Collection</td><td style="padding:10px;">Real-time Onionoo relay metadata</td></tr>
  <tr><td style="padding:10px;">Log Parsing</td><td style="padding:10px;">Timing/IP extraction from evidence</td></tr>
  <tr><td style="padding:10px;">Entry Node Prediction</td><td style="padding:10px;">Timing-based correlation</td></tr>
  <tr><td style="padding:10px;">AS/Geo-Risk Scoring ⭐</td><td style="padding:10px;">ASN + country overlap detection</td></tr>
  <tr><td style="padding:10px;">Visualization</td><td style="padding:10px;">Circuit mapping, scoring, timelines</td></tr>
  <tr><td style="padding:10px;">Forensic Support</td><td style="padding:10px;">Investigation-ready reports</td></tr>
</table>

<hr>

<!-- ========================== -->
<!--     UNIQUE INNOVATION      -->
<!-- ========================== -->

<h2>💡 Unique Innovation — AS/Geo-Risk Scoring</h2>
<p style="background:#F8FAFC; padding:12px; border-left:4px solid #38BDF8; border-radius:6px;">
Unlike traditional timing-only deanonymization, TOR-Unveil adds  
<b>ASN correlation + jurisdiction risk weighting</b> to improve entry-node prediction accuracy in cybercrime investigations.
</p>

<hr>

<!-- ========================== -->
<!--        TECH STACK          -->
<!-- ========================== -->

<h2>🛠 Tech Stack</h2>
<ul>
  <li><b>Frontend:</b> React, Vite</li>
  <li><b>Backend:</b> Node.js, Express</li>
  <li><b>Data Source:</b> Onionoo API</li>
  <li><b>Visualization:</b> Recharts / Graph Elements</li>
</ul>

<hr>

<!-- ========================== -->
<!--     CURRENT PROGRESS       -->
<!-- ========================== -->

<h2>⚙️ Current Status (Working Prototype)</h2>
<ul>
  <li>✔ TOR Node Fetcher</li>
  <li>✔ Log Parser</li>
  <li>✔ Entry Node Predictor</li>
  <li>✔ Confidence Scoring System</li>
  <li>✔ Police Dashboard UI</li>
  <li>✔ Graph + Risk Visualization</li>
</ul>

<hr>

<!-- ========================== -->
<!--       SCREENSHOTS          -->
<!-- ========================== -->

<h2>🖼 Prototype Screenshots</h2>

<img width="100%" src="https://github.com/user-attachments/assets/f7b5401c-7721-4e45-8582-85c21cb2ca19" />
<img width="100%" src="https://github.com/user-attachments/assets/593e9218-480c-4b51-9d96-c6157c27685c" />
<img width="100%" src="https://github.com/user-attachments/assets/092eb879-9dc4-46fa-930c-90d45d415ab9" />
<img width="100%" src="https://github.com/user-attachments/assets/bf165d7e-9902-49bf-ad16-ce21c39ab9de" />
<img width="100%" src="https://github.com/user-attachments/assets/aa042861-6539-49f5-9216-1b93906557b7" />

<hr>
<div>
  <h2>Prototype Video</h2>
  <a>
  
https://drive.google.com/file/d/15IlsspLuCjZDmL21pZO6v7tAo7jwUVCw/view?usp=sharing
  </a>
</div>
<hr>


<!-- ========================== -->
<!--           TEAM             -->
<!-- ========================== -->

<h2>👥 Team</h2>
<table style="width:100%; border-collapse: collapse;">
  <tr style="background:#f0f0f0;">
    <th style="padding:10px; text-align:left;">Name</th>
    <th style="padding:10px; text-align:left;">Role</th>
  </tr>
  <tr><td style="padding:10px;">Dhinesh B (Team Lead)</td><td style="padding:10px;">Frontend & Integration</td></tr>
  <tr><td style="padding:10px;">Harish E</td><td style="padding:10px;">Backend & Analytics</td></tr>
  <tr><td style="padding:10px;">Jagadish KG</td><td style="padding:10px;">Documentation & Design</td></tr>
</table>

<hr>

<h3 align="center" style="color:#1E3A8A;">
🚀 TOR-Unveil — Advancing Smarter Cybercrime Investigations
</h3>

</div>
