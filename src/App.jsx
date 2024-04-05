import { useState } from 'react'
import './App.css' /* import your CSS styling for App.jsx */
import NavBar from './assets/components/NavBar' /* import components that you will use within App.jsx */
/* import images that you will use within App.jsx */
import logo from './assets/images/JaMz logo.png'
import jar from './assets/images/jam jar.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='header'>
        <img id='logo' src={logo}></img>
        <NavBar />
      </div>

      <div class='title-and-body'>
        <div id='react-app-title'>   {/* grouped text elements */}
          <h2 class='title-1'>JaMz</h2>
          <h1 class='title-2'>React App</h1>
        </div>
        <img id='jar' src={jar}></img>   {/* jam jar image */}
      </div>
    </>
  )
}

export default App
