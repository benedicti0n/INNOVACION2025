import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Homepage/Homepage"
import Eventspage from "./components/Eventpage/Eventspage"
import Gallery from "./components/Gallery/Gallery"

function App() {

  return (
    <div className="w-full">
      <Navbar />
      <Homepage />
      {/* <Eventspage /> */}
      <Gallery />
    </div>
  )
}

export default App
