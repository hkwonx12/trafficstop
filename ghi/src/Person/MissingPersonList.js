import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListMissingPersons() {
  const [people, setPeople] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8000/missing/");

    if (response.ok) {
      const data = await response.json();
      setPeople(data.people);
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
      <h2>Missing People</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Name</th>
            <th>Last Seen </th>
          </tr>
        </thead>
        <tbody>
          {people?.map((people) => {
            return (
              <tr key={people.id}>
                <td>{people.name}</td>
                <td>{convertDate(people.last_seen)}</td>
                <td>
                  <button type="button" className="btn btn-light">
                    <Link to={`/profile/details/${people.id}`}>Details</Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListMissingPersons;
