import { addQuestion, getAnswerByQuestion, getQuestion, getQuestionById } from "../controller/question.controller";


const questionRouter=(app:any)=>{
    app.get("/api/v1/questions",getQuestion);
    app.get("/api/v1/questions/:id",getQuestionById);
    app.post("/api/v1/questions",addQuestion);
    app.get("/api/v1/questions/:id/answer",getAnswerByQuestion);
}
export default questionRouter