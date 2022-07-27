import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import Layout from "./assets/components/Layout";
import Home from "./assets/views/Home";
import Menu from "./assets/views/Menu";
import Cafe from "./assets/views/Cafe";
import Novedades from "./assets/views/Novedades";
import Stores from "./assets/views/Stores";
import About from "./assets/child views/About";
import NotMilk from "./assets/child views/NotMilk";
import Contact from "./assets/child views/Contact";
import Terms from "./assets/child views/Terms";
import PaymentReview from "./assets/child views/PaymentReview";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        exact
        path="/menu"
        element={
          <Layout>
            <Menu />
          </Layout>
        }
      />

      <Route
        exact
        path="/articulo/como-elaborar-cafe"
        element={
          <Layout>
            <Cafe />
          </Layout>
        }
      />

      <Route
        exact
        path="/seccion/novedades"
        element={
          <Layout>
            <Novedades />
          </Layout>
        }
      />

      <Route
        exact
        path="/stores"
        element={
          <Layout>
            <Stores />
          </Layout>
        }
      />
      <Route
        exact
        path="/seccion/acerca-de-starbucks"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        exact
        path="/seccion/conoce-mas-sobre-notmilk"
        element={
          <Layout>
            <NotMilk />
          </Layout>
        }
      />
      <Route
        exact
        path="/seccion/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />

      <Route
        exact
        path="/articulo/terminos-de-uso-web"
        element={
          <Layout>
            <Terms />
          </Layout>
        }
      />

      <Route
        exact
        path="/articulo/reversion-de-pago"
        element={
          <Layout>
            <PaymentReview />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
