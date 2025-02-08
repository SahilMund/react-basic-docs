import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RouterDemo from './pages/RouterDemo';
import ContextDemo from './pages/ContextDemo';
import FormsDemo from './pages/FormsDemo';
import RefsDemo from './pages/RefsDemo';
import LifecycleDemo from './pages/LifecycleDemo';
import JsxDemo from './pages/JsxDemo';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/router" element={<RouterDemo />} />
              <Route path="/router/:id" element={<RouterDemo />} />
              <Route path="/context" element={<ContextDemo />} />
              <Route path="/forms" element={<FormsDemo />} />
              <Route path="/refs" element={<RefsDemo />} />
              <Route path="/lifecycle" element={<LifecycleDemo />} />
              <Route path="/jsx" element={<JsxDemo />} />
              <Route path="*" element={<Navigate to="/router" />}/>
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;