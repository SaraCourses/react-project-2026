import { Provider } from 'react-redux';

import { AuthProvider } from './auth/AuthContext';
import Routes from './routes/router';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
}

export default App;
