const multer = require('multer');

const upload = multer({
    dest: 'uploads/'
}).single('upfile');

exports.metadataFile = (req, res, next) => {
    upload(req, res, err => {
        if (err) {
            res.status(400).send("Unable to upload the file");
        }
        //store metadata data for response
        let metadata = {
            "name": req.file.originalname,
            "type": req.file.mimetype,
            "size": req.file.size
        }
        res.send(metadata);
    });
}