import { useEffect, useState } from 'react';
const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log('Only on first mount');
    console.log('Only on first mount and when counter1 changes');
  //}, []);
  }, [counter1]);
  return (
    <div>
      <button onClick={() => setCounter1((prev) => prev + 1)}>
        Increase first counter: {counter1}
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increase second counter: {counter2}
      </button>
    </div>
  );
};
export default App;