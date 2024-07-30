import { userActions } from "../services/userActions";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: userActions.fetchAllUser,
  });

  return query;
};
