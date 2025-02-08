import React, { useState, useEffect } from "react";

function FunctionalLifecycleDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
    document.addEventListener("click", logClick);

    return () => {
      console.log("Component Will Unmount");
      document.removeEventListener("click", logClick);
    };
  }, []);

  useEffect(() => {
    console.log("Component Updated - Count changed to", count);
  }, [count]);

  const logClick = () => {
    console.log("Button Clicked!");
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mt-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Functional Component with Hooks
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment Count
      </button>
    </div>
  );
}

export default FunctionalLifecycleDemo;
