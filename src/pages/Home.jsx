import { Book } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <Book className="mx-auto h-12 w-12 text-indigo-600" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          React Concepts Demo
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          An interactive guide to essential React concepts and best practices
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'React Router',
            description: 'Learn about client-side routing, dynamic routes, and navigation.',
            link: '/router'
          },
          {
            title: 'Context API',
            description: 'Understand state management and data sharing between components.',
            link: '/context'
          },
          {
            title: 'Forms & Validation',
            description: 'Master form handling and validation techniques in React.',
            link: '/forms'
          },
          {
            title: 'Refs & forwardRef',
            description: 'Explore direct DOM manipulation and ref forwarding.',
            link: '/refs'
          },
          {
            title: 'Component Lifecycle',
            description: 'Compare class and functional component lifecycle methods.',
            link: '/lifecycle'
          },
          {
            title: 'JSX Fundamentals',
            description: 'Understand the basics of JSX and how it differs from HTML.',
            link: '/jsx'
          }
        ].map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}