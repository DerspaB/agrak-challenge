import { Route, Routes } from "react-router-dom";
import { MainPage, CreateUserPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route key={"/"} path="/" element={<MainPage />} />
      <Route key={"/create"} path="/create" element={<CreateUserPage />} />
    </Routes>
  );
};
