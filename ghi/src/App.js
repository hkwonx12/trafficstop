import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MainPage from "./MainPage";
import Profile from "./User/Profile";
import Login from "./User/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import MissingPersonForm from "./Person/MissingPersonForm";
import Details from "./Person/Details";
import Sighting from "./Person/Sighting";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="login" element={<Login />} />

        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="new" element={<MissingPersonForm />} />
          <Route path="details" element={<Details />} />
          <Route path="sighting" element={<Sighting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
