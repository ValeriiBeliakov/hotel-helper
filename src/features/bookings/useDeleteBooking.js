import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isDeleting, mutate: deleteMutate } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("Успешно удалено");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isDeleting, deleteMutate };
};
