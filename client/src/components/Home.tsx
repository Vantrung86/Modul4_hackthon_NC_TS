import { useEffect, useState } from "react";
import "./style.css"
import publicAxios from "../config/publicAxios";

export default function Home() {
  type Category={
    category_id:number
    name:string
  }
  const [category,setCategory] = useState<Category[]>([])
  const getCategory = async()=>{
    try {
      let response = await publicAxios.get("/api/v1/categories")
      setCategory(response.data.data);
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getCategory()
  },[])
  return (
    <>
      <div id="container">
        <div className="main">
          <div className="main__header">
            <h1>Setup Quizz</h1>
          </div>
          <div className="main__form">
            <div className="main__form--input">
              <div className="main__form--input__title">
                <p>Number of questions</p>
              </div>
              <div className="main__form--input__input">
                <input type="text" className="input" />
              </div>
            </div>
            <div className="main__form--input">
              <div className="main__form--input__title">
                <p>Category</p>
              </div>
              <div className="main__form--input__input">
                <select name="" id="" className="input">
                  <option value="">Chọn thể loại</option>
                  {category.map((item) => (
                    <option value={item.category_id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="main__form--input">
              <div className="main__form--input__title">
                <p>Level</p>
              </div>
              <div className="main__form--input__input">
                <select name="" id="" className="input">
                  <option>Chọn mức độ</option>
                  <option value="0">Dễ</option>
                  <option value="1">Khó</option>
                </select>
              </div>
            </div>
            <div className="main__form--input">
              <div className="main__form--input__input">
                <button className="input btn">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
