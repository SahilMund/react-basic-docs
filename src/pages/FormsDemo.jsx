import ContactForm from '../components/ContactForm';

export default function FormsDemo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Forms & Validation Demo</h1>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Form (Controlled Component)</h2>
          <ContactForm />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Controlled vs Uncontrolled Components</h2>
          <div className="prose dark:prose-invert flex justify-between">
            <div><h3 className="text-lg font-medium mb-2">Controlled Components</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>Form data is handled by React state</li>
              <li>Uses onChange method to update the state</li>
              <li>More predictable</li>
              <li>re-renders on every change</li>
              <li>Immediate access to form data</li>
              <li>Better for complex validation</li>
            </ul></div>
            <div>
            <h3 className="text-lg font-medium mb-2">Uncontrolled Components</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Form data is handled by the DOM</li>
              <li>Uses useRef to access state</li>
              <li>Less code</li>
              <li>No re-renders until value is accessed</li>
              <li>Better performance</li>
              <li>Good for simple forms</li>
            </ul>
            </div>


          </div>
        </section>


        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Related Topics</h2>
          <div className="prose dark:prose-invert">
            <h3 className="text-lg font-medium mb-2"></h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
              <li>React Hook Form (managing and validating forms)</li>
              <li>Validation Libraries such as Zod and yup</li>
              <li>React toastify library for notification instead of showing alert confirmation message</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}