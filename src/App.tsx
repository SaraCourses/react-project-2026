
import { AuthProvider } from './auth/AuthContext'
import Routes from './routes/router'

function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
