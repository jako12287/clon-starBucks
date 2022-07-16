import logo from "../../utils/images/favicon-Starbucks.png";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Nav = () => {
  return (
    <header className="nav-bar">
      <section className="section-logo">
        <figure>
          <img className="logo-nav" src={logo} />
        </figure>
      </section>

      <section className="section-links">
        <div className="contain-links">
          <p>MENU</p>
          <p>CAFÉ</p>
          <p>NOVEDADES</p>
        </div>
        <div className="spacing-70" />
      </section>

      <section className="section-lacation">
        <FaMapMarkerAlt size={25} />
        <p>Localizar Tienda</p>
      </section>
    </header>
  );
};
