import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import './App.css'

function App() {

  const AppRouters = () => {
    let routes = useRoutes([
      {
        path: '/',
        element: <Home />,
      }
    ])
    return routes
  };

  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  )
}

export default App
