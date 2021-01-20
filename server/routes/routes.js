const express = require('express');
const { handleUpload } = require('../controllers/addImage');
const multer = require('multer'); 
const router = express.Router();

//multer code
const storage = multer.diskStorage({});
const upload = multer({ storage });
router.post('/uploadImage', upload.single('file'), handleUpload);

//routes 
//e.g. router.getORputORpost('/something', controllerfunc)

module.exports = router;