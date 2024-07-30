import { useNavigate } from "react-router-dom";
import { BackBtn, Layout } from "../components";
import { useState } from "react";
import { UserCreation } from "../interfaces";
import { validateProperties } from "../utils/validateJson";
import { useCreateUser } from "../hooks/useCreateUser";

export const CreateUserPage = () => {
  const navigate = useNavigate();
  const userMutation = useCreateUser();
  const [form, setForm] = useState<UserCreation>({
    avatar: "",
    email: "",
    first_name: "",
    second_name: "",
  });

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
    userMutation.mutate(form);
    navigate("/");
  };

  return (
    <Layout title="Create User">
      <BackBtn />
      <div className="rounded-md p-[20px] shadow-lg mt-[20px] flex flex-col items-center gap-2">
        <h1 className="text-[30px] font-medium">New User Info</h1>
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
