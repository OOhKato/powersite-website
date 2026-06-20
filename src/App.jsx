import { BrowserRouter, Routes, Route } from "react-router-dom";
import SolutionsPage from "./pages/SolutionsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;