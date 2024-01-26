import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BusDetails from "./pages/BusDetails";
import EditRoutes from "./pages/EditRoutes";
import CreateAlert from "./pages/CreateAlert";
import Alerts from "./pages/Alerts";

const App = () => {
  return (
    <div className="bg-[] h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/detailspage" element={<BusDetails />} />
          <Route path="/admin/edit-routes" element={<EditRoutes />} />
          <Route path="/admin/create-alert" element={<CreateAlert />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
