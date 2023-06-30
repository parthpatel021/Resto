//jshint esversion:6

require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

main().catch(err => console.log(err));

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/restoDB');
    mongoose.set("useCreateIndex", true);

    // //Fruits Insertion
    // const fruitSchema = new mongoose.Schema({
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     rating: {
    //         type: Number,
    //         min: 1,
    //         max: 10
    //     },
    //     review: String
    // });
    // // New Collection
    // const Fruit = mongoose.model("Fruit", fruitSchema);

    app.get("/",async function(req,res){
        res.send("Backend is working!");
    });

    app.listen(5000,async function() {
        console.log("Server started on port 5000");
    });  
}