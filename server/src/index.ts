import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import rootRouter from "./router/rootRouter";
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

rootRouter(app)

app.listen(process.env.PORT,()=>{
    console.log(`Đã chạy vào cổng ${process.env.PORT}`); 
})