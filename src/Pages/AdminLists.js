import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import UserAdder from "../Components/userAdder";
import UserEditor from "../Components/userEditor";
import ConfirmDeletion from "../Components/ConfirmDeletion";

function AdminLists() {
  const [allAdmins, setAllAdmins] = useState([]);

  const [error, setError] = useState("");
  const [index, setIndex] = useState(0);

  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users")
        .then((res) => setAllAdmins(res.data))
        .catch((err) => setError(err));
    };

    getData();
  }, []);

  let addUser = () => {
    setAddModal(true);
  };

  let editUser = (index) => {
    setEditModal(true);
    setIndex(index);
  };

  let deleteUser = (index) => {
    setConfirm(true);
    setIndex(index);
  };

  let stl = {
    size: "relative w-full h-fit text-txt flex justify-around items-center flex-col pt-[3vw]",
    container:
      "w-[90%] md:w-[60%] lg:w-[40%] h-[400px] flex flex-col justify-evenly items-center  mx-auto",
    btn: "h-fit py-[4px] px-[20px]  bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-1 duration-700 hover:duration-700 rounded-md",
    btnAdd: `${
      addModal ? "hidden" : "flex"
    } fixed bottom-[5vw] right-[7vw] z-[3] justify-center items-center text-[30px] h-[80px] w-[80px] rounded-full bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-1 duration-700 hover:duration-700",
    h1: "text-[30px] md:text-[40px] font-bold`,
    wrapper:
      "relative overflow-x-auto shadow-lg sm:rounded-lg w-[98%] lg:w-[80%] h-fit mt-[2vw] md:overflow-hidden mb-[150px]",
    table:
      "w-full text-sm text-left dark:text-gray-400 border-[1px] border-[#1F2937]",
    thead: " text-xs uppercase bg-gray-50 dark:bg-secondary dark:text-txt",
    tr: "group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-white duration-1000 hover:duration-1000",
    th: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white group-hover:dark:text-gray-900",
    h1: "text-[30px] md:text-[40px] font-bold",
    noUser: "w-full h-[300px] flex justify-center items-center",
  };

  return (
    <div className={stl.size}>
      <h1 className={stl.h1}>List of all Users</h1>

      <div className={stl.wrapper} id="shadow">
        {allAdmins.length > 0 ? (
          <table className={stl.table}>
            <thead className={stl.thead}>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Role</th>

                <th scope="col">Action</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allAdmins.map((admin, id) => (
                <tr className={stl.tr} key={id}>
                  <td className={stl.th}>{admin.first_name}</td>
                  <td className={stl.th}>{admin.last_name}</td>
                  <td className={stl.th}>{admin.role}</td>
                  <td>
                    <Button className={stl.btn} onClick={() => editUser(id)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      danger
                      type="primary"
                      onClick={() => deleteUser(id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={stl.noUser}>
            <h1 className={stl.h1}>
              {error.message ? error.message : "There is no user yet"}
            </h1>
          </div>
        )}
      </div>

      <Button className={stl.btnAdd} title="Add New User" onClick={addUser}>
        <PlusOutlined />
      </Button>

      {addModal ? <UserAdder data={setAddModal} /> : ""}
      {editModal ? (
        <UserEditor data={setEditModal} data2={index} data3={allAdmins} />
      ) : (
        ""
      )}
      {confirm ? (
        <ConfirmDeletion data1={setConfirm} data2={index} data3={allAdmins} />
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminLists;
