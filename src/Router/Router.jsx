import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx";
import Uitilinen from "../page/Uitilinen.jsx";
import  Diagnose from "../page/ Diagnose.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx";
import App from "../components/App.jsx";




const Router = () => {
  return (
    <Routes>
      <ScrollToTop/>
      <Route path="" element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path="/uitil" element={<Uitilinen/>}/>
        <Route path="/diagnose" element={<Diagnose/>}/>
      </Route>
    </Routes>
  );
};

export default Router;
