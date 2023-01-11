import './css/App.css';
import { Routes, Route } from 'react-router-dom'

import T_main from './pages/Course/Teacher/T_main'
import M_main from './pages/Manager/M_main'

function App() {
  return (
    <div className="App">
      <Routes>
      {/* <Route path='/' element={<T_main/>}></Route> */}
      <Route path='/' element={<M_main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
