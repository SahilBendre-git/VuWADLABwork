const express = require("express"); 

const cors = require("cors"); 

const app = express(); 

app.use(cors()); 

app.use((req, res, next) => { 
    console.log("Request received:", req.method, req.url); 
    next(); 
}); 
    
app.get("/", (req, res) => {
    res.send("My Node.js backend is alive!"); 
}); 

app.get("/api/hello", (req, res) => { 
    res.json({ message: "Hello from my API!" }); 
}); 

app.get("/api/students", (req, res) => { 

    const students = [ 
        { 
            id: 1, 
            name: "Rahul", 
            course: "CSE" 
        }, 
        { 
            id: 2, 
            name: "Aman", 
            course: "AI & DS" 
        } 
    ];

    res.json(students); 
}); 

app.listen(2556, () => { 
    console.log("Server running on http://localhost:2556"); 
});