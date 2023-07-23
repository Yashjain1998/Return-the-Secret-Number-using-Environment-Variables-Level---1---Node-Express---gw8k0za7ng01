const express = require('express');
const app = express();
app.use(express.json());

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
   try {
    const number=process.env.NUMBER;
    if(number){
        res.status(200).json({"number":number});
    }else{
        res.status(404).json({ "err": "Not Found"});
    } 
   } catch (error) {
    res.status(404).json({ "err": "Not Found"});
   }
  
});

module.exports = app;
