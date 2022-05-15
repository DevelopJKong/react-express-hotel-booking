import "dotenv/config";
import express from "express";
import "./db.js";
import authRouter from "./routes/authRouter.js";
import hotelsRouter from "./routes/hotelsRouter.js";
import roomsRouter from "./routes/roomsRouter.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();
const PORT = 5000;

//middleware
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/rooms",roomsRouter);
app.use("/api/hotels",hotelsRouter);
app.use("/api/users",usersRouter);

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
});