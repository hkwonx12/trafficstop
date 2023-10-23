import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./styles.css";
import ListSightings from "./ListSightings";

function Details() {
  const { id } = useParams();

  const [person, setPerson] = useState([]);

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

  function calculateAge(birth_date) {
    const today = new Date();
    const birthDate = new Date(birth_date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function calculateDaysMissing(last_seen) {
    const today = new Date();
    const lastSeen = new Date(last_seen);
    const oneDay = 1000 * 60 * 60 * 24;
    const difference = Math.abs(today - lastSeen);

    return Math.round(difference / oneDay);
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
            <li>Age: {calculateAge(person.birth_date)}</li>
            <li>Days Missing: {calculateDaysMissing(person.last_seen)}</li>
          </ul>
        </div>
        <div className="button">
          <button type="button" className="btn btn-warning">
            <Link to={`/profile/sighting/${id}`}>Add Sighting</Link>
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
          <ListSightings />
        </div>
      </div>
    </>
  );
}

export default Details;
