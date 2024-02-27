import { Navbar } from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage } from "../../heroes/pages/MarvelPage";
import { DCPage } from "../../heroes/pages/DCPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroePage } from "../pages/HeroePage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/marvel" />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="heroe/:id" element={<HeroePage />} />
        </Routes>
      </div>
    </>
  );
};
