import { ListOfUsers } from "../components";

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center items-center w-full bg-purple-600 h-[80px]">
        <h1 className="font-semibold text-white text-[30px]">List of Users</h1>
      </div>
      <ListOfUsers />
    </div>
  );
};
