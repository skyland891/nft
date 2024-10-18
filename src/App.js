import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { routes } from "./router/routes";
import AuthProtected from "./router/AuthProtection";

function App() {
  const isAuth = () => {
    return !!Cookies.get('notjwttoken');
  }

  return (
    <Router>
      <Routes>
        {routes.map(route => {
          const { path, component: Component, authProtected } = route;
          const element = authProtected ? <AuthProtected isAuthenticated={isAuth}><Component /></AuthProtected> : <Component />;
          return <Route key={path} path={path} element={element} />
        })}
      </Routes>
    </Router>
  );
}

export default App;
