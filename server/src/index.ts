import express, {Request, Response, NextFunction} from 'express';
import mongoose from "mongoose"
import cors from "cors"
import userRouter from "./routes/api/userRoutes";
import path from "path"
import {HttpCode} from "./constatns/httpCodes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT
const uriDb = process.env.URI_DB as string

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json())

app.use("/api/users", userRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        message: `Use api on routes ${req.baseUrl}/api/users`,
        data: "Not found",
    });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    err.status = err.status ? err.status : HttpCode.INTERNAL_SERVER_ERROR;
    res.status(err.status).json({
        status: err.status === HttpCode.INTERNAL_SERVER_ERROR ? "fail" : "error",
        code: err.status,
        message: err.message,
        data: err.status === HttpCode.INTERNAL_SERVER_ERROR ? "Internal Server Error" : err.data,
    });
});

async function start() {
    try{
        await mongoose.connect(uriDb)
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (e: any) {
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start()