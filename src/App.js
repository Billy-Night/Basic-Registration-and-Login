import './App.css';
import { Routes, Route } from "react-router-dom";
import MyProvider from './context/MyProvider.js';

import Home from './components/Home_Page/Home.jsx';
import Login from './components/Login_Page/Login.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Registration from './components/Registration/Registration.jsx';
import Error from './components/Error_Page/Error.jsx';
import Profile from './components/Profile_Page/Profile.jsx';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/error" element={<Error />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
