// import React from "react";
// import { Form, Input } from "antd";
// import "../Role/Role.scss";
// const Addrole = () => {
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
  
//   return (
//     <div>
//       <Form
//         requiredMark={false}
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         initialValues={{
//           remember: true,
//         }}
      
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Role Name"
//           name="rolename"
//           rules={[
//             {
//               required: true,
//               message: "Please input Role!",
//             },
//           ]}
//         >
//           <div className="wrapasterik">
//             <span className="asterik">*</span>
//             <Input />
//           </div>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Addrole;
