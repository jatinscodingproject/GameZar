const express = require('express');
const app = express();
const path = require('path')
const pageRoutes = require("./routes/pages");
require('dotenv').config()

app.get('/favicon.ico', (req, res) => res.status(204).end());
const PORT = process.env.PORT

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})