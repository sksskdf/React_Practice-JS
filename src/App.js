import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import HomePage from './common/pages/HomePage';
import LoginPage from './common/pages/LoginPage';
import Sidenav from './common/Sidenav';
import Form from './common/pages/Form';

const App = () => {
  return (
    <div>
      <Header />
      <Sidenav />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login" exact={true} element={<LoginPage />} />
        <Route path="/form" exact={true} element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
