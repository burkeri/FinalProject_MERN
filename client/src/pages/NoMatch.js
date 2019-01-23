import React from "react";

function NoMatch() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="jumbotron mt-2">
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;