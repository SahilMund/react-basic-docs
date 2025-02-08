import LifecycleDemo from '../components/LifecycleDemo';
import FunctionalLifecycleDemo from '../components/FunctionalLifecycleDemo';

export default function LifecyclePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Component Lifecycle Demo</h1>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Class Component</h2>
          <LifecycleDemo />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Functional Component</h2>
          <FunctionalLifecycleDemo />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Lifecycle Methods vs Hooks</h2>
          <div className="prose dark:prose-invert">
            <h3 className="text-lg font-medium mb-2">Class Component Lifecycle</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>componentDidMount - Called after component mounts</li>
              <li>componentDidUpdate - Called after state/prop changes</li>
              <li>componentWillUnmount - Called before unmounting</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Hooks Equivalent</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>{'useEffect(() => { }, [])' }- Runs once on mount</li>
              <li>{'useEffect(() => { }, [dep])'} - Runs on dependency changes</li>
              <li>{'useEffect(() => { return () => { /* cleanup */ } }, [])'} - Cleanup on unmount</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}