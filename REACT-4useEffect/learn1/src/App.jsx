import { useEffect, useState } from 'react';
const EveryRender = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log(
      'Effect runs on every render: first mount and the ones triggers by changing any of the state variables',
    );
  });
  return (
    <div>
      <h2>On every render</h2>
      <button onClick={() => setCounter1((prev) => prev + 1)}>
        Increase first counter: {counter1}
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increase second counter: {counter2}
      </button>
    </div>
  );
};
const FirstRender = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log('Only on first mount');
  }, []);
  return (
    <div>
      <h2>On first render</h2>
      <button onClick={() => setCounter1((prev) => prev + 1)}>
        Increase first counter: {counter1}
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increase second counter: {counter2}
      </button>
    </div>
  );
};
const BasedOnVariableChange = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log('Only on first mount and when counter1 changes');
  }, [counter1]);
  return (
    <div>
      <h2>On counter1 changing</h2>
      <button onClick={() => setCounter1((prev) => prev + 1)}>
        Increase first counter: {counter1}
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increase second counter: {counter2}
      </button>
    </div>
  );
};
const App = () => {
  return (
    <>
      <EveryRender />
      <FirstRender />
      <BasedOnVariableChange />
    </>
  );
};
export default App;
