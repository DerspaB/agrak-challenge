import { useNavigate } from "react-router-dom";
import { BackBtn, Layout } from "../components";
import { useState } from "react";
import { validateProperties } from "../utils/validateJson";
import { useAppSelector } from "../../redux/hooks";
import { getUser } from "../../redux/slices/userSlice";
import { User } from "../interfaces/user";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useDeleteUser } from "../hooks/useDeleteUser";

export const UpdateUserPage = () => {
  const navigate = useNavigate();
  const userUpdateMutation = useUpdateUser();
  const userDeleteMutation = useDeleteUser();
  const currentUser = useAppSelector(getUser);
  const [form, setForm] = useState<User>(currentUser);

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleValidateForm = () => {
    if (validateProperties(form)) {
      alert("Please fill all the form");
      return;
    }
    userUpdateMutation.mutate(form);
    navigate("/");
  };

  const handleDeleteUser = () => {
    userDeleteMutation.mutate(form.id);
    navigate("/");
  };

  return (
    <Layout title="Update User">
      <BackBtn />
      <div className="rounded-md p-[20px] shadow-lg mt-[20px] flex flex-col items-center gap-2">
        <h1 className="text-[30px] font-medium">Update User Info</h1>
        <input
          name="first_name"
          onChange={handleChangeForm}
          className="w-[400px] border mt-[10px] p-2 rounded-md"
          type="text"
          placeholder="Write your first name"
          value={form.first_name}
        />

        <input
          onChange={handleChangeForm}
          name="second_name"
          className="w-[400px] border mt-[10px] p-2 rounded-md"
          type="text"
          placeholder="Write your second name"
          value={form.second_name}
        />
        <input
          onChange={handleChangeForm}
          name="email"
          className="w-[400px] border mt-[10px] p-2 rounded-md"
          type="email"
          placeholder="write your email"
          value={form.email}
        />
        <input
          onChange={handleChangeForm}
          name="avatar"
          className="w-[400px] border mt-[10px] p-2 rounded-md"
          type="text"
          placeholder="write your avatar url"
          value={form.avatar}
        />

        <div className="py-[10px] flex w-full gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/")}
            className="bg-red-600 text-white font-semibold px-2 py-1 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteUser}
            className="bg-orange-400 text-white font-semibold px-2 py-1 rounded-md"
          >
            Delete
          </button>
          <button
            onClick={handleValidateForm}
            className="bg-green-600 text-white font-semibold px-2 py-1 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};
