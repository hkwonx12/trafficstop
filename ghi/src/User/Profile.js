import { Link } from "react-router-dom";
import ListMissingPersons from "../Person/MissingPersonList";

function Profile() {
  return (
    <div>
      <h2>
        Welcome, <Link to="/userprofile">user</Link>!
      </h2>

      <button type="button" className="btn btn-light">
        <Link to="/profile/new">Add a Person</Link>
      </button>
      <button type="button" className="btn btn-light">
        <Link to="/profile/details">Details</Link>
      </button>
      <ListMissingPersons></ListMissingPersons>
    </div>
  );
}

export default Profile;
