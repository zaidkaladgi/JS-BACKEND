require('dotenv').config()
const express = require('express');

const app = express();
const port = 4000;


app.get("/", (req, res) => {
    res.send("Welcome to Zaid's Backend Server!");
});


app.get("/about", (req, res) => {
    res.send("My name is Zaid.");
});
app.get("/age", (req, res) => {
    res.send("My age is 21.");
});


app.get("/college", (req, res) => {
    res.send("I am studying Computer Engineering.");
});
app.get("/skills", (req, res) => {
    res.send("I know Java, JavaScript, HTML and CSS.");
});
app.get("/skillset", (req, res) => {
    res.send("I know apti,dsa,fsa,Java, JavaScript, HTML and CSS.");
});
app.get("/city",(req,res) => {


    res.send("I LIVE IN SOLAPUR");
});



app.get("/country",(req,res) => {


    res.send("I AM A RESIDENT OF INDIA")
})



app.get("/youtube",(req,res) => {



    res.send("<h2>CHAI AUR CODE</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
});
