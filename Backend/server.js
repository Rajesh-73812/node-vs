const express = require("express");
const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("✅ Server running on Vercel!");
});

// ✅ Export app (don’t call app.listen here)
module.exports = app;
