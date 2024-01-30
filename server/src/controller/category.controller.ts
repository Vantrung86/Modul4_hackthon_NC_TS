import { addCategoryMysql, getCategoryByIdMysql, getCategoryMysql } from '../services/category.services';
import { Request, Response } from "express";

//lấy tất cả
export const getCategory = async(req:Request,res:Response)=>{
    try {
        const result = await getCategoryMysql()
        res.status(200).json({
            message:"lấy tất cả category thành công",
            data:result
        })  
    } catch (error) {
        console.log(error);
    }
}
//lấy 1
export const getCategoryById=async(req:Request,res:Response)=>{ 
    try {
        const {id} = req.params
        const result = await getCategoryByIdMysql(Number(id))
        res.status(200).json({
            message:"lấy 1 category thành công",
            data:result
        })    
    } catch (error) {
        console.log(error);  
    }
}
//thêm
export const addCategory=async(req:Request,res:Response)=>{
    try {
        const {name} = req.body
        const result = await addCategoryMysql(String(name))
        res.status(201).json({
            message:"thêm category thành công",
            data:result
        })    
    } catch (error) {
        console.log(error);  
    }
}

