const multer = require("multer");

// storefile is a pre defined fuction
const storefile = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (file.mimetype !== "image/png") {
    return cb(new Error("something went wrong"), false);
    // return cb(err, false);
  } else {
    return cb(null, true);
  }
}

const upload = multer({ storage: storefile, fileFilter: fileFilter });

module.exports = upload;
