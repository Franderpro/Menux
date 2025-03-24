import React from "react";
import { Nav } from "../components/Nav";
import { Route, Routes } from "react-router";

export const Router = () => {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </>
  );
};
