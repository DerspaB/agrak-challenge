import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userActions } from "../services/userActions";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: userActions.createUser,
    onSuccess: () => queryClient.invalidateQueries(),
    onError: () => console.log("error creating product"),
  });

  return mutation;
};
