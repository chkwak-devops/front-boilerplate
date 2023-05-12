import { useEffect, useState, useRef } from "react";
import { Icon, Dropdown, Button } from "semantic-ui-react";
import { useRouter } from "next/router";

const styleMenuLogoObj = {
  float: "left",
  width: "50%",
  borderColor: "red",
  paddingLeft: 20,
};

const options = [
  {
    key: "home",
    icon: "home",
    text: "home",
    value: "/main",
  },
  { key: "sign-out", icon: "sign-out", text: "로그아웃", value: "/" },
];

const Top = () => {
  const router = useRouter();

  const menuMove = (e, { value }) => {
    router.push(value);
  };

  return (
    <>
      <div style={styleMenuLogoObj}>
        <img src="/images/emart_logo.png" width="60" />
        <span style={{ fontSize: "14px", paddingLeft: "10px" }}>
          {/* <font color="#fab601">F</font>act <font color="#fab601">B</font>ased <font color="#fab601">P</font>romotion */}
          <font color="#fab601">P</font>roject <font color="#fab601">T</font>itle
        </span>
      </div>
      <div
        style={{
          width: "50%",
          textAlign: "right",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        <Dropdown
          style={{ fontSize: "12px" }}
          text="User"
          icon="user"
          direction="left"
          options={options}
          onChange={menuMove}
        />
      </div>
    </>
  );
};

export default Top;
