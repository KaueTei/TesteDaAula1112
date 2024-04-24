const express = require("express");
const cors = require("cors");
const axios = require("axios");

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", async (req, res) => {
    console.log("Enviando dados");
    try {
        const response = await axios.get(
            'https://api.callmebot.com/whatsapp.php?phone=5512997442601&text=This+is+a+test&apikey=1563068'
        );
        console.log("received", response.data);
        res.json(response.data);
    } catch (error) {
        console.log("error", error);
        res.status(500).send("Erro ao enviar dados");
    }
});

api.listen(3000, () => {
    console.log("App rodando na porta 3000");
});



