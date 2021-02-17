import React from "react";
import NavBar from "devextreme-react/nav-bar";
/* import axios from "axios";
import CustomStore from "devextreme/data/custom_store"; */
import { tabs } from "./navbardata";

/* const navbardata = new CustomStore({
  key: "id",
  loadMode: "raw",
  load: function () {
    return axios
      .get(
        "https://testdinamikoto.yuceyazilim.com.tr/api/Products/GetTopNavBar"
      )
      .then((response) => {
        return console.log(response.data);
      })
      .catch((err) => console.log(err));
  },
}); */

class NavBarExample extends React.Component {
  render() {
    return (
      <NavBar
        className="navBarContainer dx-swatch-custom-scheme"
        dataSource={tabs}
      />
    );
  }
}
export default NavBarExample;
