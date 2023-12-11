const multer = require('multer');


/**
 * Error Handler Factory
 */
export class MulterMiddleware {
  /**
   * error handler
   */
  static createImageMulterMiddleware() {
    const upload = multer({
      dest: `uploads/`,
      fileFilter: (req: any, file: any, cb: any) => {
        if (
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/jpeg'
        ) {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(
            new Error('Only .png, .jpg and .jpeg format allowed!')
          );
        }
      },
    });
    return upload;
  }
}
