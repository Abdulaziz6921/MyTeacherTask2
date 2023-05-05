import React from "react";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import axios from "axios";

function ClientConfirmDeletion(props) {
  let setModal = props.data1;
  let id = props.data2;
  let clients = props.data3;
  let firstName = clients[id].first_name;
  let idOfObj = clients[id].id;

  let closeModal = () => {
    setModal(false);
  };

  let deleteUser = async () => {
    await axios
      .delete(
        `https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${idOfObj}`
      )
      .then(() => window.location.reload());
  };

  let stl = {
    overlay:
      "bg-[#0000007d]  w-full h-full fixed top-0 left-0 flex justify-center items-center z-[5]",
    h1: "text-[16px] md:text-[20px] font-bold mb-[30px]",
    size: "relative w-[80%] md:w-[60%] lg:w-[30%] h-fit bg-white rounded-[20px] p-[30px] flex flex-col justify-between items-center",
    btn: "h-fit py-[4px] px-[20px]  bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-1 duration-700 hover:duration-700 rounded-md ",
    btns: "w-[60%] h-fit flex items-center justify-between mx-auto",
    close: "text-red-500 text-[33px] absolute top-[-25px] right-[-25px]",
  };

  return (
    <div className={stl.overlay}>
      <div className={stl.size}>
        <h1 className={stl.h1}>Do you really want to delete {firstName}?</h1>
        <div className={stl.btns}>
          <Button className={stl.btn} onClick={closeModal}>
            No, keep
          </Button>
          <Button danger type="primary" onClick={deleteUser}>
            Yes, delete
          </Button>
        </div>

        <CloseCircleOutlined className={stl.close} onClick={closeModal} />
      </div>
    </div>
  );
}

export default ClientConfirmDeletion;
