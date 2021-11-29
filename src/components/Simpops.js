import React from "react";

export default function Simpops() {
  return (
    <>
      <div className="container">
        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
            Enter a Number
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <div className="form-floating mb-3 w-25">
          <input type="email" className="form-control" id="floatingInput" />
          <label for="floatingInput"></label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
    </>
  );
}
