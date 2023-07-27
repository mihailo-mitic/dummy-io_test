import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./pages/RootPage";
import SinglePost from "./pages/SinglePost";
import SinglePostEdit from "./pages/SinglePostEdit";
import SinglePostCreate from "./pages/SinglePostCreate";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/:id/" element={<SinglePost />} />
          <Route path="/:id/edit" element={<SinglePostEdit />} />
          <Route path="/create" element={<SinglePostCreate />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
