import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signupMutate, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("Аккаунт создан");
    },
    onError: () => {
      toast.error("Не получилось создать аккаунт");
    },
  });
  return { signupMutate, isLoading };
};
