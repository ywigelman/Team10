const cloudinary = require('../utils/cloudinary');

// const handleResponse = async (req, res) => {
//     const result =  await handleUpload(req, res); // successfully uploaded to cloudinary 
//     // here we will send the result.url to the DS kids and wait for a response
//     //create a response e.g response = {success: true/false}
//     //if it is success we add points to the user array in the db 
//     res.status(200).send(JSON.stringify(response));
// };

const handleUpload = async (req, res) => {
    console.log(req.body.file)
    // try {
    //     let result = await cloudinary.uploader.upload(req.body.file);
    //     console.log(result);
    // }
    // catch (err) {
    //     console.log(err.stack);
    // }
};

module.exports ={handleUpload};