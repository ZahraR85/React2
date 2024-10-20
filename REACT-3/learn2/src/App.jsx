import { useState } from 'react';

const WithMoreThanOnePieceOfState = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState('hello');
  return (
    <span>
      {state1} {state2}
    </span>
  );
};

const ProofOfLocality = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      {counter}
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <br />
    </>
  );
};

const App = () => {
  return (
    <>
      <h2>You can have more than one piece of state in your components</h2>
      <WithMoreThanOnePieceOfState />
      <h2>
        Every instance of <code>ProofOfLocality</code> has its own piece of
        state
      </h2>
      <ProofOfLocality />
      <ProofOfLocality />
      <ProofOfLocality />
      <ProofOfLocality />
    </>
  );
};

export default App;
