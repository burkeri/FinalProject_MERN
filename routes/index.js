// dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const multer = require("multer");

// multer setup
const storage = multer.diskStorage({
  destination: "./client/public/uploads",
  filename: function(req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
});

// API data routes
router.use("/api", apiRoutes);

// user routes
router.use("/", userRoutes);

// upload pic route
router.post("/upload", upload.single("myImage"), (req, res, err) => {
  console.log("Request ---", req.body);
  console.log("Request file ---", req.file); //Here you get file.
  /*Now do where ever you want to do*/
  if (!err) return res.send(200).end();
});

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
