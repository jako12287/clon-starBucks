import logo from "../../utils/images/favicon-Starbucks.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="nav-bar">
      <section className="nav-section-logo">
        <figure>
          <Link to={"/"}>
            <img className="logo-nav" src={logo} />
          </Link>
        </figure>
      </section>

      <section className="nav-section-links">
        <div className="contain-links">
          <Link to={"/menu"}>
            <p>MENU</p>
          </Link>
          <Link to={"/articulo/como-elaborar-cafe"}>
            <p>CAFÉ</p>
          </Link>
          <Link to={"/seccion/novedades"}>
            <p>NOVEDADES</p>
          </Link>
        </div>
        <div className="spacing-70" />
      </section>

      <section className="nav-section-lacation">
        <Link to={"/stores"}>
          <FaMapMarkerAlt size={25} />
          <p>Localizar Tienda</p>
        </Link>
      </section>
    </header>
  );
};
