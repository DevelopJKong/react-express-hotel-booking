import "dotenv/config";
import express from "express";
import "./db.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import hotelsRouter from "./routes/hotelsRouter.js";
import roomsRouter from "./routes/roomsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;
const logger = morgan("dev");
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(logger);

app.use("/api/auth", authRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/users", usersRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res
    .status(errorStatus)
    .json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
