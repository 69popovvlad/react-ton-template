import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

import './index.css'
import AppLayout from './layouts/AppLayout';
import AppPage from './pages/AppPage';
import ExamplePage from './pages/examples/ExamplePage';

const manifestUrl = import.meta.env.VITE_TON_CONNECT_MANIFEST;

function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <AppLayout>
        <Router>
          <Routes>
            <Route path="/" element={<AppPage />} />
            <Route path="/example" element={<ExamplePage />} />
          </Routes>
        </Router>
      </AppLayout>
    </TonConnectUIProvider>
  )
}

export default App
