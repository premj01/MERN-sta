const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
    const obj = {
        message: "server is ready",
        status: true
    }
    res.json(obj)
    // res.send("<h1>hi this is server</h1><button>Click</button>")
})

app.listen(3000, () => {
    console.log("server is ready");
})