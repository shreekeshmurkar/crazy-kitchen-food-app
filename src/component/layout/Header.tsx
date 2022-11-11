import { Link } from "react-router-dom";

function Header(props: any) {
  return (
    <div className="header">
      <a href="#default" className="App-logo-header">
        CrazyKitchen
      </a>
      <div className="header-right">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Recipies">Recipies</Link>
      </div>
    </div>
  );
}
export default Header;
