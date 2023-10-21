import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="container">
      <ul>
        <li>Name</li>
        <li>Height</li>
        <li>Weight</li>
        <li>Birth Date</li>
        <li>Last Seen</li>
        <li>Age</li>
        <li>Days Missing</li>
      </ul>
      <div className="">
        <button type="button" className="btn btn-warning">
          <Link to="/profile/sighting">Add Sighting</Link>
        </button>
        <button type="button" className="btn btn-success">
          <Link to="">Edit</Link>
        </button>
        <button type="button" className="btn btn-danger">
          <Link to="">Delete</Link>
        </button>
      </div>
    </div>
  );
}

export default Details;
