import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Main() {
  let stl = {
    size: "w-full h-[100vh] text-txt flex justify-center items-center",
    container:
      "w-[90%] md:w-[60%] lg:w-[40%] h-[400px] flex flex-col justify-evenly items-center  mx-auto",
    btns: "w-fit h-fit flex flex-col items-center",
    btn: "h-[50px] px-[40px] md:h-[70px] bg-secondary text-[22px]  md:text-[24px] text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-2 duration-700 hover:duration-700 rounded-md",
    text: "text-[24px] md:text-[28px] text-black",
    h1: "text-[30px] md:text-[40px] font-bold",
  };

  return (
    <div className={stl.size}>
      <div className={stl.container} id="shadow">
        <h1 className={stl.h1}>Welcome!</h1>
        <h3 className={stl.text}>What would you like to do?</h3>
        <div className={stl.btns}>
          <Link to="/AdminLists">
            <Button className={stl.btn}>Manage Admins</Button>
          </Link>
          <p>or</p>
          <Link to="/ClientLists">
            <Button className={stl.btn}>Manage Clients</Button>
          </Link>
        </div>
      </div>
    </div>
  );
  // let stl = {
  //   size: "",
  // };
  // return (
  //   <>

  //     <div style={{ width: "400px", height: "400px" }}>
  //       <h1>Welcome</h1>
  //       <p>What would you like to do?</p>

  //       <Button
  //         type="link"
  //         style={{ background: "blue", color: "white", marginRight: "30px" }}
  //       >
  //         <Link to={"https://www.google.com"}>Manage Admins</Link>
  //       </Button>
  //       <Button type="link" style={{ background: "blue", color: "white" }}>
  //         Manage Clients
  //       </Button>
  //     </div>
  //   </>
  // );
}

export default Main;
