import React from "react";
import { FirstName, LastName } from "../App.js";
function CompC() {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    hello {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}

export default CompC;
