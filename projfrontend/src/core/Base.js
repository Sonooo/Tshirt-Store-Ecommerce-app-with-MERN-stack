import React from "react";
import Menu from "./Menu";
import Slider from "./Slider";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "bg-light text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      {/* < Slider /> */}
      <div className="container-fluid">
        {/* <div className="jumbotron bg-light text-dark text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div> */}

        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-light mt-auto py-3">
        <div className="container-fluid bg-light text-dark text-center py-3 ">
          <h4>If you got any questions feel free to reach out</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
        <div className="container">
          <span className="text-muted">
            An Amazing Place to Buy <span className="text-dark">Tshirt</span>
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Base;
