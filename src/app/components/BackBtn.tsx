import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const BackBtn = () => {
  const navigate = useNavigate();
  const handleNavigateHome = () => navigate("/");
  return (
    <div
      onClick={handleNavigateHome}
      className="bg-slate-200 rounded-md p-3 mt-[40px] cursor-pointer"
    >
      <IoArrowBack />
    </div>
  );
};
