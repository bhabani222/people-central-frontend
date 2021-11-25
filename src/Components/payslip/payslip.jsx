import React, { useState } from "react";
import moment from "moment";
import {
  Divider,
  Button,
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Space,
 
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Payslip.scss";
import "antd/dist/antd.css";

// import { useDispatch, useSelector } from "react-redux";
// import { clientonboard } from "../../action/useraction";

const { RangePicker } = DatePicker;
// const currency = ["rupiya", "lira"];

// const paymentterm = ["Upon receipt", "Advance payment"];

const Payslip = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // const [employee, setEmployee] = useState({
  //   // image: "",
  //   // resume: "",
  //   empFirstName: "",
  //   empLastName: "",
  //   phnoeNumber: "",
  //   gender: "",
  //   address1: "",
  //   address2: "",
  //   dateOfBirth: "",
  //   empId: "",
  //   empEmail: "",
  //   joiningDate: "",
  //   relievingDate: "",
  //   managerEmail: "",
  //   experience: "",
  //   qualication: "",
  //   bankAccountNo: "",
  //   ifscCode: "",
  //   bankName: "",
  //   branchName: "",
  //   employeement: "",
  //   designation: {
  //     designationName: "",
  //   },
  //   roles: {
  //     roleName: "",
  //   },
  //   department: {
  //     departmentName: "",
  //   },
  // });

  // const dispatch = useDispatch();

  // const handelEmployeement = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   // console.log(value);
  //   setEmployee({
  //     [name]: value,
  //   });
  // };
  //   console.log(employee);

  const onFinish = (values) => {
    console.log("Success:", values);

    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  let clearform = () => {
    form.resetFields();
  };

  // const handelEmployee = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(value);
  //   setEmployee({
  //     [name]: value,
  //   });
  // };

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <Form
        form={form}
        colon={false}
        requiredMark={false}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="user_details">
          <div className="tab2_header">
            <div className="tab2_heading">Employee detail: </div>

            <div className="tab2_subheading">
              <span className="span_heading">*</span>&nbsp;indicates mandatory
              fields
            </div>
          </div>
          <Divider></Divider>
          <Row justify="start">
            <Col span={12}>
              <Form.Item
                label="Employee ID"
                name="empid"
                rules={[
                  {
                    required: true,
                    message: "Please input employee id",
                  },
                ]}
              >
                <Input placeholder="HT002" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                label="Consultant name"
                name="consultant_name"
                rules={[
                  {
                    required: true,
                    message: "Please input consultant name",
                  },
                ]}
              >
             
                <Input placeholder="Consultant Name" />
              
              </Form.Item>
              <Form.Item
                label="Designation"
                name="designation"
                rules={[
                  {
                    required: true,
                    message: "Please input designation name",
                  },
                ]}
              >
               
                <Input placeholder="Designation Name" />
               
              </Form.Item>
              <Form.Item
                name="Employee Type"
                label="Employee Type"
                rules={[
                  {
                    required: true,
                    message: "Please input your EMP type!",
                  },
                ]}
              >
               
                <Input placeholder="EMP Type" />
             
              </Form.Item>
             
              <Space direction="vertical" size={10}>
                <RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    "This Month": [
                      moment().startOf("month"),
                      moment().endOf("month"),
                    ],
                  }}
                  onChange={onChange}
                />{" "}
              </Space>
              <Form.Item
                name="department"
                label="Department"
                rules={[
                  {
                    required: true,
                    message: "Please input your department",
                  },
                ]}
              >
               
                <Input placeholder="department" />
              
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="No of days in month"
                name="no_day"
                rules={[
                  {
                    required: true,
                    message: "Please input no of day",
                  },
                ]}
              >
                
                <Input placeholder="Address line 1" />
              
              </Form.Item>
              <Form.Item
                name="doj"
                label="Date of join"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                  // className="datepicker"
                  placeholder="DD/MM/YYYY"
                  // style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item label="Working day" name="working_day">
              
                <Input placeholder="" />
               
              </Form.Item>

              <Form.Item label="ESIC number" name="esic_number">
                
                <Input placeholder="ESIC number" />
            
              </Form.Item>
              <Form.Item label="total Arrear day" name="arrear">
               
                <Input placeholder="" />
             
              </Form.Item>
              <Form.Item label="Loss of pay" name="lop">
             
                <Input placeholder="LOP" />
               
              </Form.Item>

              {/* <Form.Item
                  name="paymentterm"
              
                  label="Payment term"
                  rules={[
                    {
                      required: true,
                      message: "enter payment term",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select payment term"
                    className="empdropdown"
                  >
                    {paymentterm.map((fr, index) => {
                      return (
                        <Select.Option key={index} value={fr}>
                          {fr}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item> */}
            </Col>
          </Row>

          <div className="tab2_header">
            <div className="tab2_heading">Bank detail:</div>
          </div>
          <Divider></Divider>

          <Row justify="start">
            <Col span={12}>
              <Form.Item
                label="Account Number"
                name="account_number"
                rules={[
                  {
                    required: true,
                    message: "Please input your account number",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Account number" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="Bank Name"
                name="Bank name"
                rules={[
                  {
                    required: true,
                    message: "Please input your bank name",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Bank name" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="Branch Name"
                name="branch_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your branch name",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Branch name" />
                {/* </div> */}
              </Form.Item>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              onClick={clearform}
              icon={<CloseOutlined />}
              className="cancelempbtn"
            >
              Cancel
            </Button>
            <Button
              htmlType="submit"
              className="saveempbtn"
              icon={<CheckOutlined />}
            >
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default Payslip;
