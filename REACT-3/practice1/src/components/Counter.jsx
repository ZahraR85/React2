const Counter = ({count, setCount}) => {
  return (
    <div style={{display: "flex", gap: "1rem", margin: "1rem"}}>
    <button onClick={ () => setCount((prev)=> prev -1)}>-</button>
    <span>{count}</span>
    <button onClick={ () => setCount((prev)=> prev +1)}>+</button>
    </div>
  );
};
export default Counter;