import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route key={"/"} path="/" element={<MainPage />} />
    </Routes>
  );
};
