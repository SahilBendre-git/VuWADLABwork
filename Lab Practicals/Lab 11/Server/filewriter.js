const express = require("express");

const fileStream = require("fs").promises;

const Route = express.Router();

async function WritetoFile(obj) {

    let fD;

    try{
        fD = await fileStream.readFile("dataset.txt", "utf8");
    } catch(e) {
        console.error(e);
        res.status(500).json(
            {message: "An error occured"}
        );
        return;
    }

    //File read successfully

    const userObject = JSON.parse(fD);

    userObject.push(obj);

    try{
      await fileStream.writeFile("dataset.txt", JSON.stringify(userObject), "utf8"); 
    } catch(e) {
      console.log(e);
      return;
    }

}

async function checkExistence(user_email, user_phone) {
    
    let FD

    try {
        FD = await fileStream.readFile("dataset.txt", "utf8");
    } catch(e) {
        console.error(e);
        res.status(500).json({message: "An error occured"});
        return -1;
    }

    let flag = false;

    for(X in FD) {
        if(FD[X].email == user_email || FD[X].phone == user_phone)
        {
            flag = true;
            break;
        }
    }

    if(flag) return 1; else return 0;

}

Route.post("/", async (req, res) => {

    const E_Code = await checkExistence(req.body.email, req.body.phone);

    if(E_Code == -1) return;

    if(E_Code == 1) {
        //user exists
        res.status(201).json({message: "User already exists"});
        return;
    }
    else {
    try{
        await WritetoFile(req.body);
    } catch(err) {
        console.error(err)
        res.status(500).json({message: "An error occured while writing changes!"});
        return;
    }
    res.json({message: "Request Fulfilled"})
}})

module.exports = Route;