const express = require("express");
const app = express();

const router = require("./src/Routes/index")

const PORT = 3000;

app.use("/",router);

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));
