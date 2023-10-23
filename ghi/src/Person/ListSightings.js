import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ListSightings() {
  const { id } = useParams();
  const [sightings, setSightings] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8000/missing/${id}/sightings/`
    );

    if (response.ok) {
      const data = await response.json();
      setSightings(data.sightings);
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

  return (
    <div className="container">
      <h2>Sightings</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sighting Name</th>
            <th>Date Sighted</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Description</th>
            <th>Reporter</th>
          </tr>
        </thead>
        <tbody>
          {sightings?.map((sighting) => {
            return (
              <tr key={sighting.id}>
                <td>{sighting.sighting_name}</td>
                <td>{convertDate(sighting.date_sighted)}</td>
                <td>{sighting.address}</td>
                <td>{sighting.city}</td>
                <td>{sighting.state}</td>
                <td>{sighting.zipcode}</td>
                <td>{sighting.description}</td>
                <td>{sighting.sighting_reporter}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListSightings;
