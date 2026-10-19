const express = require("express");

const cors = require("cors");

const fileWriter = require("./filewriter");

const fileReader = require("./filereader");

const profDeleter = require("./delprof");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/postapi", fileWriter);

app.use("/api/getapi", fileReader);

app.use("/api/deleteprofile", profDeleter);

//app.use("/api/delprof", profDeleter);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is live");
})

app.listen(2001, "0.0.0.0", () => {

  console.log("Server is running on port 2001");

});