import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Billing from './pages/Billing';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import FeatureDetail from './pages/FeatureDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-black selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/app" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/features/:id" element={<FeatureDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
