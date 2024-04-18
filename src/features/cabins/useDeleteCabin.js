import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export const useDeleteCabin = () => {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteMutate } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("Успешно удалено");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isDeleting, deleteMutate };
};
