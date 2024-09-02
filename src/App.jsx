import StarryBackground from "./components/StarryBackground/StarryBackground"
import Navbar from "./components/Navbar/Navbar"
function App() {

  return (
    <div className="h-screen w-full">
      <StarryBackground />

      <div className="h-full lg:mx-40 lg:my-5">
        <Navbar />
      </div>
    </div>
  )
}

export default App
