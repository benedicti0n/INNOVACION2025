import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Homepage/Homepage"
import StarryBackground from "./components/StarryBackground/StarryBackground"
import Eventspage from "./components/Eventpage/Eventspage"

function App() {

  return (
    <div className="h-screen w-full">
      <StarryBackground extraClass="bg-[radial-gradient(circle_at_bottom,#16423C_0%,#000_100%)]" />
      <div className="h-full lg:mx-40 lg:py-5">
        <Navbar />

        <Homepage />

      </div>

      <Eventspage />
    </div>
  )
}

export default App
