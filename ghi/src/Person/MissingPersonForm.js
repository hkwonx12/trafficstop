import { useState } from "react";

function MissingPersonForm() {
  // Store the form state; initialize fields to empty strings
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    birth_date: "",
    last_seen: "",
    description: "",
    photo_url: "",
    reporter: "",
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
    console.log("Sending person data");
    const newPersonResponse = await fetch(url, sendConfig);
    console.log("Sent person data");
    if (newPersonResponse.ok) {
      setFormData({
        name: "",
        height: "",
        weight: "",
        birth_date: "",
        last_seen: "",
        description: "",
        photo_url: "",
        reporter: "",
      });
    } else {
      console.error("*****ERROR. Server response: ", newPersonResponse);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Enter a missing person</h1>
          <form onSubmit={handleSubmit} id="add-person-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                type="text"
                name="name"
                value={formData.name}
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                type="text"
                name="height"
                value={formData.height}
                className="form-control"
              />
              <label htmlFor="height">Height</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                type="text"
                name="weight"
                value={formData.weight}
                className="form-control"
              />
              <label htmlFor="weight" className="form-label">
                Weight
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                type="text"
                name="birth_date"
                value={formData.birth_date}
                className="form-control"
              />
              <label htmlFor="birth_date" className="form-label">
                Birth Date: YYYY-MM-DD
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                type="text"
                name="last_seen"
                value={formData.last_seen}
                className="form-control"
              />
              <label htmlFor="last_seen" className="form-label">
                Last Seen YYYY-MM-DD
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="photo_url"
                value={formData.photo_url}
                className="form-control"
              />
              <label className="form-label">Photo Url</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                name="description"
                value={formData.description}
                className="form-control"
              />
              <label className="form-label">Detailed Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                required
                type="text"
                name="reporter"
                value={formData.reporter}
                className="form-control"
              />
              <label className="form-label">Reporter</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MissingPersonForm;
