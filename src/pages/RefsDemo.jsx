import RefExample from '../components/RefExample';

export default function RefsDemo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Refs & forwardRef Demo</h1>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ref Example</h2>
          <RefExample />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Understanding Refs</h2>
          <div className="prose dark:prose-invert">
            <h3 className="text-lg font-medium mb-2">When to Use Refs</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>Managing focus, text selection, or media playback</li>
              <li>Triggering imperative animations</li>
              <li>Integrating with third-party DOM libraries</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">forwardRef Use Cases</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Passing refs through multiple components</li>
              <li>Creating reusable component libraries</li>
              <li>Exposing DOM nodes to parent components</li>
            </ul>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Related Topics</h2>
          <div className="prose dark:prose-invert">
            <h3 className="text-lg font-medium mb-2"></h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>ref</li>
              <li>useRef</li>
              <li>forwardRef</li>
              <li>useImperativeHandle</li>

            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}