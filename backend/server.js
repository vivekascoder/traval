require("dotenv").config({
    path: "./.env",
});
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors("*"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));
// require("./models");
// TODO: Database connection promisify
app.get("/", (req, res) => {
    return res.send("built for bon voyage hackathon 🛳️");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running localhost://${PORT}`);
});
