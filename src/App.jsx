import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Homepage/Homepage"
import Eventspage from "./components/Eventpage/Eventspage"
import GradientBox from "./components/GradientBox/GradientBox"

function App() {

  return (
    <div className="w-full">
      <Navbar />
      <Homepage />
      <Eventspage />
    </div>
  )
}

export default App
