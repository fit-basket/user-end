import OutsideNavbar from "./OutsideNavbar";
import InsideNavbar from "./InsideNavbar";

function Navbar() {
  if (localStorage.getItem("user")) {
    return <InsideNavbar />;
  } else {
    return <OutsideNavbar />;
  }
}

export default Navbar;
