function Sighting() {
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h2>Create a sighting</h2>
          <form>
            <div className="form-floating mb-3">
              <label for="Street Address" className="form-label">
                Street Address
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label for="City" className="form-label">
                City
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label for="State" className="form-label">
                State
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label for="Zipcode" className="form-label">
                Zipcode
              </label>
              <input type="int" className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <label for="Country" className="form-label">
                Country
              </label>
              <input type="text" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sighting;
