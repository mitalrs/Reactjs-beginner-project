import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import questions from "./Questions.json";

function App() {
  const [arrli, setArli] = useState(
  ( ()=>{
    if(localStorage.getItem('solvedQuestions')){
      return JSON.parse(localStorage.getItem('solvedQuestions'));
    }else{
      return [];
    }
   })()
  );
  

  const handleChange = (event,id) => {
    if(event.target.checked===true){
      setArli(arrli=>[...arrli,id])
    }else{
      setArli(arrli.filter(word => word!==id))
    }
  };

  console.log(arrli);

  useEffect(()=>{
    localStorage.setItem("solvedQuestions",JSON.stringify(arrli))
  },[arrli])
  return (
    <div className="App">
      <h1>DSA TRACKER for 450</h1>
      <ol>
        {questions.map((question, index) => {

          return (
            <li key={index}>
             
              <input type="checkbox" onChange={(e)=>{
                handleChange(e,question.id)
              }} checked={arrli.includes(question.id)}/>
              {question.q}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
