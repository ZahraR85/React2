import { useState } from "react"

const MyInput = () => {
  const [text, setText] = useState('hello');
  function handelChange (e){
    setText(e.target.value);
  }
  return(
    <>
    <input type="text" value={text} onChange={handelChange}/>
    <p>typed: {text}</p>
    <button onClick={() => setText('hello')}>Reset</button>
    <br />
    <br />
    </>
  );
};
export default MyInput;