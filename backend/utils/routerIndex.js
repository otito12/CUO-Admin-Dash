const express = require("express");
const router = express.Router();

// let us know app is working
// change to spit out list of endpoints
router.get("/", async (req, res) => {
  res.json(["App is almost Working"]);
});

// // connect service routers
// router.use("/venues", venueRouter);
// router.use("/user", usersRouter);

module.exports = router;
