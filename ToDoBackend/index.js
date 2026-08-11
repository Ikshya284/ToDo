

import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { router as todoRoutes} from "./src/routes/todoRoutes.js";
import { router as authRoutes} from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/api/todos", todoRoutes);
app.use("/api/auth",  authRoutes);


app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
});


