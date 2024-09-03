import StarryBackground from "./components/StarryBackground/StarryBackground"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Homepage/Homepage"

function App() {

  return (
    <div className="h-screen w-full">
      {/* will act as an fixed background */}
      <StarryBackground />

      {/* main sections which will scroll through smooth scroll */}
      <div className="h-full lg:mx-40 lg:my-5">
        {/* navbar will stay fixed */}
        <Navbar />

        <Homepage />

        {/* About us and events section */}
        <div className="h-screen w-full">
          <h1>event section</h1>
        </div>
      </div>
    </div>
  )
}

export default App
