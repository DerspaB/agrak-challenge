import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userActions } from "../services/userActions";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: userActions.deleteUser,
    onSuccess: () => queryClient.invalidateQueries(),
    onError: () => console.log("error deleting product"),
  });

  return mutation;
};
