import { useParams, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import resource from "../assets/react-router.png";

export default function RouterDemo() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleUpdateQuery = () => {
    setSearchParams({ tab: 'settings', view: 'advanced' });
  };

  const handleNavigate = () => {
    navigate('/router/123?tab=profile');
  };

  const navigateToForms = () => {
    navigate('/forms');
  };

  const navigateToFormsWithConfirm = () => {
    if (window.confirm('Are you sure you want to go to the forms page?')) {
      navigate('/forms');
    }
  };

  const navigateToFormsWithState = () => {
    navigate('/forms', {
      state: {
        from: 'router-demo',
        timestamp: new Date().toISOString()
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">React Router Demo</h1>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Current Route Information</h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Path:</strong> {location.pathname}</p>
            <p><strong>Search:</strong> {location.search}</p>
            <p><strong>Route Parameter (id):</strong> {id || 'Not set'}</p>
            <p><strong>Query Parameter (tab):</strong> {searchParams.get('tab') || 'Not set'}</p>
            {location.state && (
              <div>
                <p><strong>State:</strong></p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
                  {JSON.stringify(location.state, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Navigation Controls </h2>
          <div className="space-y-4">
            <div className="space-x-4">
              <button
                onClick={handleUpdateQuery}
                className="bg-[#333333] text-white font-bold py-2 px-4 rounded"
              >
                Update Query Params (useSearchParams)
              </button>
              <button
                onClick={handleNavigate}
                className="bg-[#333333] text-white font-bold py-2 px-4 rounded"
              >
                Navigate Programmatically (useNavigate)
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Forms Navigation Examples</h3>
              <div className="space-y-4 flex flex-col">
                <button
                  onClick={navigateToForms}
                  className="bg-[#333333] text-white font-bold py-2 px-4 rounded"
                  >
                  Go to Forms Page
                </button>
                <button
                  onClick={navigateToFormsWithConfirm}
                  className="bg-[#333333] text-white font-bold py-2 px-4 rounded"
                  >
                  Go to Forms Page (with confirmation)
                </button>
                <button
                  onClick={navigateToFormsWithState}
                  className="bg-[#333333] text-white font-bold py-2 px-4 rounded"
                  >
                  Go to Forms Page (with state)
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">React Router vs Traditional Navigation</h2>
          <div className="prose dark:prose-invert">
            <h3 className="text-lg font-medium mb-2">Client-Side Routing (React Router)</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>No full page reloads</li>
              <li>Faster navigation</li>
              <li>Maintains state between routes</li>
              <li>Better user experience</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Traditional Navigation</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Full page reloads</li>
              <li>Slower navigation</li>
              <li>State is reset between pages</li>
              <li>More server requests</li>
            </ul>
          </div>
        </section>

        <img src={resource} alt="resource" />

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Related Topics</h2>
          <div className="prose dark:prose-invert">
            <h3 className="text-lg font-medium mb-2"></h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>useParams</li>
              <li>useSearchParams</li>
              <li>useLocation</li>
              <li>useNavigate</li>
              <li>NavLink tag</li>
              <li>Nested Routes (Outlet)</li>
              <li>Javascript History API</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}