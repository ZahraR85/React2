const IncreaseByN = ({ multiplier, setCounter }) => {
  return (
    <button onClick={() => setCounter((prev) => prev + multiplier)}>
      Click to increase by {multiplier}
    </button>
  );
};
export default IncreaseByN;