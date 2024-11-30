import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import PageWithNavbar from './components/PageWithNavbar'

function App() {

  const [user, setUser] = useState('ROLE_USER');

  const getUser = async() => {
    try {
      const response = await fetch(
          'http://localhost:8080' + '/user',
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
<PageWithNavbar></PageWithNavbar>
  )
}

export default App
