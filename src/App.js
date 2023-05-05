import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import AdminLists from "./Pages/AdminLists";
import ClientLists from "./Pages/ClientLists";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/AdminLists" element={<AdminLists />} />
          <Route path="/ClientLists" element={<ClientLists />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
