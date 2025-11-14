import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import AddTransaction from './pages/AddTransaction';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas privadas */}
        <Route
          path="/accounts"
          element={
            <PrivateRoute>
              <Accounts />
            </PrivateRoute>
          }
        />

        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          }
        />

        <Route
          path="/add-transaction"
          element={
            <PrivateRoute>
              <AddTransaction />
            </PrivateRoute>
          }
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
