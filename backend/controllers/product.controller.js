import Product from "../models/product.model.js";
import mongoose from "mongoose";

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

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({success: true, message: "Products fetched successfully", data: products});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

export const updateProduct = async (req, res) => {
    try {        
        const { id } = req.params;
        const { name, price, image } = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({success: false, message: "Invalid product ID"});
        }
        const product = await Product.findByIdAndUpdate(id, { name, price, image }, { new: true });
        return res.status(200).json({success: true,message: "Product updated successfully", data: product});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({success: false, message: "Invalid product ID"});
        }
        const product = await Product.findByIdAndDelete(id);
        return res.status(200).json({success: true,message: "Product deleted successfully"});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}
