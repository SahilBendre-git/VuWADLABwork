const express = require("express");

const Router = express.Router();

const fileStream = require("fs").promises;

Router.delete("/", async (req, res) => {
    console.log("Profile delete request recieved for user "+req.query.id);

    try{
        //Try deleting user

        const fileData = await fileStream.readFile("dataset.txt", "utf8");

        const newObj = JSON.parse(fileData);

        newObj.pop(req.query.id, 1);

        await fileStream.writeFile("dataset.txt", JSON.stringify(newObj), "utf8");

        res.status(200).json({message: "Deletion Success"});
    }
    catch(e) {
        console.error("error => ", e);

        res.status(500).json({message: "An error occured while deleting user"});
    }

})

module.exports = Router;