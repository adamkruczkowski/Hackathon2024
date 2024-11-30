import React, { useEffect , useState} from 'react';
import {SERVER_URL} from './components/constant';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from  './components/Dashboard';
import UserPage from './components/UserPage';
import Footer from './components/Footer';
import Home from './components/Home';
import PageWithNavbar from './components/PageWithNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [user, setUser] = useState('ROLE_USER');

  const getUser = async() => {
    try {
      const response = await fetch(
          SERVER_URL + '/user',
          { method: 'GET', redirect: "follow", credentials:'include' }
      );
      if (response.redirected) {
		  console.log(response.url);
          document.location = response.url;
          return;
      }
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
  }

  useEffect(()=>{
    getUser();
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/me" element={<UserPage userIn={user}/>} />
          <Route path="*" element={<NotFound />} />
		  <Route path="/f" element={<PageWithNavbar userIn={user}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Define a NotFound component to handle unknown routes
const NotFound = () => (
  <div className="pt-80 h-[100vh]">
    <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-bold leading-tight mb-4">404 Not Found</h1>
    <p className="text-lg md:text-xl text-center lg:text-2xl mb-4 ">The page You are looking for does not exist.</p>
  </div>
);

export default App;
