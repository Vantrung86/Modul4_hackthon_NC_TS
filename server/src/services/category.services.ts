import database from "../config/config";

//lấy tất cả
export const getCategoryMysql = async()=>{
    try {
        const [result] = await database.execute("select * from category")
        return result
    } catch (error) {
        console.log(error);
    }
}
//lấy 1
export const getCategoryByIdMysql=async(id:number)=>{
    try {
        const [result] = await database.execute("select * from category where category_id=?",[id])
        return result
    } catch (error) {
        console.log(error); 
    }
}
//thêm
export const addCategoryMysql=async(name:string)=>{
    try {
        const [result] = await database.execute("insert into category(name) values (?)",[name])
        return result
    } catch (error) {
        console.log(error); 
    }
}
