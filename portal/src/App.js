import './css/App.css';
import './css/header.css'
import { useLocation } from 'react-router-dom';

import ITDaRoutes from './routes/ITDaRoutes';
import LoginRoutes from "./routes/LoginRoutes";
import Footer from './components/Footer'
import Header from './components/Header'
import Alarm from './pages/Alarm/Alarm';

function App() {

  const location = useLocation();

  return (
    <div className='T_mainTopDiv'>
      {location.pathname !== "/consulting"
        && <Header />}
      <Alarm />
      {window.sessionStorage.getItem("loginId") == null ? (
        <LoginRoutes />
      ) : (
        <ITDaRoutes />
      )}
      {location.pathname !== "/consulting"
        && <Footer />}
    </div>
  );
}

export default App;
