import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MainPage from "./MainPage/MainPage";
import Profile from "./User/Profile";
import Login from "./User/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import MissingPersonForm from "./Person/MissingPersonForm";
import ListMissingPersons from "./Person/MissingPersonList";
import Details from "./Person/Details";
import CreateSighting from "./Person/CreateSighting";
import UserProfile from "./User/UserProfile";
import ListSightings from "./Person/ListSightings";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="login" element={<Login />} />
        <Route path="userprofile" element={<UserProfile />} />

        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="new" element={<MissingPersonForm />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="sighting/:id" element={<CreateSighting />} />
          <Route path="sightingslist/:id" element={<ListSightings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
