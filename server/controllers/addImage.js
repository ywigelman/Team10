const cloudinary = require('../utils/cloudinary');

const handleUpload = async (req, res) => {
    try {
        let result = await cloudinary.uploader.upload(req.file.path);
        console.log(result);
    }
    catch (err) {
        console.log(err.stack);
    }
};

module.exports ={handleUpload};