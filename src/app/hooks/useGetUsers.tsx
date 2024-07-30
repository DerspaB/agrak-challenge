import { useQuery } from "@tanstack/react-query";
import { userActions } from "../services/userActions";

export const useGetUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: userActions.fetchAllUser,
  });

  return query;
};
