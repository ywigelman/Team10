const express = require('express');
// const multer = require('multer'); 
const router = express.Router();

//multer code
const storage = multer.diskStorage({});
const upload = multer({ storage });
router.post('/uploadImage', upload.single('file'), sendImage);

//routes 
//e.g. router.getORputORpost('/something', controllerfunc)

module.exports = router;