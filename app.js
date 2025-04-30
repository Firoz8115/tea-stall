const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require('./routes/product');
const orderRoute = require("./routes/order");
//const cartRoute = require('./routes/cart');
// sffuge


app.listen(5000, (req,res)=>{
 console.log("tea stall server is running")
});

app.get("/home",(req,res)=>{
    res.send("this is tea stall page is running")
});


app.use(express.json());
app.use("/api/products",productRoute);
app.use("/api/orders",orderRoute);
//app.use("/api/carts",cartRoute);

mongoose.connect('mongodb://127.0.0.1:27017/test').
then(()=>console.log("DB is connect succesfully")).
catch((err)=>console.log("DB is not connected"));
