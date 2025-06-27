import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Requests from "./pages/Requests";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-24 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
