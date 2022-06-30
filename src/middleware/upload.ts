const path = require('path');
const multer = require('multer');
import { Request } from "express";
import { FileFilterCallback } from 'multer'


type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

var storage = multer.diskStorage({

    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        callback(null, './upload')
    },

    filename: (req: Request, file: Express.Multer.File, cb: FileNameCallback): void => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext);
    }
});


var upload = multer({

    storage: storage,

    fileFilter: function (req: Request, file: Express.Multer.File, callback: FileFilterCallback): void {

        if (
            file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == 'image/jpeg'
        ) {
            callback(null, true)
        } else {
            console.log('only png and jpg file supported')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});


module.exports = upload