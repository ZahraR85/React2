/*import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer running');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('Cleanup function ran');
    };
  }, []);
  return (
    <>
      <p>Check the console</p>
    </>
  );
};

export default App;*/
import { useEffect } from 'react';

function WindowResizeListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized:', window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup: remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Runs only once on mount.

  return <div>Resize the window and check the console!</div>;
}
export default WindowResizeListener;
