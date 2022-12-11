import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import storage from '../utils/storage';
import Chat from './Chat';
import Footer from './Footer';
import Header from './Header';
import LoginPage from './LoginPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [owner, setOwner] = useState('');
  const navigate = useNavigate();

  const updateSessionStorage = (newUser) => {
    storage.setUser(newUser);
    setOwner(() => newUser);
    setIsLogged((prev) => !prev);
    navigate('/chat');
  };

  const getSessionStorate = () => {
    setOwner(() => storage.getUser());
  };

  const addMessage = (data) => {
    storage.setData(data);
  };

  const getMessage = () => {
    return storage.getData();
  };

  useEffect(() => {
    getSessionStorate();
  }, [owner]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<LoginPage handleLogin={updateSessionStorage} />}
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute isLogged={isLogged}>
              {' '}
              <Chat
                owner={owner}
                onAddMessage={addMessage}
                onGetMessages={getMessage}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
