import { useState } from "react";
import { useParams } from "react-router-dom";

function CreateSighting() {
  const { id } = useParams();

  // Store the form state; initialize fields to empty strings
  const [formData, setFormData] = useState({
    sighting_name: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    date_sighted: "",
    description: "",
    photo_url: "",
    sighting_reporter: "",
    person: "",
  });
  // Handle when the form changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submissions
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send form data to the database
    const url = `http://localhost:8000/missing/${id}/sightings/`;
    const sendConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Wait for server response
    const newSightingResponse = await fetch(url, sendConfig);
    if (newSightingResponse.ok) {
      setFormData({
        sighting_name: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        date_sighted: "",
        description: "",
        photo_url: "",
        sighting_reporter: "",
        person: "",
      });
    } else {
      console.log("*****ERROR. Server response: ", newSightingResponse);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h2>Create a sighting</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="sighting_name"
                value={formData.sighting_name}
                className="form-control"
              />
              <label className="form-label">Name your sighting:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="address"
                value={formData.address}
                className="form-control"
              />
              <label className="form-label">Street Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="city"
                value={formData.city}
                className="form-control"
              />
              <label className="form-label">City</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="state"
                value={formData.state}
                className="form-control"
              />
              <label className="form-label">State</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="postal_code"
                value={formData.postal_code}
                className="form-control"
              />
              <label className="form-label">Postal code</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="country"
                value={formData.country}
                className="form-control"
              />
              <label className="form-label">Country</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="date_sighted"
                value={formData.date_sighted}
                className="form-control"
              />
              <label className="form-label">Date Sighted: yyyy-mm-dd</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="description"
                value={formData.description}
                className="form-control"
              />
              <label className="form-label">Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="photo_url"
                value={formData.photo_url}
                className="form-control"
              />
              <label className="form-label">Photo URL</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="sighting_reporter"
                value={formData.sighting_reporter}
                className="form-control"
              />
              <label className="form-label">Reporter Name</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateSighting;
