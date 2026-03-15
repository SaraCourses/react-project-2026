import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { AuthProvider } from './auth/AuthContext';
import Routes from './routes/router';
import { store } from './redux/store';
import { socket } from './utils/socket.utils';

function App() {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
}

export default App;
