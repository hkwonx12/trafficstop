import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MainPage from "./MainPage/MainPage";
import Profile from "./User/Profile";
import Login from "./User/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import MissingPersonForm from "./Person/MissingPersonForm";
import Details from "./Person/Details";
import CreateSighting from "./Person/CreateSighting";
import SightingDetails from "./Person/SightingDetails";
import UserProfile from "./User/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="login" element={<Login />} />
        <Route path="userprofile" element={<UserProfile/>}/>

        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="new" element={<MissingPersonForm />} />
          <Route path="details" element={<Details />} />
          <Route path="sighting" element={<CreateSighting />} />
          <Route path="sightingdetails" element={<SightingDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
