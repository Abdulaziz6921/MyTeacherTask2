import React from "react";
import { Input, Form, Button, Select } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import axios from "axios";

function ClientEditor(props) {
  let setModal = props.data;
  let id = props.data2;
  let clients = props.data3;
  let firstName = clients[id].first_name;
  let lastName = clients[id].last_name;
  let location = clients[id].location;
  let age = clients[id].age;
  let course = clients[id].course;

  let idOfObj = clients[id].id;

  let closeModal = () => {
    setModal(false);
  };

  let onFinish = async (e) => {
    // console.log(e);
    await axios
      .put(
        `https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${idOfObj}`,
        e
      )
      .then(() => window.location.reload());
  };

  let stl = {
    overlay:
      "bg-[#0000007d]  w-full h-full fixed top-0 left-0 flex justify-center items-center z-[5]",
    size: "relative w-[80%] md:w-[60%] lg:w-[35%] h-fit bg-white rounded-[20px] p-[30px]",
    btn: "h-fit py-[4px] px-[20px]  bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-1 duration-700 hover:duration-700 rounded-md",
    close: "text-red-500 text-[33px] absolute top-[-25px] right-[-25px]",
  };

  return (
    <div className={stl.overlay}>
      <div className={stl.size}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="First Name" name="first_name">
            <Input placeholder="First Name" defaultValue={firstName}></Input>
          </Form.Item>

          <Form.Item label="Last Name" name="last_name">
            <Input placeholder="Last Name" defaultValue={lastName}></Input>
          </Form.Item>

          <Form.Item label="Location" name="location">
            <Select
              defaultValue={location}
              placeholder="Select location"
              options={[
                {
                  value: "Namangan",
                  label: "Namangan",
                },
                {
                  value: "Andijon",
                  label: "Andijon",
                },
                {
                  value: "Farg'ona",
                  label: "Farg'ona",
                },
                {
                  value: "Toshkent",
                  label: "Toshkent",
                },
                {
                  value: "Samarqand",
                  label: "Samarqand",
                },
                {
                  value: "Qashqadaryo",
                  label: "Qashqadaryo",
                },
                {
                  value: "Buxoro",
                  label: "Buxoro",
                },
                {
                  value: "Jizzax",
                  label: "Jizzax",
                },
                {
                  value: "Xorazm",
                  label: "Xorazm",
                },
                {
                  value: "Navoiy",
                  label: "Navoiy",
                },
                {
                  value: "Sirdaryo",
                  label: "Sirdaryo",
                },
                {
                  value: "Surxondaryo",
                  label: "Surxondaryo",
                },
                {
                  value: "Qoraqalpog'iston Res.",
                  label: "Qoraqalpog'iston Res.",
                },
              ]}
            ></Select>
          </Form.Item>

          <Form.Item label="Age" name="age">
            <Input defaultValue={age} placeholder="Age" type="number"></Input>
          </Form.Item>

          <Form.Item label="Course" name="course">
            <Select
              defaultValue={course}
              placeholder="Select course"
              options={[
                {
                  value: "English",
                  label: "English",
                },
                {
                  value: "Russian",
                  label: "Russian",
                },
                {
                  value: "Uzbek",
                  label: "Uzbek",
                },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item>
            <Button className={stl.btn} htmlType="submit">
              Edit
            </Button>
          </Form.Item>
        </Form>
        <CloseCircleOutlined className={stl.close} onClick={closeModal} />
      </div>
    </div>
  );
}

export default ClientEditor;
