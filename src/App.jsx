import { HashRouter, Routes, Route } from "react-router-dom";
import SolutionsPage from "./pages/SolutionsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
