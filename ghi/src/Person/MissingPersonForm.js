import { useState, useEffect } from "react";

function MissingPersonForm() {
  // Store the form state; initialize fields to empty strings
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    last_seen: "",
    description: "",
    photo_url: "",
    reporter_id: "",
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
    const url = "http://localhost:8000/missing/";
    const sendConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Wait for server response
    const newPersonResponse = await fetch(url, sendConfig);
    if (newPersonResponse.ok) {
      setFormData({
        name: "",
        height: "",
        weight: "",
        last_seen: "",
        description: "",
        photo_url: "",
        reporter_id: "",
      });
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Enter a missing person</h1>
          <form onSubmit={handleSubmit} id="add-person-form">
            <div className="form-floating mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                onChange={handleChange}
                required
                type="text"
                name="name"
                value={formData.name}
                id="name"
                className="form-control"
              />
            </div>
            <div className="form-floating mb-3">
              <label for="height" className="form-label">
                Height
              </label>
              <input
                onChange={handleChange}
                required
                type="text"
                name="height"
                value={formData.height}
                className="form-control"
              />
            </div>
            <div className="form-floating mb-3">
              <label for="weight" className="form-label">
                Weight
              </label>
              <input
                onChange={handleChange}
                required
                type="text"
                name="weight"
                value={formData.weight}
                className="form-control"
              />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label">Last Seen</label>
              <input
                onChange={handleChange}
                required
                type="text"
                name="last_seen"
                value={formData.last_seen}
                className="form-control"
              />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label">Photo Url</label>
              <input
                onChange={handleChange}
                type="text"
                name="photo_url"
                value={formData.photo_url}
                className="form-control"
              />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label">Detailed Description</label>
              <input
                onChange={handleChange}
                required
                type="text"
                name="description"
                value={formData.description}
                className="form-control"
              />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label">TEMP Reporter ID</label>
              <input
                onChange={handleChange}
                required
                type="text"
                name="reporter_id"
                value={formData.reporter_id}
                className="form-control"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MissingPersonForm;
