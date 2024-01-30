import categoryRouter from "./category.router"
import questionRouter from "./question.router"

const rootRouter = (app:any)=>{
    categoryRouter(app)
    questionRouter(app)
}
export default rootRouter