import { addCategory, getCategoryById, getCategory} from "../controller/category.controller"

const categoryRouter=(app:any)=>{
    app.get("/api/v1/categories",getCategory);
    app.get("/api/v1/categories/:id",getCategoryById);
    app.post("/api/v1/categories",addCategory);
}
export default categoryRouter