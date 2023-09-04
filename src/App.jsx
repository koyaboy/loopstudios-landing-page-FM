import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./containers/MainContent"

function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {!toggleMenu && (
        <>
          <MainContent />
          <Footer />
        </>
      )
      }
    </>
  )
}

export default App
