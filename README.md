<h1>📡 TOR‑Unveil — Deanonymization Support System</h1>
<p>TOR‑Unveil is a law‑enforcement intelligence platform designed to help cybercrime units analyze suspected TOR traffic. It identifies possible TOR Guard/Entry nodes by correlating network logs with real‑time TOR relay data and applies AS/Geo‑Risk intelligence to produce actionable investigation insights.</p>

<h2>🏛 System Overview</h2>
<p>The system uses a modular analytical approach where TOR data collection, log processing, correlation modelling, and risk scoring are integrated into a secure police dashboard for visualization and forensic reporting.</p>p

<h2>🔷 System Architecture Overview</h2><br>
<img width="1725" height="1055" alt="Architecture drawio 1" src="https://github.com/user-attachments/assets/cd8755bd-abad-4154-99b4-bfca269a0e7e" />

<p>The architecture consists of multiple core components including Onionoo API‑based TOR node fetcher, log/PCAP parser, correlation engine, Entry node predictor, confidence scoring, and AS/Geo‑Risk analyzer. These modules are connected through a Node.js backend that supplies processed intelligence to a React‑based police UI for case review and forensic documentation.</p>

<h1>🔹 Purpose: Shows how every module interacts end‑to‑end to form a complete operational workflow.</h1>

<h1>🔶 Process Flow</h1>
<br>
![WhatsApp Image 2025-11-23 at 00 02 29_e46eae4d](https://github.com/user-attachments/assets/1e8f6d0a-b7be-45f5-944b-89101427862a)

<p>The system begins with dataset preparation and node correlation, followed by entry node identification and risk evaluation. Predicted results are visually mapped and returned to the analyst for evidence review in cyber investigations.</p>

<h2>🔹 Purpose: Illustrates the logical sequence the system follows during analysis.</h2>

<h2>🔹 Data Flow</h2>
<br>
<img width="2520" height="1373" alt="Data_Flow drawio 1" src="https://github.com/user-attachments/assets/6c408486-2304-4dfc-8b4d-0f66ee1c09ac" />

<p>Logs uploaded by the user are parsed and enriched with TOR node metadata before undergoing analytical computation. The backend transforms this into intelligence output that is visualized at the frontend and archived for forensic reporting.</p>

<h2>🔹 Purpose: Explains how data moves and transforms within the system.</h2>

<h2>🚔 Key Capabilities</h2>
<p>Feature	Description
TOR Node Collection	Live metadata from Onionoo directory
Log Parsing	Extracts timing, IP and protocol evidence
Entry Node Prediction	Correlates candidate relays to traffic
AS/Geo Risk Scoring ⭐	Assesses adversarial likelihood
Visualization	Circuit mapping + Confidence scoring
Forensic Support	Investigation‑ready insights</p>

<h2>💡 Unique Innovation
AS/Geo‑Risk Scoring:<h2>
<p>Evaluates ASN and jurisdiction overlaps between relays to determine correlation risk and reinforce prediction confidence — a major step beyond standard timing‑based techniques.</p>

<h2>🛠 Tech Stack:</h2>
<p>Layer	Technology
Frontend	React, Vite
Backend	Node.js, Express
Data Source	Onionoo API
Visualization	Recharts / Graph elements</p>

<h2>⚙️ Current Status (Working Prototype):</h2>
<p>✔ TOR node fetch
✔ Log parser functional
✔ Entry node prediction
✔ Confidence scoring
✔ Police dashboard UI
✔ Graph + risk badge visualization</p>

<h2>👥 Team 
Name	                  Role</h2>
<p>Dhinesh B(Team Lead)   	Frontend & Integration
Harish E(Member 1)      Backend & Analytics
Jagadish KG(Member 2)	  Documentation & Design</p>
