import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
    sessionStorage.setItem('user', JSON.stringify(newUser));
    setOwner(newUser);
    setIsLogged((prev) => !prev);
    navigate('/chat');
  };

  const getSessionStorate = () => {
    setOwner(() => JSON.parse(sessionStorage.getItem('user')));
  };

  const addMessage = (data) => {
    const storage = JSON.parse(localStorage.getItem('messages')) || [];
    const cloneArr = structuredClone(storage);
    const newStorage = [...cloneArr, data];

    localStorage.setItem('messages', JSON.stringify(newStorage));
  };

  const getMessage = () => {
    const storage = JSON.parse(localStorage.getItem('messages'));
    if (storage) {
      return storage;
    }
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
        {/* <Route
          path="/chat"
          element={
            <Chat
              owner={owner}
              onAddMessage={addMessage}
              onGetMessages={getMessage}
            />
          }
        /> */}
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
