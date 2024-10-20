import { useState } from "react"

const MyCheckbox = () => {
  const[liked, setLike] = useState(true);
  function handleChange (e){
    setLike(e.target.checked);
  }
  return(
    <>
    <label>
    <input type="checkbox" checked ={liked} onChange={handleChange} />I liked this.
    </label>
<p>You {liked ? "liked": "didn't like" } this.</p>
<br />
    </>
  );
};
export default MyCheckbox;