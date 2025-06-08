import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body;
        if(!name || !price || !image){
            return res.status(400).json({success: false, message: "All fields are required"});
        }
        const product = await Product.create({ name, price, image });
        return res.status(201).json({success: true,message: "Product created successfully", data: product});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}