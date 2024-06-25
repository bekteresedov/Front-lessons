import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProductList from "../../components/products/porduct-list";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
