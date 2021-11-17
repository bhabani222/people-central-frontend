/* eslint-disable no-unused-vars */
import React from "react";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import "./Onboarding.scss";
import AppFooter from "../../Components/Appfooter/Appfooter";
import Emponboarding from "../../Components/Emponboarding/Emponboarding";
import Designation from "../../Components/Designation/Designation";
// import Role from "../../Components/Role/Role";
import Department from "../../Components/Department/Department";
// import Employeement from "../../Components/Employeement/Employeement";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Employeelist from "../../Components/employeelist/employeelist";
import Holiday from "../../Components/holiday/holiday";
import Clientonboarding from "../../Components/clientonboard/clientonboarding";

const { Content } = Layout;

const { TabPane } = Tabs;

const Onboarding = () => {
  function callback(key) {
    console.log(key);
  }
  const userloginn = useSelector((state) => state.userlogin);
  let history = useHistory();
  let { loading, userinfo, error } = userloginn;
  // useEffect(() => {
  //   if(!userinfo){

  //     history.push('/')
  //   }
  // }, [history])

  return (
    <>
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <div className="onboarding-content">
            <Tabs
              className="layout-content-heading"
              defaultActiveKey="1"
              onChange={callback}
            >
              <TabPane tab="Employee Onboarding" key="1">
                <Emponboarding />
              </TabPane>
              <TabPane tab="View Onboarded Employee" key="2">
                <Employeelist />
              </TabPane>
              <TabPane tab="Client Onboarding" key="3">
                <Clientonboarding />
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </>
  );
};

export default Onboarding;
