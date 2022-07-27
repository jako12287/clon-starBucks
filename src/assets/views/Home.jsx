import { CardShow } from "../components/CardShow";
import pictureOne from "../../utils/images/2022-07_AF_STB_BANNER CHOCOAVELLANA.png";
import pictureTwo from "../../utils/images/2022-05_Banners Web Core Summer_cafe-12.png";
import pictureThree from "../../utils/images/2022-05_AF_CRV_STB_Banner Tu Pedido-02-02.png";
import pictureFour from "../../utils/images/2022-05_AF_EDIT_STBX_Banner Summer 1_1.jpg";
import pictureFive from "../../utils/images/2022-03_FOOD-WEB.png";
import pictureSix from "../../utils/images/terminos.png";
const Home = () => {
  return (
    <main className="home-main-content">
      <section className="home-section-content">
        <article className="home-subcontain">
          <h2>¡ESCOGE TU ANTOJO!</h2>
          <p>
            Tus nuevos Choco-Caramelo Frappuccino, Avellana Choco-Caramelo{" "}
            <br /> Latte Helado & Avellana Choco-Caramelo Latte estan aquí
          </p>
          <button className="btn-one">Escoge tu favorito y disfrútalo</button>
        </article>
        <article className="home-subcontain">
          <img
            className="home-img-hero"
            src={pictureOne}
            alt="Choco-Caramelo Frappuccino, Avellana Choco-Caramelo Latte
            Helado & Avellana Choco-Caramelo Latte"
          />
        </article>
      </section>
      <section className="home-section-content">
        <article className="home-subcontain">
          <img className="home-img-hero" src={pictureTwo} alt="Nuestro Café" />
        </article>
        <article className="home-subcontain">
          <h2>EL CORAZÓN DE NUESTRAS BEBIDAS</h2>
          <p>¡Colombia, Espresso Roast y Colombia Nariño!</p>
          <button>Conoce más</button>
        </article>
      </section>
      <section className="home-section-content">
        <article className="home-subcontain-two">
          <h2>¡Pide sin hacer fila!</h2>
          <p>
            Encuentra la tienda que más te convenga para hacer tu pedido,
            selecciónala, escoge lo que más te guste, después agrégalo a tu
            carrito de compras y ¡listo!, así de fácil puedes tener tu pedido
            Starbucks.
          </p>
          <button>¡Pide ya!</button>
        </article>
        <article className="home-subcontain">
          <img
            className="home-img-hero"
            src={pictureThree}
            alt="Pide sin filas"
          />
        </article>
      </section>
      <section className="home-section-content">
        <article className="home-subcontain-two">
          <img
            className="home-img-hero"
            src={pictureFour}
            alt="Nuestro Compromiso"
          />
        </article>
        <article className="home-subcontain-two">
          <h2>Informe de sustentabilidad</h2>
          <p>
            Juntos seguimos construyendo un futuro más sostenible para el café
            💚
          </p>
          <button>Leer Informe</button>
        </article>
      </section>
      <section className="home-section-content">
        <article className="home-subcontain">
          <h2>Encúentralo en tu Starbucks</h2>

          <button>¡Ordena ahora!</button>
        </article>
        <article className="home-subcontain">
          <img
            className="home-img-hero"
            src={pictureFive}
            alt="Nuestra Comida"
          />
        </article>
      </section>
      <section className="home-section-content">
        <article className="home-subcontain">
          <img
            className="home-img-hero"
            src={pictureSix}
            alt="Terminos y condiciones"
          />
        </article>
        <article className="home-subcontain">
          <p>Términos & condiciones</p>
          <h2>Aniversario Starbucks </h2>
          <button>Más información</button>
        </article>
      </section>
      <section className="home-section-content">
        <CardShow
          img={pictureSix}
          direction={"left"}
          buttomText={"Más informacion"}
          titleText={"Aniversario Starbucks"}
          subtitleText={"Términos & condiciones"}
          positionTitle={1}
        />
      </section>
    </main>
  );
};

export default Home