import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express()
const __dirname = import.meta.dirname
const path = __dirname + "/dist"
app.use(express.static(path))

app.listen(3000)