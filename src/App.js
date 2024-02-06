import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BusDetails from "./pages/BusDetails";
import EditRoutes from "./pages/EditRoutes";
import CreateAlert from "./pages/CreateAlert";
import Alerts from "./pages/Alerts";
import Profile from "./pages/Profile";
// import User from "./pages/User";
import BusPass from "./pages/BusPass";
// import ExternalBusPayment from "./pages/ExternalBusPayment";

const App = () => {
  return (
    <div className="bg-[] h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/admin" element={<Admin />} />
          <Route path="/profile/admin/edit-routes" element={<EditRoutes />} />
          <Route path="/profile/admin/create-alert" element={<CreateAlert />} />
          {/* <Route path="/profile/user" element={<User />} /> */}
          {/* <Route
            path="/profile/user/bus-pass-payment"
            element={<ExternalBusPayment />}
          /> */}
          {/* <Route path="/profile/login/bus-pass" element={<BusPass />} /> */}
          <Route path="/profile/bus-pass" element={<BusPass />} />
          <Route path="/detailspage" element={<BusDetails />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
