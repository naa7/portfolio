import { useState } from "react";

type AlertType = "success" | "error" | "info";

interface AlertState {
  show: boolean;
  message: string;
  type: AlertType;
}

const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    message: "",
    type: "success",
  });

  type ShowAlertFunction = (
    show?: boolean,
    message?: string,
    type?: AlertType
  ) => void;
  type HideAlertFunction = () => void;

  const showAlert: ShowAlertFunction = (
    show = false,
    message = "",
    type = "success"
  ) => {
    setAlert({ show, message, type });
  };

  const hideAlert: HideAlertFunction = () => {
    setAlert({ show: false, message: "", type: "success" });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
