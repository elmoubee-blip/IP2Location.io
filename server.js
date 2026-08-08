const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.ip2location.io/";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function validIp(value) {
  if (!value) return true; // empty means detect requester's IP
  // IPv4 validation
  const v4 = /^(?:\d{1,3}\.){3}\d{1,3}$/;
  if (v4.test(value)) {
    return value.split(".").every(n => Number(n) >= 0 && Number(n) <= 255);
  }
  // Practical IPv6 validation
  return /^[0-9a-fA-F:]+$/.test(value) && value.includes(":");
}

app.get("/api/lookup", async (req, res) => {
  const ip = String(req.query.ip || "").trim();

  if (!validIp(ip)) {
    return res.status(400).json({ error: "Please enter a valid IPv4 or IPv6 address." });
  }

  try {
    const url = new URL(API_BASE);
    if (ip) url.searchParams.set("ip", ip);
    url.searchParams.set("format", "json");

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || data.error) {
      return res.status(response.status || 502).json({
        error: data.message || data.error || "IP2Location lookup failed."
      });
    }

    res.json(data);
  } catch (error) {
    res.status(502).json({ error: "Unable to reach the IP2Location service right now." });
  }
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`IP2Location Smart Geolocator running on http://localhost:${PORT}`);
});
