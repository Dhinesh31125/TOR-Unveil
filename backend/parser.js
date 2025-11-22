// Simple log parser for prototype (reads sample JSON)
const fs = require("fs");
const path = require("path");

function parseSampleLogs() {
  try {
    const p = path.join(__dirname, "../sample_logs/log.json");
    const raw = fs.readFileSync(p, "utf8");
    const logs = JSON.parse(raw);
    // here you could do further parsing; we return as-is for prototype
    return logs;
  } catch (e) {
    return [];
  }
}

module.exports = { parseSampleLogs };
