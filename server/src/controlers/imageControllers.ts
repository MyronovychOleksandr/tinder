import path from "path";
import fs from "fs";
import {Request, Response} from "express";

export const deleteImageController = (req: Request, res: Response) => {
    const filename = req.params.filename;

    const filePath = path.join(__dirname, "..", "..", 'uploads', filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            res.status(500).json({ error: 'Deleting image error' });
        } else {
            res.json({ message: 'Image deleted successfully' });
        }
    });
}