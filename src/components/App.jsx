import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Chat from './Chat';
import Header from './Header';
import LoginPage from './LoginPage';

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

  const loginUser = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user !== null && user.length !== 0) {
      navigate('/chat');
    }
  };

  const addMessage = (data) => {
    localStorage.setItem('messages', JSON.stringify(data));
  };

  useEffect(() => {
    getSessionStorate();
    document.title = owner;

    loginUser();
  }, [owner]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              handleLogin={updateSessionStorage}
              loadTitle={getSessionStorate}
              owner={owner}
            />
          }
        />
        <Route
          path="/chat"
          element={<Chat owner={owner} handleMessage={addMessage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
