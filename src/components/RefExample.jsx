import { useRef, forwardRef, useImperativeHandle } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    getValue: () => {
      return inputRef.current.value;
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      {...props}
    />
  );
});

export default function RefExample() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleGetValue = () => {
    alert(inputRef.current.getValue());
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Custom Input with forwarded ref
        </label>
        <CustomInput ref={inputRef} placeholder="Type something..." />
      </div>
      
      <div className="space-x-4">
        <button
          onClick={handleFocus}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Focus Input
        </button>
        <button
          onClick={handleGetValue}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Value
        </button>
      </div>
    </div>
  );
}