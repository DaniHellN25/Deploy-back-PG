"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './upload');
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == 'image/jpeg') {
            callback(null, true);
        }
        else {
            console.log('only png and jpg file supported');
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});
module.exports = upload;
