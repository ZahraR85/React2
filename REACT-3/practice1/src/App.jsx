import { useState } from "react";
import Counter from "./components/Counter";
const APP = () =>{
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  return (
    <div>
       <Counter state ={count1} setState ={setCount1}/>
       <Counter state ={count2} setState ={setCount2}/>
       <Counter state ={count3} setState ={setCount3}/>
    </div>
  );
};

export default APP;