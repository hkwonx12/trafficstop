import { Link } from "react-router-dom";
import SightingDetails from "./SightingDetails";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./styles.css";

function Details() {
  return (
    <>
      <div className="details-page">
        <div className="details">
          <ul>
            <li>Name</li>
            <li>Height</li>
            <li>Weight</li>
            <li>Birth Date</li>
            <li>Last Seen</li>
            <li>Age</li>
            {/* calculate current date - birth date */}
            <li>Days Missing</li>
            {/* calculate current date - last seen */}
          </ul>
        </div>
        <div className="button">
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

        <div className="map-wrap">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                Sighting 1 <br /> 10/20/2023
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="Details-table">
          <SightingDetails />
        </div>
      </div>
    </>
  );
}

export default Details;
