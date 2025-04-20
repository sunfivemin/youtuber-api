import { BrowserRouter, Routes, Route } from "react-router-dom";
import YoutuberList from "./pages/YoutuberList";
import YoutuberForm from "./pages/YoutuberForm";
import YoutuberDetail from "./pages/YoutuberDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<YoutuberList />} />
        <Route path="/new" element={<YoutuberForm />} />
        <Route path="/youtubers/:id" element={<YoutuberDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
