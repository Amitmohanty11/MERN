import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Card from "./Components/Card"
function App() {

  return (
    <>
    <Navbar/>
    <main>
      <div className="cards">
        <Card title = "Card 1" description = "This is card 1 using props"/>
        <Card title = "Card 2" description = "This is card 2 using props"/>
        <Card title = "Card 3" description = "This is card 3 using props"/>
        <Card title = "Card 4" description = "This is card 4 using props"/>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default App
