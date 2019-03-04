// dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const multer = require("multer");
const cloudinary = require("cloudinary");
const fileUploadMiddleware = require("../file-upload-middleware");

// Cloudinary and multer setup
cloudinary.config({
  cloud_name: "winterfreshness",
  api_key: "966246874184822",
  api_secret: "gkjsFLkyUfebwq7AVIu8yFKA104"
});

const storage = multer.memoryStorage();
const upload = multer({ storage });
const sessionRoutes = require("./session");

// API data routes
router.use("/api", apiRoutes);

// user routes
router.use("/", userRoutes);

// route to upload the picture to Cloudinary
router.post("/files", upload.single("file"), fileUploadMiddleware);

// session routes
router.use("/", sessionRoutes);

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
