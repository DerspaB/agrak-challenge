import { useGetUsers } from "../hooks/useGetUsers";
import { PreviewUser, UserTableSkeleton } from "./index";
export const ListOfUsers = () => {
  const usersQuery = useGetUsers();

  return (
    <div className="p-[20px] bg-white border rounded-lg shadow-lg my-[20px]  h-full">
      {usersQuery.isLoading && <UserTableSkeleton />}
      {usersQuery.data?.map((user) => (
        <PreviewUser key={`${user.first_name}-${user.last_name}`} user={user} />
      ))}
    </div>
  );
};
