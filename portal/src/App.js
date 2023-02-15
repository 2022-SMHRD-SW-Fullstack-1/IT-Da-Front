import './css/App.css';
import './css/header.css'

import ITDaRoutes from './routes/ITDaRoutes';
import LoginRoutes from "./routes/LoginRoutes";
import Footer from './components/Footer'
import Header from './components/Header'
import Alarm from './pages/Alarm/Alarm';

function App() {
  return (
    <div className='T_mainTopDiv'>
      <Header />
      <Alarm/>
      {window.sessionStorage.getItem("loginId") == null ? (
        <LoginRoutes/>
      ) : (
            <ITDaRoutes />
      )}
      <Footer />
    </div>
  );
}

export default App;
