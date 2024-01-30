import database from "../config/config";

//lấy tất cả
export const getQuestionMysql = async()=>{
    try {
        const [result] = await database.execute("select * from question")
        return result
    } catch (error) {
        console.log(error);
    }
}
//lấy 1 
export const getQuestionByIdMysql=async(id:number)=>{
    try {
        const [result] = await database.execute("select * from question where question_id=?",[id])
        return result
    } catch (error) {
        console.log(error); 
    }
}
//thêm
export const addQuestionMysql=async(category_id:number,name:string)=>{
    try {
        const [result] = await database.execute("insert into question(category_id,content) values (?,?)",[category_id,name])
        return result
    } catch (error) {
        console.log(error); 
    }
}
//lấy câu trả lời theo câu hỏi
export const getAnswerByQuestionMysql =async(id:number)=>{
    try {
        const [result] = await database.execute("select * from `question` join answer on question.question_id=answer.question_id where question.question_id=?",[id])
        return result
    } catch (error) {
        console.log(error); 
    }
}
//lấy câu hỏi theo category_id,level,limit
export const getQuestionByCategoryLevelLimit =async(category_id:number,level:number,limit:number)=>{
    try {
        const [result] = await database.execute(`select * from question where category_id=${category_id} and level=${level} limit ${limit}`)
        return result
    } catch (error) {
        console.log(error); 
    }
}
