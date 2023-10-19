import { useState, useEffect } from "react";

function MissingPersonForm() {
  return (
    <div>
      <h1>Enter a missing person </h1>
      <div>
        <input />
        <label>Name</label>
      </div>
      <div>
        <input />
        <label>Height</label>
      </div>
      <div>
        <input />
        <label>Weight</label>
      </div>
      <div>
        <input />
        <label>Age</label>
      </div>
      <div>
        <input />
        <label>Last Seen</label>
      </div>
      <div>
        <input />
        <label>Photo Url</label>
      </div>
      <div>
        <input />
        <label>Detailed Description</label>
      </div>
    </div>
  );
}

export default MissingPersonForm;
