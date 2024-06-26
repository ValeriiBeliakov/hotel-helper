import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
const LogOut = () => {
  const { logoutMutate, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logoutMutate}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
};

export default LogOut;
