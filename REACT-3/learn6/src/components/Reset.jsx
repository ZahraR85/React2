
const Reset = ({ setCounter, setMultiplier }) => {
  const handleClick = () => {
    setCounter(0);
    setMultiplier(1);
  };
  return <button onClick={handleClick}>Reset app</button>;
};
export default Reset;