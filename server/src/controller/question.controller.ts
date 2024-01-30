import { Request, Response } from "express";
import { addQuestionMysql, getAnswerByQuestionMysql, getQuestionByCategoryLevelLimit, getQuestionByIdMysql, getQuestionMysql } from "../services/question.services";


export const getQuestion = async(req:Request,res:Response)=>{
    try {  
//lấy theo category_id,level,limit
        const {category_id,level,limit} = req.query
        if (category_id && level && limit) {
            const result = await getQuestionByCategoryLevelLimit(Number(category_id),Number(level),Number(limit))
            res.status(200).json({
                message:"lấy question theo category thành công",
                data:result
            })  
        }else{
//lấy tất cả
            const result = await getQuestionMysql()
            res.status(200).json({
                message:"lấy tất cả question thành công",
                data:result
            })  
        }
    } catch (error) {
        console.log(error);
    }
}
//lấy 1 
export const getQuestionById=async(req:Request,res:Response)=>{ 
    try {
        const {id} = req.params
        const result = await getQuestionByIdMysql(Number(id))
        res.status(200).json({
            message:"lấy 1 question thành công",
            data:result
        })    
    } catch (error) {
        console.log(error);  
    }
}
//thêm
export const addQuestion=async(req:Request,res:Response)=>{  
    try {
        const {category_id,name} = req.body
        const result = await addQuestionMysql(Number(category_id),String(name))
        res.status(201).json({
            message:"thêm thành công",
            data:result
        })    
    } catch (error) {
        console.log(error);  
    }
}
//lấy câu trả lời theo câu hỏi
export const getAnswerByQuestion=async(req:Request,res:Response)=>{
    try {
        const {id} = req.params
        const result = await getAnswerByQuestionMysql(Number(id))
        res.status(200).json({
            message:"lấy câu trả lời thành công",
            data:result
        })    
    } catch (error) {
        console.log(error);  
    }
}