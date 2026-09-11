import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "text/csv" ||
            file.originalname.toLowerCase().endsWith(".csv")
        ) {
            cb(null, true);
        }
        else {
            cb(new Error("Only CSV files are allowed"));
        }
    }
});

export default upload;