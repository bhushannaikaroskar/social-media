import "./App.css";
import { Navbar, Sidebar, Suggestion } from "./components";
import { Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App bg-blue-50">
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Suggestion />
        </div>
    );
}

export default App;
