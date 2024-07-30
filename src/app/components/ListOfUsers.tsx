import { useNavigate } from "react-router-dom";
import { useGetUsers } from "../hooks/useGetUsers";
import { PreviewUser, UserTableSkeleton } from "./index";
import { User } from "../interfaces/user";
export const ListOfUsers = () => {
  const usersQuery = useGetUsers();
  const navigate = useNavigate();

  return (
    <div className="relative p-[20px] bg-white border rounded-lg shadow-lg mt-[50px]  h-full">
      <button
        onClick={() => navigate("/create")}
        className="absolute -top-[33px] px-2 py-1 rounded-md bg-green-500 text-white font-medium"
      >
        Add User
      </button>
      {usersQuery.isLoading && <UserTableSkeleton />}
      {usersQuery.data?.map((user: User) => (
        <PreviewUser key={`${user.first_name}-${user.last_name}`} user={user} />
      ))}
    </div>
  );
};
