import multer, { Multer } from 'multer';
import { Request } from 'express';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, (file.fieldname || 'file') + '-' + uniqueSuffix + extension);
    },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload: Multer = multer({
    storage: storage,
    fileFilter: fileFilter,
    dest: 'uploads/'
    // limits: { fileSize: 1024 * 1024 * 5 }, // Максимальний розмір файлу: 5 MB
});

export default upload;
