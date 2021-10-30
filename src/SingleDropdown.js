import React from "react";
import { Menu, Dropdown, Button, message } from "antd";
import images from './Data.json';
import 'antd/dist/antd.css';
// import "./SingleDropdown.css"

function SingleDropdown() {

function handleMenuClick(e) {
    images.map((image, i) => {
        return(
            <div key={i}>
            <img src={`${image.thumbnailUrl}`} alt={image.title} />
            </div>
    )}
// message.info("Image showed");
// console.log("click", e);
    );
}

const menu = (
 <Menu onClick={handleMenuClick}>
   <Menu.Item key="1" onClick={handleMenuClick}>
    Option 1 
  </Menu.Item>
  <Menu.Item key="2" onClick={handleMenuClick}>
    Option 2
  </Menu.Item>
  <Menu.Item key="3" onClick={handleMenuClick}>
    Option 3
  </Menu.Item>
</Menu>
);

return (

<div className="singledropdown">
<Dropdown overlay={menu}>
  <Button className="button-color">
    Dropdown
  </Button>
</Dropdown>
</div>
);
}

export default SingleDropdown;