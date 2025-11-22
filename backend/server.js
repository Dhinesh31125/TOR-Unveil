const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { parseSampleLogs } = require("./parser");

const app = express();
app.use(cors());
app.use(express.json());

// === Simple TOR Node fetch (Onionoo summary)
app.get("/api/nodes", async (req, res) => {
  try {
    // Prototype: fetch summary from Onionoo
    const r = await axios.get("https://onionoo.torproject.org/summary");
    const relays = r.data && r.data.relays ? r.data.relays.slice(0, 80) : [];
    res.json({ success: true, relays });
  } catch (err) {
    // fallback: return empty with error note
    console.error("Onionoo fetch failed:", err.message || err);
    res.status(200).json({ success: false, relays: [], error: "Onionoo fetch failed (prototype)" });
  }
});

// === Return parsed logs (sample)
app.get("/api/logs", (req, res) => {
  try {
    const logs = parseSampleLogs();
    res.json({ success: true, logs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// === Fake prediction + AS/Geo risk scoring (prototype)
function riskScore(entryASN, exitASN, entryCountry, exitCountry) {
  if (entryASN === exitASN && entryCountry === exitCountry) return "High";
  if (entryASN === exitASN && entryCountry !== exitCountry) return "Medium";
  return "Low";
}

app.post("/api/analyze", (req, res) => {
  // Accepts { type: 'ip'|'file', ip?: '1.2.3.4', logs?: [...] }
  // For prototype we respond with a fake predicted path + score
  const { type = "ip", ip } = req.body || {};
  // Fake resolved values (replace with real lookups later)
  const entry = { ip: ip || "185.0.0.2", asn: "AS64512", country: "A" };
  const exit = { ip: "203.0.113.5", asn: "AS64512", country: "B" };
  const score = riskScore(entry.asn, exit.asn, entry.country, exit.country);

  const result = {
    path: `Client → Guard(${entry.ip}) → Relay(??) → Exit(${exit.ip}) → Internet`,
    confidence: "72%",
    risk: score,
    entry,
    exit,
    notes: "Prototype result — replace with real correlation logic"
  };

  res.json({ success: true, result });
});

// quick health
app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
