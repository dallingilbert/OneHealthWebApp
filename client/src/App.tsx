import './App.css';

import { Routes,Route } from 'react-router';
import { BrowserRouter } from 'react-router';
import { AppProvider } from './contexts/userContexts';
import { Auth0ProviderNavigate } from './authentication/Auth0ProviderNavigate';

import Redeem from './pages/redeem';
import Home from './pages/home';
import Navbar from './assets/navbar';
import Login from './pages/login';
import Register from './pages/register';
import Learn from './pages/learn';
import Medication from './pages/medications';
import Admin from './pages/admin';
import AdminRewards from './pages/admin-rewards';

function App() {
  return (
    <>
      <AppProvider>
          <BrowserRouter>
            <Auth0ProviderNavigate>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rewards' element={<Redeem />} />
                <Route path='/learn' element= {<Learn />} />
                <Route path ='/medication' element={<Medication />} />
                <Route path ='/login' element={<Login />} />
                <Route path ='/register' element={<Register/>} />
                <Route path='/admin' element={<Admin /> } />
                <Route path='/adminrewards' element={<AdminRewards /> } />
              </Routes>
            </Auth0ProviderNavigate>
          </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
