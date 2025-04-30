const router = require('express').Router();
const Product = require("../models/Product");

router.post("/",async (req,res)=>{
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(err)
    }
});
//GET ALL PRODUCT
router.get("/all",async(req,res)=>{
    try {
        const products = await Product.find(req.params.id)
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(err);
    }
});
//updated METHOD
router.put("/:id",async(req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json(err);  
    }
});
//DELET METHOD
router.delete("/:id",async(req,res)=>{
    try {
       await Product.findByIdAndDelete(req.params.id)
       res.status(200).json("user has been delet succesfully"); 
    } catch (error) {
        res.status(500).json(err)
    }
});
module.exports = router;