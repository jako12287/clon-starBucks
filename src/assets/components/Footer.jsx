import logo from "../../utils/images/logo-super.png";
import facebook from "../../utils/images/Logo-facebook.png";
import instagram from "../../utils/images/logo-instagram.png";
import twitter from "../../utils/images/logo-twitter.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <section className="footer-section-one">
        <article className="footer-col-one">
<Link to={"/seccion/acerca-de-starbucks"}>

          <h2>Sobre nosotros</h2>
</Link>
          <h3>Acerca de Starbucks</h3>
          <h3>Trabaja con nosotros</h3>
          <h3>
            Historias y noticias
            <br />
            Starbucks
          </h3>
          <h3>Sobre Notmilk</h3>
        </article>
        <article className="footer-col-two">
          <h2>Atencion al Cliente</h2>
          <h3>Sugerencias y reclamos</h3>
          <h3>Factura Electrónica</h3>
        </article>
        <article className="footer-col-three">
          <figure>
            <img className="footer-logo-super" src={logo} />
          </figure>
        </article>
      </section>
      <section className="hr">
        <hr />
      </section>

      <section className="footer-section-two">
        <article className="footer-section-social-networks">
          <div>
            <figure className="contain-sn">
              <img className="snf" src={facebook} />
            </figure>
            <figure className="contain-sn">
              <img className="sni" src={instagram} />
            </figure>
            <figure className="contain-sn">
              <img className="snt" src={twitter} />
            </figure>
          </div>
        </article>
        <article className="footer-section-terms">
          <div>
            <h3>Términos de uso web</h3>
            <div className="terms-line" />
            <h3>Aviso de Privacidad</h3>
            <div className="terms-line" />
            <h3>Política de tratamiento de datos</h3>
            <div className="terms-line" />
            <h3>Reversión de pago</h3>
          </div>
        </article>
        <article className="footer-setion-copyright">
          <div className="contain-copyright">
            <h6>
              Ⓒ 2022. Starbucks Cofee Company. Reservados todos los derechos
            </h6>
          </div>
          <div className="contain-copyright2">
            <h6>
              co | prod | a9ed8929f1bc7ba776a73846aaa21f3af2f82007 |
              04/07/2022-21:25:14:874
            </h6>
          </div>
        </article>
      </section>
    </footer>
  );
};
