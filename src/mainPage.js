import React from "react";
import Header from "./components/Header";
import LogoGoogle from "./components/LogoGoogle";
import Search from "./components/Search";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import "./index.css";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <LogoGoogle />
        <Search />
        <Buttons />
      </main>
      <Footer />
    </div>
  );
}
