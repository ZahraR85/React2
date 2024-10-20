const Counter = ({state, setState}) => {
  return (
    <div style={{display: "flex", gap: "1rem", margin: "1rem"}}>
    <button onClick={ () => setState((prev)=> prev -1)}>-</button>
    <span>{state}</span>
    <button onClick={ () => setState((prev)=> prev +1)}>+</button>
    </div>
  );
};
export default Counter;