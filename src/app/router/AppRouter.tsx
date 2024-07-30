import { Route, Routes } from "react-router-dom";
import { MainPage, CreateUserPage } from "../pages";
import { UpdateUserPage } from "../pages/UpdateUserPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route key={"/"} path="/" element={<MainPage />} />
      <Route key={"/create"} path="/create" element={<CreateUserPage />} />
      <Route key={"/update"} path="/update" element={<UpdateUserPage />} />
    </Routes>
  );
};
