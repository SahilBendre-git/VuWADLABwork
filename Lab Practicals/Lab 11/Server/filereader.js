const express = require("express");

const Route = express.Router();

const fileStream = require("fs").promises;

async function readFromFile() {

    let fileData;

    try{
        fileData = await fileStream.readFile("dataset.txt", "utf8");
    } catch(e) {
        console.error(e);
        return 'e';
    }

    return fileData;

}

Route.delete("/removeProfile", async (req, res) => {
    
    //Read file data first

    let fileData

    try{
        fileData = await fileStream.readFile("dataset.txt", "utf8");
    } catch(e) {
        console.log(e)
        res.status(500).json({message: "An error occured while reading data"});
        return;
    }
})

Route.get("/getAllEntries", async (req, res) => {

    const userData = await readFromFile();

    res.status(200).json(userData)

})

module.exports = Route;