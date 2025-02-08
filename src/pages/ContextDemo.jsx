import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

export default function ContextDemo() {
  const { isDark, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      login(username, `${username}@example.com`);
      setUsername("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Context API Demo
      </h1>

      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
        <div className="prose dark:prose-invert">
          <h3 className="text-lg font-medium mb-2">Context API in React</h3>
          <p className="text-gray-600 dark:text-gray-300">
            The Context API in React is a built-in feature that allows data to
            be shared across multiple components without passing props manually
            at every level. It helps avoid "prop drilling", making state
            management simpler and more efficient.
          </p>
          <h3 className="text-lg font-medium mb-4 mt-2">Why is it needed?</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
            <li>
              Eliminates the need to pass props manually through deeply nested
              components.
            </li>
            <li>
              Useful for global data like user authentication, themes, and
              language settings.
            </li>
            <li>Enhances code maintainability and readability.</li>
          </ul>
          <h3 className="text-lg font-medium mb-4 mt-2">How it works?</h3>
          <p>
            In React, createContext, useContext, and Context.Provider are used
            for state management and passing data down the component tree
            without prop drilling.
          </p>

          <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 mt-4">
            <li>Create a Context using createContext().</li>
            <li>Wrap components inside Context.Provider to supply values.</li>
            <li>
              Access values using useContext(ContextName) in child components.
            </li>
          </ul>
        </div>
      </section>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Theme Context
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Current theme:{" "}
              <span className="font-semibold">{isDark ? "Dark" : "Light"}</span>
            </p>
            <button
              onClick={toggleTheme}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Toggle Theme
            </button>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            User Context
          </h2>
          <div className="space-y-4">
            <div className="text-gray-600 dark:text-gray-300">
              <p>
                <strong>Status:</strong>{" "}
                {user.isLoggedIn ? "Logged In" : "Logged Out"}
              </p>
              {user.isLoggedIn && (
                <>
                  <p>
                    <strong>Username:</strong> {user.username}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </>
              )}
            </div>
            {!user.isLoggedIn ? (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter username"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Login
                </button>
              </div>
            ) : (
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            )}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Context API vs Redux
          </h2>
          <div className="prose dark:prose-invert">
            <h3 className="text-lg font-medium mb-2">Context API</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>Built into React</li>
              <li>Simple setup</li>
              <li>Good for low-frequency updates</li>
              <li>Best for small-medium applications</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Redux</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Additional library</li>
              <li>More complex setup</li>
              <li>Best for large applications</li>
              <li>Includes dev tools and middleware</li>
            </ul>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Related Topics
          </h2>
          <div className="prose dark:prose-invert">
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>
                In React, createContext, useContext, and Context.Provider are
                used for state management and passing data down the component
                tree without prop drilling.
              </li>
              <li>Redux, Redux toolkit, zustand (some popular state management libs)</li>
             
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
