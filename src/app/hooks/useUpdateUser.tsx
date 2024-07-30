import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userActions } from "../services/userActions";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: userActions.updateUser,
    onSuccess: () => queryClient.invalidateQueries(),
    onError: () => console.log("error updating product"),
  });

  return mutation;
};
