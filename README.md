<h1>📡 TOR‑Unveil — Deanonymization Support System</h1>
<p>TOR‑Unveil is a law‑enforcement intelligence platform designed to help cybercrime units analyze suspected TOR traffic. It identifies possible TOR Guard/Entry nodes by correlating network logs with real‑time TOR relay data and applies AS/Geo‑Risk intelligence to produce actionable investigation insights.</p>

<h2>🏛 System Overview</h2>
<p>The system uses a modular analytical approach where TOR data collection, log processing, correlation modelling, and risk scoring are integrated into a secure police dashboard for visualization and forensic reporting.</p>

<h2>🔷 System Architecture </h2><br>
<img width="1725" height="1055" alt="Architecture drawio 1" src="https://github.com/user-attachments/assets/cd8755bd-abad-4154-99b4-bfca269a0e7e" />
<br>
<p>The architecture consists of multiple core components including Onionoo API‑based TOR node fetcher, log/PCAP parser, correlation engine, Entry node predictor, confidence scoring, and AS/Geo‑Risk analyzer. These modules are connected through a Node.js backend that supplies processed intelligence to a React‑based police UI for case review and forensic documentation.</p>

<p>🔹 Purpose: Shows how every module interacts end‑to‑end to form a complete operational workflow.</p>
<br>
<h1>🔶 Process Flow</h1>
<br>
<img width="1777" height="709" alt="Untitled_Diagram5 drawio 1" src="https://github.com/user-attachments/assets/97722c71-ce35-4981-87a1-bfcf68c9be48" />

<br>


<p>The system begins with dataset preparation and node correlation, followed by entry node identification and risk evaluation. Predicted results are visually mapped and returned to the analyst for evidence review in cyber investigations.</p>

<p>🔹 Purpose: Illustrates the logical sequence the system follows during analysis.</p>

<h2>🔹 Data Flow</h2>
<br>
<div><img width="2520" height="1373" alt="Data_Flow drawio 1" src="https://github.com/user-attachments/assets/6c408486-2304-4dfc-8b4d-0f66ee1c09ac" /></div>
<br>
<p>Logs uploaded by the user are parsed and enriched with TOR node metadata before undergoing analytical computation. The backend transforms this into intelligence output that is visualized at the frontend and archived for forensic reporting.</p>

<h2>🔹 Purpose: Explains how data moves and transforms within the system.</h2>

<h2>🚔 Key Capabilities</h2><br>
<p>Feature	Description<br>
TOR Node Collection	Live metadata from Onionoo directory<br>
Log Parsing	Extracts timing, IP and protocol evidence<br>
Entry Node Prediction	Correlates candidate relays to traffic<br>
AS/Geo Risk Scoring ⭐	Assesses adversarial likelihood<br>
Visualization	Circuit mapping + Confidence scoring<br>
Forensic Support	Investigation‑ready insights</p>

<h2>💡 Unique Innovation :<br>
AS/Geo‑Risk Scoring:<h2>
<p>Evaluates ASN and jurisdiction overlaps between relays to determine correlation risk and reinforce prediction confidence — a major step beyond standard timing‑based techniques.</p>

<h2>🛠 Tech Stack:</h2>
<p>Layer	Technology<br>
Frontend	React, Vite<br>
Backend	Node.js, Express<br>
Data Source	Onionoo API<br>
Visualization	Recharts / Graph elements</p>

<h2>⚙️ Current Status (Working Prototype):</h2>
<p>✔ TOR node fetch<br>
✔ Log parser functional<br>
✔ Entry node prediction<br>
✔ Confidence scoring<br>
✔ Police dashboard UI<br>
✔ Graph + risk badge visualization</p>

<h2>👥 Team 
Name	                  Role</h2><br>
<p>Dhinesh B(Team Lead)   	Frontend & Integration<br>
Harish E(Member 1)      Backend & Analytics<br>
Jagadish KG(Member 2)	  Documentation & Design</p>
