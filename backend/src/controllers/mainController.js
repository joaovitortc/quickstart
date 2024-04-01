const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  console.log('Get method at /test was requested');
  res.header('Access-Control-Allow-Origin', '*');
  res.json({ message: "Hi from backend" });
});

module.exports = router;
