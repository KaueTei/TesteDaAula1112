const express = require("express");
const cors = require("cors");

const api = express();

api.use(cors());
api.use(express.json());
api.use("/", async (req, res) => {
    console.log("chamou");
    return res.json("funcionou");
});
api.listen(3001, () => {
    console.log("App rodando na porta 3001");
});


