import express from "express";

const app = express()
const __dirname = import.meta.dirname
const path = __dirname + "/dist"
app.use(express.static(path))

app.listen(3000, () => {
    console.log(`app runs at 3000`)
})