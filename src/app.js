const express = require("express");
require("../src/db/conn"); //calling the connection file from the main src file

//importing the schema model
const MensRanking = require("../src/models/mens");


const app = express();
const port = process.env.PORT || 8001;

//middleware
//Express doesn’t handle reading data from the <form> element on it’s own. We have to add another package called body-parser to gain this functionality.
app.use (express.json());
//haldling post request

app.post("/mens", async (req, res) => {
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save(); //this method is to return the promise
        res.status(100).send(insertMens); //used status propety to change the status code. 
    }catch (e){
        res.status(400).send(e);
    }   
})

//haldling get request

app.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({});
        res.send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

//first route to check if the get request is working. 
// app.get("/", async (req,res) => {
//     res.send("Hello world!!!")
// })

//check app is listening to the port(successful)

app.listen(port, () => {
    console.log('The connection is live at port number. 8001')
})