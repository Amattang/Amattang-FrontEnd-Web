import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckListPage from "../pages/CheckLIstPage/CheckListPage";
import Home from "../pages/Home";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path=":id" element={<CheckListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
