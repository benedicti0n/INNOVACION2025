import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Homepage/Homepage"
import StarryBackground from "./components/StarryBackground/StarryBackground"
import Eventspage from "./components/Eventpage/Eventspage"

function App() {

  return (
    <div className="h-screen w-full">
      {/* main sections which will scroll through smooth scroll */}
      <StarryBackground />
      <div className="h-full lg:mx-40 lg:py-5">
        {/* navbar will stay fixed */}
        <Navbar />

        <Homepage />

      </div>

      <Eventspage />
    </div>
  )
}

export default App
