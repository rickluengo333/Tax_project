import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Verify from './pages/Verify';
import TaxIntake from './pages/TaxIntake';
import StatusTracker from './pages/StatusTracker';
import Messages from './pages/Messages';
import DocumentCenter from './pages/DocumentCenter';
import TaxReturn from './pages/TaxReturn';
import Insights from './pages/Insights';
import Settings from './pages/Settings';
import CompanyInformation from './pages/settings/CompanyInformation';
import UserSettings from './pages/settings/UserSettings';
import Notifications from './pages/settings/Notifications';
import Security from './pages/settings/Security';
import Legal from './pages/settings/Legal';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/status-tracker" replace />} />
            <Route path="tax-intake" element={<TaxIntake />} />
            <Route path="status-tracker" element={<StatusTracker />} />
            <Route path="messages" element={<Messages />} />
            <Route path="document-center" element={<DocumentCenter />} />
            <Route path="tax-return" element={<TaxReturn />} />
            <Route path="insights" element={<Insights />} />
          </Route>

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/settings/company" replace />} />
            <Route path="company" element={<CompanyInformation />} />
            <Route path="user" element={<UserSettings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="security" element={<Security />} />
            <Route path="legal" element={<Legal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
