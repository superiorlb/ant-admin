import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import routes from './router';
import GlobalLoading from './components/loading/globalLoading';
import Layout from './views/layout/layout';
import NotFound from './views/404/404';
import Login from './views/login/login';
const Dashboard = React.lazy(() => import('./views/dashboard/dashboard'))
const RoutesRender = (routes) => {
  return routes.map((item, index) => (
    <Route path={item.path} element={item.element} key={index}>
      {
        item.children ? RoutesRender(item.children) : null
      }
    </Route>))
}
function App() {
  return (
    <React.Suspense fallback={<GlobalLoading />}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            {
              RoutesRender(routes)
            }
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
