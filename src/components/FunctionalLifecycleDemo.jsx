import { useState, useEffect } from 'react';

function FunctionalLifecycleDemo() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('Component mounted (useEffect with empty deps array)');
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      console.log('Component will unmount (cleanup function)');
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mt-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Functional Component with Hooks</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Current time: {date.toLocaleTimeString()}
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Count: {count}
      </p>
      <button
        onClick={() => setCount(c => c + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
}

export default FunctionalLifecycleDemo;