import { Routes, Route } from "react-router-dom";
import { NavBar } from "./sections/NavBar";
import { Home } from "./pages/Home";
import { MailSender } from "./pages/MailSender";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-mail" element={<MailSender />} />
      </Routes>
    </div>
  );
}

export default App;
