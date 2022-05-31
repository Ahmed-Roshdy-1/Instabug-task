const express = require("express");

const app = express();

app.get("*", (req, res) => {
    res.sendFile(__dirname + "pages/page404.html");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});
