import React from "react";

export default function JsxDemo() {
  const user = {
    name: "John Doe",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
  };

  const styles = {
    color: "blue",
    fontSize: "20px",
  };

  // Example elements for createElement demonstration
  const simpleElement = React.createElement(
    "div",
    { className: "greeting" },
    "Hello!"
  );

  const nestedElement = React.createElement(
    "div",
    { className: "card" },
    React.createElement("h2", null, "Title"),
    React.createElement("p", null, "Content")
  );

  const arrayChildren = React.createElement(
    "ul",
    { className: "list" },
    ["Item 1", "Item 2", "Item 3"].map((item) =>
      React.createElement("li", { key: item }, item)
    )
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        JSX vs HTML Demo
      </h1>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            JSX Examples
          </h2>

          <div className="space-y-4">
            <div className="p-4 border rounded dark:border-gray-700">
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Class vs className
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  {'<div className="example">JSX</div>'}
                </code>
              </div>
              <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  {'<div class="example">HTML</div>'}
                </code>
              </div>
            </div>

            <div className="p-4 border rounded dark:border-gray-700">
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                JavaScript Expressions
              </h3>
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-600 dark:text-gray-300">
                  Welcome, {user.name}!
                </span>
              </div>
            </div>

            <div className="p-4 border rounded dark:border-gray-700">
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Style Object
              </h3>
              <div style={styles} className="dark:text-blue-400">
                Inline styles use objects
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            JSX vs HTML Syntax Differences
          </h2>
          <div className="space-y-6">
            {/* Class vs className */}
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Class vs className
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">JSX:</p>
                  <code className="text-sm">{`<div className="container">Hello World</div>`}</code>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">HTML:</p>
                  <code className="text-sm">{`<div class="container">Hello World</div>`}</code>
                </div>
              </div>
            </div>

            {/* Self-Closing Tags */}
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Self-Closing Tags
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">JSX:</p>
                  <code className="text-sm">{`<img src="logo.png" alt="Logo" />`}</code>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">HTML:</p>
                  <code className="text-sm">{`<img src="logo.png" alt="Logo">`}</code>
                </div>
              </div>
            </div>

            {/* Inline Styles */}
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Inline Styles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">JSX:</p>
                  <code className="text-sm">{`<div style={{ color: "red" }}>Styled Text</div>`}</code>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">HTML:</p>
                  <code className="text-sm">{`<div style="color: red;">Styled Text</div>`}</code>
                </div>
              </div>
            </div>

            {/* JavaScript Expressions */}
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                JavaScript Expressions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">JSX:</p>
                  <code className="text-sm">{`const name = "John";
return <h1>Hello, {name}!</h1>;`}</code>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">HTML:</p>
                  <code className="text-sm">{`<h1>Hello, name!</h1>`}</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            React.createElement Examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Simple Element
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">JSX:</p>
                  <code className="text-sm">
                    {'<div className="greeting">Hello!</div>'}
                  </code>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">createElement:</p>
                  <code className="text-sm">
                    {
                      "React.createElement('div', { className: 'greeting' }, 'Hello!')"
                    }
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Nested Elements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">JSX:</p>
                  <code className="text-sm">{`<div className="card">
  <h2>Title</h2>
  <p>Content</p>
</div>`}</code>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">createElement:</p>
                  <code className="text-sm">{`React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h2', null, 'Title'),
  React.createElement('p', null, 'Content')
)`}</code>
                </div>
              </div>
            </div>

            <div>
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210114162533/20210114105113000iOS.jpg" />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Related Topics
          </h2>
          <div className="prose dark:prose-invert">
            <h3 className="text-lg font-medium mb-2"></h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>Babel (How browser understands JSX?)</li>
              <li>Diffing algorithm and virtual DOM </li>
              <li>How React efficiently updates the DOM</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
