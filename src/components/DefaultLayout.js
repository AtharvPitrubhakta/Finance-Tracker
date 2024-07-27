import React from "react";
import "../resources/default-layout.css";
import { Button, Dropdown, Space} from "antd";
import { useNavigate } from "react-router-dom";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("expensemoney-application"));
  const navigate = useNavigate()
  const items = [
    {
      key: "1",
      label: (
        <li onClick={()=>{
          localStorage.removeItem('expensemoney-application')
          navigate("/login")
        }}>Logout</li>
      ),
    },
  ];

  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">FINANCE TRACKER</h1>
        </div>

        <div>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            {/* <Button>{user.name}</Button> */}
            <button className="primary">{user.name}</button>
          </Dropdown>
          {/* <h1 className="username">{user.name}</h1> */}
        </div>

      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
