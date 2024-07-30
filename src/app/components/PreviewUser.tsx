import { useDeleteUser } from "../hooks/useDeleteUser";
import { User } from "../interfaces";

interface PreviewUserProps {
  user: User;
}

export const PreviewUser = ({ user }: PreviewUserProps) => {
  const userMutation = useDeleteUser();

  const handleDeleteUser = () => {
    userMutation.mutate(user.id);
  };
  return (
    <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[60px_repeat(4,_1fr)] items-center gap-4 p-2 w-full relative">
      <section className="w-[60px] h-[60px] rounded-full">
        <img
          draggable={false}
          className="object-cover w-[60px] h-[60px] rounded-full"
          src={user.avatar}
          alt={user.last_name}
        />
      </section>
      <h3 className="font-semibold">{user.first_name}</h3>
      <h3 className="hidden sm:block font-semibold">{user.second_name}</h3>
      <h3 className="hidden sm:block font-semibold">{user.email}</h3>
      <div className="flex justify-center items-center gap-3">
        <button className="bg-blue-400 text-white px-2 py-1 font-medium rounded-md">
          Edit
        </button>
        <button
          onClick={handleDeleteUser}
          className="bg-red-500 text-white px-2 py-1 font-medium rounded-md"
        >
          Delete
        </button>
      </div>
      <hr className="border absolute bottom-0 w-full" />
    </div>
  );
};
