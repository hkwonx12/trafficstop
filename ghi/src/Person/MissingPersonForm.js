import { useState, useEffect } from "react";

function MissingPersonForm() {
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Enter a missing person</h1>
          <form>
            <div className="form-floating mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="name" className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label for="height" className="form-label">
                Height
              </label>
              <input type="height" className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label for="weight" className="form-label">
                Weight
              </label>
              <input type="weight" className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label for="age" className="form-label">
                Age
              </label>
              <input className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label">Last Seen</label>
              <input className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label">Photo Url</label>
              <input className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label className="form-label">Detailed Description</label>
              <input className="form-control" />
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
