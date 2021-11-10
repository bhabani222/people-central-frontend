import React from "react";
import "antd/dist/antd.css";
import "../Login/login.scss";
import { Button } from "antd";
const Activation = () => {

  return (
    <div className="form_container">
      <div style={{ color: "red", fontSize: "1.5rem" }}>
        {" "}
        * Your account is already activated. Please Click the button to Login
      </div>
      <Button block type="primary" htmlType="submit">
       Login
      </Button>
    </div>
  );
};

export default Activation;
