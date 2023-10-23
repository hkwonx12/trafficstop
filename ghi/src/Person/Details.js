import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import SightingDetails from "./SightingDetails";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./styles.css";

function Details() {
  const { id } = useParams();

  const [person, setPerson] = useState([]);
  const [age, setAge] = useState(0);

  const getData = async () => {
    const response = await fetch(`http://localhost:8000/missing/${id}`);

    if (response.ok) {
      const data = await response.json();
      setPerson(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function convertDate(appointment) {
    const dateTime = new Date(appointment);
    const date = dateTime.toLocaleDateString();
    return date;
  }

  function calculateAge() {
    const date = new Date();
    const diff = person.birth_date.getDate() - date.getDate();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(age);
  }

  return (
    <>
      <div className="details-page">
        <div className="details">
          <ul>
            <li>Name: {person.name}</li>
            <li>Height: {person.height}</li>
            <li>Weight: {person.weight}</li>
            <li>Birthday: {convertDate(person.birth_date)} </li>
            <li>Last Seen: {convertDate(person.last_seen)} </li>
            <li>Age: {age}</li>
            {/* calculate current date - birth date */}
            <li>Days Missing: </li>
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
